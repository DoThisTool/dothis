/* DoThis — search, filters, text size, config wiring. Guides from data/guides.js */

(function () {
  const STORAGE_KEY = "dothis-text-large";

  const CATEGORY_ICONS = {
    all: "📚",
    computer: "💻",
    phone: "📱",
    web: "🌐",
    email: "✉️",
    home: "🏠"
  };

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function getConfig() {
    return window.DOTHIS_CONFIG || {};
  }

  function getGuides() {
    return Array.isArray(window.DOTHIS_GUIDES) ? window.DOTHIS_GUIDES : [];
  }

  function getCategories() {
    return Array.isArray(window.DOTHIS_CATEGORIES) ? window.DOTHIS_CATEGORIES : [];
  }

  function getGuideById(id) {
    return getGuides().find(function (g) {
      return g.id === id;
    });
  }

  function initConfigLinks() {
    const cfg = getConfig();
    const dl = qs("#downloadLocalBtn");
    if (dl && cfg.localZipUrl) {
      dl.setAttribute("href", cfg.localZipUrl);
    }
    const gh = qs("#githubLink");
    if (gh && cfg.githubUrl) {
      gh.setAttribute("href", cfg.githubUrl);
    }
    const cc = qs("#calmClickLink");
    if (cc && cfg.calmClickUrl) {
      cc.setAttribute("href", cfg.calmClickUrl);
    }
    const ps = qs("#policySnapLink");
    if (ps && cfg.policySnapUrl) {
      ps.setAttribute("href", cfg.policySnapUrl);
    }
    if (cfg.siteUrl) {
      let og = qs('meta[property="og:url"]');
      if (!og) {
        og = document.createElement("meta");
        og.setAttribute("property", "og:url");
        document.head.appendChild(og);
      }
      const path = window.location.pathname.split("/").pop() || "index.html";
      const base = cfg.siteUrl.replace(/\/?$/, "/");
      og.setAttribute("content", base + (path === "" ? "" : path) + window.location.search);
    }
  }

  function initTextSize() {
    const btn = qs("#textSizeBtn");
    if (!btn) return;

    function apply(large) {
      document.body.classList.toggle("text-large", large);
      btn.setAttribute("aria-pressed", large ? "true" : "false");
      btn.title = large ? "Use normal text size" : "Make text larger";
      try {
        localStorage.setItem(STORAGE_KEY, large ? "1" : "0");
      } catch (e) {
        /* ignore */
      }
    }

    let large = false;
    try {
      large = localStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      /* ignore */
    }
    apply(large);

    btn.addEventListener("click", function () {
      apply(!document.body.classList.contains("text-large"));
    });
  }

  function matchesQuery(guide, query) {
    if (!query) return true;
    const hay = [
      guide.title,
      guide.summary,
      guide.category,
      guide.difficulty,
      (guide.tags || []).join(" "),
      (guide.platforms || []).join(" "),
      guide.doneWhen || ""
    ]
      .join(" ")
      .toLowerCase();
    return query
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every(function (word) {
        return hay.indexOf(word) !== -1;
      });
  }

  function renderGuideCard(guide) {
    const a = document.createElement("a");
    a.className = "guide-card";
    a.href = "guide.html?id=" + encodeURIComponent(guide.id);
    a.setAttribute("data-category", guide.category || "");

    const icon = CATEGORY_ICONS[guide.category] || "📄";
    a.innerHTML =
      '<div class="guide-card-top">' +
      '<span class="guide-card-icon" aria-hidden="true"></span>' +
      '<span class="guide-card-arrow" aria-hidden="true">→</span>' +
      "</div>" +
      "<h3></h3>" +
      "<p></p>" +
      '<div class="meta-row">' +
      '<span class="meta-pill time"></span>' +
      '<span class="meta-pill difficulty"></span>' +
      '<span class="meta-pill category"></span>' +
      "</div>";

    qs(".guide-card-icon", a).textContent = icon;
    qs("h3", a).textContent = guide.title;
    qs("p", a).textContent = guide.summary;
    qs(".time", a).textContent = guide.time || "Few minutes";
    qs(".difficulty", a).textContent = guide.difficulty || "Easy";
    const cat = getCategories().find(function (c) {
      return c.id === guide.category;
    });
    qs(".category", a).textContent = cat ? cat.label : guide.category;
    return a;
  }

  function initHome() {
    const grid = qs("#guideGrid");
    const search = qs("#guideSearch");
    const catRow = qs("#categoryRow");
    const countEl = qs("#guideCount");
    if (!grid) return;

    let activeCategory = "all";

    function update() {
      const query = search ? search.value.trim() : "";
      const guides = getGuides().filter(function (g) {
        if (activeCategory !== "all" && g.category !== activeCategory) return false;
        return matchesQuery(g, query);
      });

      grid.innerHTML = "";
      if (guides.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.innerHTML =
          "<strong>No guides match that search</strong>" +
          "<p>Try a simpler word — like “photo”, “wifi”, “email”, or “print”.</p>";
        grid.appendChild(empty);
      } else {
        guides.forEach(function (g) {
          grid.appendChild(renderGuideCard(g));
        });
      }

      if (countEl) {
        countEl.textContent =
          guides.length === getGuides().length
            ? guides.length + " guides"
            : guides.length + " of " + getGuides().length + " guides";
      }
    }

    if (catRow) {
      getCategories().forEach(function (cat) {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cat-btn";
        btn.textContent = (cat.icon ? cat.icon + " " : "") + cat.label;
        btn.setAttribute("aria-pressed", cat.id === "all" ? "true" : "false");
        btn.dataset.category = cat.id;
        btn.addEventListener("click", function () {
          activeCategory = cat.id;
          qsa(".cat-btn", catRow).forEach(function (b) {
            b.setAttribute("aria-pressed", b.dataset.category === activeCategory ? "true" : "false");
          });
          update();
        });
        li.appendChild(btn);
        catRow.appendChild(li);
      });
    }

    if (search) {
      search.addEventListener("input", update);
    }

    // Deep-link: ?q=wifi or #guides with hash search later
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q && search) {
      search.value = q;
    }

    update();
  }

  function platformKeys(guide) {
    return Object.keys(guide.steps || {});
  }

  function initGuidePage() {
    const root = qs("#guideRoot");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "";
    const guide = getGuideById(id);

    if (!guide) {
      root.innerHTML =
        '<div class="wrap guide-hero">' +
        '<a class="back-link" href="index.html">← All guides</a>' +
        "<h1>Guide not found</h1>" +
        '<p class="guide-summary">That guide may have moved. Pick another from the list.</p>' +
        '<p><a class="btn btn-primary" href="index.html">Browse guides</a></p>' +
        "</div>";
      document.title = "Guide not found — DoThis";
      return;
    }

    document.title = guide.title + " — DoThis";
    const metaDesc = qs('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", guide.summary);
    const ogTitle = qs('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", guide.title + " — DoThis");
    const ogDesc = qs('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", guide.summary);

    const platforms = platformKeys(guide);
    const hasMultiple = platforms.length > 1;
    const cat = getCategories().find(function (c) {
      return c.id === guide.category;
    });
    const catLabel = cat ? cat.label : guide.category;

    let tabsHtml = "";
    if (hasMultiple) {
      tabsHtml =
        '<ul class="platform-tabs" role="tablist" aria-label="Choose your device">' +
        platforms
          .map(function (p, i) {
            return (
              '<li role="presentation">' +
              '<button type="button" role="tab" id="tab-' +
              i +
              '" data-platform="' +
              escapeAttr(p) +
              '" aria-selected="' +
              (i === 0 ? "true" : "false") +
              '" aria-controls="panel-' +
              i +
              '">' +
              escapeHtml(p) +
              "</button></li>"
            );
          })
          .join("") +
        "</ul>";
    }

    const panelsHtml = platforms
      .map(function (p, i) {
        const steps = guide.steps[p] || [];
        const list = steps
          .map(function (s) {
            return "<li>" + escapeHtml(s) + "</li>";
          })
          .join("");
        return (
          '<div class="steps-platform" id="panel-' +
          i +
          '" role="tabpanel" data-platform="' +
          escapeAttr(p) +
          '" ' +
          (i === 0 ? "" : "hidden") +
          ' aria-labelledby="tab-' +
          i +
          '">' +
          '<h3 class="print-platform-label">' +
          escapeHtml(p) +
          "</h3>" +
          '<ol class="step-list">' +
          list +
          "</ol></div>"
        );
      })
      .join("");

    const tips = guide.tips || [];
    const tipsHtml =
      tips.length > 0
        ? '<aside class="tips-panel" aria-label="Helpful tips"><h2>Good to know</h2><ul>' +
          tips
            .map(function (t) {
              return "<li>" + escapeHtml(t) + "</li>";
            })
            .join("") +
          "</ul></aside>"
        : "";

    const related = getGuides()
      .filter(function (g) {
        return g.id !== guide.id && g.category === guide.category;
      })
      .slice(0, 3);

    const relatedHtml =
      related.length > 0
        ? '<section class="related wrap" aria-labelledby="related-title">' +
          '<h2 id="related-title">Related guides</h2>' +
          '<div class="guide-grid" id="relatedGrid"></div></section>'
        : "";

    root.innerHTML =
      '<div class="wrap guide-hero">' +
      '<a class="back-link" href="index.html">← All guides</a>' +
      "<h1>" +
      escapeHtml(guide.title) +
      "</h1>" +
      '<p class="guide-summary">' +
      escapeHtml(guide.summary) +
      "</p>" +
      '<div class="meta-row" style="margin-bottom:1rem">' +
      '<span class="meta-pill time">' +
      escapeHtml(guide.time || "") +
      "</span>" +
      '<span class="meta-pill">' +
      escapeHtml(guide.difficulty || "Easy") +
      "</span>" +
      '<span class="meta-pill">' +
      escapeHtml(catLabel || "") +
      "</span>" +
      "</div>" +
      '<div class="done-box"><strong>You’re done when…</strong><p>' +
      escapeHtml(guide.doneWhen || "") +
      "</p></div>" +
      (hasMultiple
        ? '<p class="search-hint" style="margin-bottom:0.75rem"><strong>Pick your device</strong> so the steps match what you have.</p>'
        : "") +
      tabsHtml +
      '<div class="steps-panel"><h2>Steps</h2>' +
      (hasMultiple
        ? '<p class="steps-intro">Follow the steps for the device you selected above.</p>'
        : '<p class="steps-intro">Take them one at a time — no rush.</p>') +
      panelsHtml +
      "</div>" +
      tipsHtml +
      '<div class="guide-actions">' +
      '<button type="button" class="btn btn-primary" id="printBtn">Print this guide</button>' +
      '<a class="btn btn-secondary" href="index.html">More guides</a>' +
      "</div></div>" +
      relatedHtml;

    if (hasMultiple) {
      qsa(".platform-tabs button", root).forEach(function (btn) {
        btn.addEventListener("click", function () {
          const platform = btn.getAttribute("data-platform");
          qsa(".platform-tabs button", root).forEach(function (b) {
            b.setAttribute("aria-selected", b === btn ? "true" : "false");
          });
          qsa(".steps-platform", root).forEach(function (panel) {
            const show = panel.getAttribute("data-platform") === platform;
            if (show) panel.removeAttribute("hidden");
            else panel.setAttribute("hidden", "");
          });
        });
      });
    }

    const printBtn = qs("#printBtn", root);
    if (printBtn) {
      printBtn.addEventListener("click", function () {
        window.print();
      });
    }

    const relatedGrid = qs("#relatedGrid", root);
    if (relatedGrid) {
      related.forEach(function (g) {
        relatedGrid.appendChild(renderGuideCard(g));
      });
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, "&#39;");
  }

  document.addEventListener("DOMContentLoaded", function () {
    initConfigLinks();
    initTextSize();
    initHome();
    initGuidePage();
  });
})();
