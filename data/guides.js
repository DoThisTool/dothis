/* DoThis — plain-English digital errand guides.
   All content is local. No network required to read guides. */

window.DOTHIS_GUIDES = [
  {
    id: "save-photo",
    title: "Save a photo someone sent me",
    summary: "Keep a picture from a text, email, or chat so you can find it later.",
    category: "phone",
    time: "2 min",
    difficulty: "Easy",
    platforms: ["iPhone", "Android"],
    tags: ["photo", "picture", "save", "text", "message", "gallery"],
    doneWhen: "You can open your Photos or Gallery app and see the picture there.",
    steps: {
      iPhone: [
        "Open the message, email, or chat that has the photo.",
        "Tap the photo once so it opens larger.",
        "Tap the share icon (a square with an arrow pointing up). On some apps you may see a download icon instead.",
        "Tap Save Image (or Download Image).",
        "Open the Photos app. Look in Recents or Library — your picture should be there."
      ],
      Android: [
        "Open the message, email, or chat that has the photo.",
        "Tap the photo once so it opens larger.",
        "Tap the download icon, or tap the three dots and choose Download or Save.",
        "If the app asks which album, pick Gallery or Downloads.",
        "Open your Gallery or Photos app. The picture should appear in a recent or Downloads album."
      ]
    },
    tips: [
      "If you don’t see Save, try pressing and holding the photo until a menu appears.",
      "Saving a photo does not send it to anyone else — it only stores a copy on your phone."
    ]
  },
  {
    id: "share-wifi",
    title: "Share the Wi‑Fi password with a guest",
    summary: "Let a visitor get online without reading a long password out loud.",
    category: "home",
    time: "3 min",
    difficulty: "Easy",
    platforms: ["iPhone", "Android", "Windows"],
    tags: ["wifi", "wi-fi", "password", "guest", "router", "network"],
    doneWhen: "Your guest’s phone shows connected to your home Wi‑Fi and can open a website.",
    steps: {
      iPhone: [
        "Make sure your phone is already on the home Wi‑Fi.",
        "Open Settings → Wi‑Fi.",
        "Tap the i (info) button next to your network name.",
        "Tap Password, then unlock with Face ID, Touch ID, or your passcode.",
        "Tap Copy, or show the password so your guest can type it.",
        "On a newer iPhone near another Apple device: open the Wi‑Fi screen and follow the prompt to share automatically."
      ],
      Android: [
        "Open Settings → Network & internet (or Connections) → Internet or Wi‑Fi.",
        "Tap your connected network, or tap the gear icon next to it.",
        "Tap Share, QR code, or the password field (wording varies by phone).",
        "Unlock if asked. Show the QR code for your guest to scan, or read/copy the password.",
        "Guest: open their Wi‑Fi list, choose your network, and paste or type the password."
      ],
      Windows: [
        "Click the Wi‑Fi icon on the taskbar (bottom-right).",
        "Click Properties under your connected network, or go to Settings → Network & internet → Wi‑Fi → your network.",
        "Look for View Wi‑Fi security key / Show password and confirm with your Windows PIN if asked.",
        "Or check the sticker on your router — many home routers print the default Wi‑Fi name and password there.",
        "Give that password to your guest (or change it later in the router settings if it was never updated)."
      ]
    },
    tips: [
      "Never post your Wi‑Fi password on social media or in a group chat with strangers.",
      "If the password on the router sticker doesn’t work, someone may have changed it — ask the person who set up the internet."
    ]
  },
  {
    id: "stop-autoplay",
    title: "Stop YouTube videos from autoplaying",
    summary: "Keep the next video from starting when you only wanted one.",
    category: "web",
    time: "1 min",
    difficulty: "Easy",
    platforms: ["Computer", "Phone"],
    tags: ["youtube", "autoplay", "video", "quiet", "stop"],
    doneWhen: "When a video ends, the next one does not start by itself.",
    steps: {
      Computer: [
        "Open YouTube in your browser and play any video.",
        "Look under the video player for the Autoplay toggle (often on the right, near related videos).",
        "Click it so it is off. It usually turns gray when off.",
        "If you don’t see it: click your profile picture (top right) → Settings → Playback and performance → turn off Autoplay next video.",
        "Refresh the page and play a short video to confirm nothing starts after it ends."
      ],
      Phone: [
        "Open the YouTube app.",
        "Tap your profile picture (usually bottom-right or top-right).",
        "Tap Settings → Playback (or Data saving).",
        "Turn off Autoplay next video (or Autoplay).",
        "Play a short video and wait until the end — the next video should not start on its own."
      ]
    },
    tips: [
      "This only affects YouTube. Other sites may have their own autoplay settings.",
      "If Autoplay keeps turning back on, you may be signed into a different account — check the profile picture."
    ]
  },
  {
    id: "unsubscribe",
    title: "Stop unwanted emails (find Unsubscribe)",
    summary: "Leave a mailing list without replying “STOP” to a real person by mistake.",
    category: "email",
    time: "3 min",
    difficulty: "Easy",
    platforms: ["Any email"],
    tags: ["email", "unsubscribe", "spam", "newsletter", "marketing"],
    doneWhen: "You’ve used the official unsubscribe link, or marked the mail as spam if it looks shady.",
    steps: {
      "Any email": [
        "Open one of the unwanted emails from that company or list.",
        "Scroll all the way to the bottom of the message.",
        "Look for small text that says Unsubscribe, Manage preferences, or Email settings. Tap or click it.",
        "On the page that opens, confirm you want to leave the list. You usually do not need to give a reason.",
        "Wait a few days. Legitimate lists stop; a last “sorry to see you go” email is normal.",
        "If there is no unsubscribe link, or the email asks you to click a strange link to “verify”: do not click. Use your email app’s Report spam or Junk button instead."
      ]
    },
    tips: [
      "Replying “unsubscribe” only works if the message clearly says to reply that way. For most marketing mail, the bottom link is safer.",
      "If a message pretends to be your bank and asks you to log in, do not use any link in it — go to the bank’s site yourself or call them. (CalmClick can help check suspicious links.)",
      "You may still get mail for a short time while their system updates."
    ]
  },
  {
    id: "bigger-text",
    title: "Make text larger on your computer",
    summary: "Ease eye strain by enlarging text in Windows or in your browser.",
    category: "computer",
    time: "2 min",
    difficulty: "Easy",
    platforms: ["Windows", "Browser only"],
    tags: ["text", "font", "large", "accessibility", "eyes", "read"],
    doneWhen: "Menus and pages are easier to read without leaning toward the screen.",
    steps: {
      Windows: [
        "Click the Start button → Settings (gear icon).",
        "Click Accessibility (or Ease of Access on older Windows) → Text size.",
        "Drag the slider to the right to make text bigger. Watch the preview.",
        "Click Apply. Some apps may need to be closed and reopened.",
        "Optional: Settings → System → Display → Scale — try 125% or 150% if everything feels small."
      ],
      "Browser only": [
        "Open the page you want to read (Chrome, Edge, or Firefox).",
        "Hold Ctrl and press the + (plus) key a few times to zoom in.",
        "Hold Ctrl and press 0 (zero) anytime to reset to normal size.",
        "Or: click the three dots/menu → Zoom → plus button."
      ]
    },
    tips: [
      "Start with a small change. Huge scale can make buttons fall off the screen.",
      "On a laptop, Ctrl and the trackpad pinch-zoom often works in the browser too."
    ]
  },
  {
    id: "screenshot-windows",
    title: "Take a screenshot on Windows",
    summary: "Capture what’s on your screen to save or send to someone helping you.",
    category: "computer",
    time: "2 min",
    difficulty: "Easy",
    platforms: ["Windows"],
    tags: ["screenshot", "screen", "capture", "snip", "print screen"],
    doneWhen: "You have an image file of your screen, or it is sitting in an email/chat ready to send.",
    steps: {
      Windows: [
        "Press the Windows key + Shift + S at the same time.",
        "The screen dims and a small toolbar appears at the top.",
        "Click Rectangular snip (first icon), then drag a box around what you want to capture.",
        "The image is copied. A small preview may appear — click it to edit or save.",
        "To save: click the save icon (floppy disk), choose Pictures or Desktop, give it a name, click Save.",
        "Simpler option: press PrtScn (Print Screen). Then open Paint, press Ctrl + V, then File → Save as."
      ]
    },
    tips: [
      "Windows key + PrtScn often saves a full-screen shot straight into Pictures → Screenshots.",
      "Don’t include passwords or bank balances in a screenshot you send to someone you don’t fully trust."
    ]
  },
  {
    id: "print-or-pdf",
    title: "Print a page or save it as a PDF",
    summary: "Get a paper copy, or a file you can keep without the live website.",
    category: "web",
    time: "2 min",
    difficulty: "Easy",
    platforms: ["Windows"],
    tags: ["print", "pdf", "save", "paper", "document"],
    doneWhen: "Paper comes out of the printer, or you have a .pdf file in a folder you recognize.",
    steps: {
      Windows: [
        "Open the page or document you want.",
        "Press Ctrl + P (or click the menu → Print).",
        "In the printer list: choose your real printer for paper, or Microsoft Print to PDF / Save as PDF for a file.",
        "Check the preview. Change pages or layout if needed.",
        "Click Print. If you chose PDF, pick a folder (Desktop is fine), type a name, click Save.",
        "Open that folder and double-click the file to make sure it looks right."
      ]
    },
    tips: [
      "If nothing prints, check that the printer is powered on and shows no error lights.",
      "PDFs are great for recipes, tickets, and letters you want to keep offline."
    ]
  },
  {
    id: "email-photo",
    title: "Send a photo by email",
    summary: "Attach a picture so family or a doctor’s office can open it.",
    category: "email",
    time: "3 min",
    difficulty: "Easy",
    platforms: ["Computer", "Phone"],
    tags: ["email", "photo", "attach", "picture", "send"],
    doneWhen: "The message shows a paperclip or thumbnail of your photo and is in Sent mail.",
    steps: {
      Computer: [
        "Open your email (Gmail, Outlook, Yahoo, etc.) and click Compose or New mail.",
        "Type the other person’s address in the To field. Add a short subject like “Photo from Tuesday”.",
        "Click the paperclip icon, Attach, or Insert photo.",
        "Find your picture (often Pictures or Downloads), click it, then Open.",
        "Wait until the upload finishes. Write a short note if you want, then click Send.",
        "Check Sent or Sent Items to confirm it went out."
      ],
      Phone: [
        "Open your email app and tap Compose (pencil or +).",
        "Enter the address and a short subject.",
        "Tap the paperclip or Attach, then choose Gallery / Photos.",
        "Select the picture. If it asks about size, Medium is usually fine.",
        "Tap the send arrow. Check Sent mail if you want peace of mind."
      ]
    },
    tips: [
      "Very large photos may bounce. If send fails, choose a smaller size when attaching.",
      "Double-check the To address — one wrong letter can send private photos to a stranger."
    ]
  },
  {
    id: "bookmark",
    title: "Save a website so you can find it again",
    summary: "Bookmark a useful page instead of hunting for it every time.",
    category: "web",
    time: "1 min",
    difficulty: "Easy",
    platforms: ["Chrome or Edge"],
    tags: ["bookmark", "favorite", "save", "website", "star"],
    doneWhen: "You can open a new tab and click your saved site from Bookmarks or Favorites.",
    steps: {
      "Chrome or Edge": [
        "Open the website you want to keep.",
        "Click the star icon at the right end of the address bar (where the web address is).",
        "A small box appears. You can rename the bookmark if the title is messy.",
        "Choose a folder — Bookmarks bar is easiest for beginners — then click Done.",
        "To use it later: click the bookmark name under the address bar, or open the menu → Bookmarks / Favorites."
      ]
    },
    tips: [
      "If you don’t see the bookmarks bar: press Ctrl + Shift + B to show it.",
      "Bookmarks stay on this computer (and your browser account if you’re signed in)."
    ]
  },
  {
    id: "copy-paste",
    title: "Copy and paste (the skill everyone assumes)",
    summary: "Move text or a link from one place to another without retyping.",
    category: "computer",
    time: "2 min",
    difficulty: "Easy",
    platforms: ["Windows", "Phone"],
    tags: ["copy", "paste", "text", "keyboard", "ctrl"],
    doneWhen: "The same text appears in the new place without you typing it again.",
    steps: {
      Windows: [
        "Highlight the text: click at the start, hold the mouse button, drag to the end, then release.",
        "Copy it: press Ctrl + C (or right-click the highlighted text → Copy).",
        "Click where you want the text to go (email, form, message box).",
        "Paste it: press Ctrl + V (or right-click → Paste).",
        "For a whole line or link, you can often triple-click to select it first."
      ],
      Phone: [
        "Press and hold on a word until it highlights.",
        "Drag the blue handles to cover all the text you want.",
        "Tap Copy.",
        "Go to the app where you want it. Press and hold in the empty text box.",
        "Tap Paste."
      ]
    },
    tips: [
      "Ctrl + X cuts (moves) text instead of copying. Use Ctrl + C when you want to keep the original.",
      "Ctrl + Z undoes a mistake on Windows — very handy after a bad paste."
    ]
  },
  {
    id: "find-download",
    title: "Find a file I just downloaded",
    summary: "Locate that PDF, photo, or installer after you clicked Download.",
    category: "computer",
    time: "2 min",
    difficulty: "Easy",
    platforms: ["Windows", "Chrome or Edge"],
    tags: ["download", "file", "folder", "pdf", "find"],
    doneWhen: "You can open the file from File Explorer or from the browser’s download list.",
    steps: {
      "Chrome or Edge": [
        "In the browser, press Ctrl + J. This opens your downloads list.",
        "Find the file name. Click it to open, or click Show in folder (folder icon) to see where it lives.",
        "Most files go to a folder called Downloads."
      ],
      Windows: [
        "Open File Explorer (yellow folder icon on the taskbar).",
        "In the left sidebar, click Downloads.",
        "Click the Date modified column header so the newest files rise to the top.",
        "Double-click the file to open it.",
        "Optional: drag it to Desktop if you want it more visible."
      ]
    },
    tips: [
      "If you don’t recognize the file, don’t open it — especially if it arrived from an unexpected email.",
      "Installers often end in .exe. Only run those from companies you trust."
    ]
  },
  {
    id: "quieter-notifications",
    title: "Make the computer interrupt you less",
    summary: "Quiet pop-ups and sounds so you can focus or rest.",
    category: "computer",
    time: "3 min",
    difficulty: "Easy",
    platforms: ["Windows"],
    tags: ["notifications", "quiet", "focus", "pop-up", "do not disturb"],
    doneWhen: "Fewer banners appear at the corner of the screen, or Focus assist / Do not disturb is on.",
    steps: {
      Windows: [
        "Click the time and date on the bottom-right of the screen to open the notification panel.",
        "Turn on Do not disturb or Focus assist (name depends on your Windows version).",
        "For more control: Start → Settings → System → Notifications.",
        "Turn off notifications for apps you don’t need alerts from (games, shops, news).",
        "Leave on important ones if you want — for example your calendar or phone link.",
        "Optional: lower system sounds under Settings → System → Sound."
      ]
    },
    tips: [
      "You can turn notifications back on the same way — nothing is deleted.",
      "Urgent alarms and some security messages may still appear, which is intentional."
    ]
  },
  {
    id: "phone-wifi",
    title: "Connect your phone to home Wi‑Fi",
    summary: "Use your home internet instead of mobile data when you’re home.",
    category: "phone",
    time: "3 min",
    difficulty: "Easy",
    platforms: ["iPhone", "Android"],
    tags: ["wifi", "wi-fi", "phone", "connect", "internet", "home"],
    doneWhen: "Your phone shows the Wi‑Fi symbol and websites load with mobile data turned off (optional test).",
    steps: {
      iPhone: [
        "Open Settings → Wi‑Fi.",
        "Turn Wi‑Fi on if it is off.",
        "Wait for your home network name to appear in the list. Tap it.",
        "Type the Wi‑Fi password carefully (passwords are case-sensitive).",
        "Tap Join. A checkmark should appear next to the network name.",
        "Open Safari and visit a simple site like example.com to confirm it works."
      ],
      Android: [
        "Open Settings → Network & internet (or Connections) → Internet or Wi‑Fi.",
        "Turn Wi‑Fi on.",
        "Tap your home network name in the list.",
        "Enter the password and tap Connect.",
        "You should see Connected under that network.",
        "Open Chrome and load a simple webpage to confirm."
      ]
    },
    tips: [
      "If the password fails, check the router sticker or ask who set up the internet — see also “Share the Wi‑Fi password with a guest”.",
      "Public café Wi‑Fi is different: only use it for casual browsing, not banking, if you can avoid it."
    ]
  },
  {
    id: "zoom-page",
    title: "Make one webpage bigger (zoom)",
    summary: "Enlarge a single site without changing your whole computer.",
    category: "web",
    time: "1 min",
    difficulty: "Easy",
    platforms: ["Chrome or Edge"],
    tags: ["zoom", "bigger", "webpage", "magnify", "read"],
    doneWhen: "That page’s text and buttons look larger; other apps stay the same size.",
    steps: {
      "Chrome or Edge": [
        "Open the webpage.",
        "Hold Ctrl and press + (plus) until it’s comfortable to read.",
        "To zoom out, hold Ctrl and press − (minus).",
        "To return to normal, hold Ctrl and press 0 (zero).",
        "You can also click the three-dot menu → Zoom, and use the + / − buttons there."
      ]
    },
    tips: [
      "Most browsers remember zoom level per website.",
      "If an entire site looks broken after zooming, reset with Ctrl + 0."
    ]
  },
  {
    id: "safe-restart",
    title: "Restart your computer the right way",
    summary: "A clean restart fixes many “weird” problems better than holding the power button.",
    category: "computer",
    time: "3 min",
    difficulty: "Easy",
    platforms: ["Windows"],
    tags: ["restart", "reboot", "freeze", "slow", "fix"],
    doneWhen: "Windows has fully started again and you can sign in as usual.",
    steps: {
      Windows: [
        "Save any work (documents, emails you’re writing). Close apps if you can.",
        "Click the Start button.",
        "Click the Power icon.",
        "Click Restart (not Shut down, and not the power button on the machine).",
        "Wait. The screen will go dark, then Windows will load again. This can take a few minutes.",
        "Sign in. Check whether the problem is gone."
      ]
    },
    tips: [
      "Only hold the physical power button for several seconds if the computer is completely frozen and Restart is impossible — that force-off is a last resort.",
      "Restarting is safe and normal. It is not the same as deleting your files.",
      "If problems continue every day, write down the exact error text — a helper (or CalmClick’s error explainer) can use that."
    ]
  }
];

window.DOTHIS_CATEGORIES = [
  { id: "all", label: "All guides", icon: "📚" },
  { id: "computer", label: "Computer", icon: "💻" },
  { id: "phone", label: "Phone", icon: "📱" },
  { id: "web", label: "Web & video", icon: "🌐" },
  { id: "email", label: "Email", icon: "✉️" },
  { id: "home", label: "Home Wi‑Fi", icon: "🏠" }
];
