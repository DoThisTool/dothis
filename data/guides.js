/* DoThis — plain-English guides for everyday life & tech.
   All content is local. No network required to read guides. */

window.DOTHIS_GUIDES = [
  /* ========== TECHNOLOGY ========== */
  {
    id: "save-photo",
    title: "Save a photo someone sent me",
    summary: "Keep a picture from a text, email, or chat so you can find it later.",
    category: "tech",
    time: "2 min",
    difficulty: "Easy",
    platforms: ["iPhone", "Android"],
    tags: ["photo", "picture", "save", "text", "message", "gallery", "phone"],
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
    tags: ["wifi", "wi-fi", "password", "guest", "router", "network", "home"],
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
    category: "entertainment",
    time: "1 min",
    difficulty: "Easy",
    platforms: ["Computer", "Phone"],
    tags: ["youtube", "autoplay", "video", "quiet", "stop", "streaming"],
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
      "This only affects YouTube. Other apps may have their own autoplay settings.",
      "If Autoplay keeps turning back on, you may be signed into a different account — check the profile picture."
    ]
  },
  {
    id: "unsubscribe",
    title: "Stop unwanted emails (find Unsubscribe)",
    summary: "Leave a mailing list without replying “STOP” to a real person by mistake.",
    category: "tech",
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
      "If a message pretends to be your bank and asks you to log in, do not use any link in it — go to the bank’s site yourself or call them.",
      "You may still get mail for a short time while their system updates."
    ]
  },
  {
    id: "bigger-text",
    title: "Make text larger on your computer",
    summary: "Ease eye strain by enlarging text in Windows or in your browser.",
    category: "tech",
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
    category: "tech",
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
    category: "tech",
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
      "PDFs are great for tickets, leases, and letters you want to keep offline."
    ]
  },
  {
    id: "email-photo",
    title: "Send a photo by email",
    summary: "Attach a picture so family, a landlord, or an office can open it.",
    category: "tech",
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
    category: "tech",
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
    category: "tech",
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
    category: "tech",
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
    category: "tech",
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
    category: "tech",
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
    category: "tech",
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
    category: "tech",
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
      "Restarting is safe and normal. It is not the same as deleting your files."
    ]
  },
  {
    id: "two-factor",
    title: "Turn on two-factor login (2FA) for an important account",
    summary: "Add a second check so a stolen password alone can’t open your email or bank.",
    category: "tech",
    time: "10 min",
    difficulty: "Medium",
    platforms: ["Any major account"],
    tags: ["2fa", "two factor", "security", "password", "authenticator", "login"],
    doneWhen: "You can sign out and sign back in using your password plus a code or prompt.",
    steps: {
      "Any major account": [
        "Open the website or app while already signed in (email, bank, school, or work account).",
        "Find Settings, Security, or Account → Security / Sign-in & security.",
        "Look for Two-step verification, Two-factor authentication, or 2FA and turn it on.",
        "Choose a method you can actually use: authenticator app (stronger) or text message (okay if that’s all you have).",
        "Follow the on-screen steps. Save backup codes somewhere private offline (not in a public chat).",
        "Sign out once, then sign back in to prove it works before you need it in a hurry."
      ]
    },
    tips: [
      "Prefer an authenticator app over SMS when the site offers it — SIM scams target text codes.",
      "If you lose your phone, those backup codes are how you get back in. Treat them like spare keys."
    ]
  },
  {
    id: "password-manager-start",
    title: "Start using a password manager (simple path)",
    summary: "Stop reusing one password everywhere without writing secrets on sticky notes.",
    category: "tech",
    time: "15 min",
    difficulty: "Medium",
    platforms: ["Computer"],
    tags: ["password", "manager", "security", "login", "bitwarden", "safe"],
    doneWhen: "You have one master password you remember, and at least one site login saved in the manager.",
    steps: {
      Computer: [
        "Pick a well-known free option (examples people often use: Bitwarden, or your browser’s built-in password manager if you already trust that browser account).",
        "Create the account only on the official website or app store listing — not from a random ad.",
        "Create a long master password you have never used elsewhere. Write it once on paper and store it somewhere private until you memorize it.",
        "Install the official browser extension or desktop app from the product’s own site.",
        "Log into one important site, change that password to a new random one generated by the manager, and save it there.",
        "Next time you log in, let the manager fill it. Repeat for email and banking over the next week — no need to do every site in one night."
      ]
    },
    tips: [
      "Your master password is the one password you must never forget and never reuse.",
      "If a free tool suddenly asks for payment to unlock basic saving, double-check you are on the real product site."
    ]
  },

  /* ========== FINANCE ========== */
  {
    id: "simple-budget",
    title: "Make a simple monthly budget",
    summary: "See where money goes so rent and food don’t surprise you mid-month.",
    category: "finance",
    time: "20 min",
    difficulty: "Easy",
    platforms: ["Paper or notes app"],
    tags: ["budget", "money", "rent", "bills", "spending", "finance"],
    doneWhen: "You have three numbers written down: income, must-pay bills, and what’s left for everything else.",
    steps: {
      "Paper or notes app": [
        "Write this month’s take-home pay (what actually hits your account after taxes). If it varies, use a low realistic average.",
        "List must-pay costs: rent or mortgage, utilities, phone, minimum debt payments, transit pass, groceries estimate, insurance.",
        "Add those must-pays. Subtract from take-home pay. What’s left is for fun, savings, and surprises.",
        "Give the leftover a simple split, for example: half savings/debt extra, half flexible spending — adjust to your life.",
        "Put bill due dates on a calendar (phone calendar is fine) with a reminder 3 days before each one.",
        "Check once a week for 5 minutes: any surprise charges? Move money if a category is running hot."
      ]
    },
    tips: [
      "A budget is a flashlight, not a prison. Adjust it when life changes.",
      "If must-pays already exceed income, that’s useful information — cut flexible costs first, then seek help (trusted family, nonprofit credit counseling) rather than ignoring it."
    ]
  },
  {
    id: "pay-bill-online",
    title: "Pay a bill online safely",
    summary: "Pay rent, utilities, or a card without handing cash to the wrong place.",
    category: "finance",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Computer or phone"],
    tags: ["bill", "pay", "rent", "utilities", "online", "payment"],
    doneWhen: "You see a confirmation number or “paid” status, and the money left your account (or is scheduled).",
    steps: {
      "Computer or phone": [
        "Open a new browser tab and type the company’s real website yourself (or use their official app from the app store). Do not click a link from a random text or email if you’re unsure.",
        "Sign in to your account, or create one using the account number from a real paper/email bill you already trust.",
        "Find Pay bill, Make a payment, or Billing.",
        "Enter the amount (or choose “current balance”), payment date, and your bank/debit method.",
        "Read the total and date carefully. Confirm. Screenshot or save the confirmation number.",
        "Check your bank app later that day or the next for the pending charge so you know it matched."
      ]
    },
    tips: [
      "If a message says “pay now or service stops” and pushes a short weird link, pause — call the number on your real bill instead.",
      "Autopay is convenient; set a calendar reminder the day before so you still have enough in the account."
    ]
  },
  {
    id: "cancel-free-trial",
    title: "Cancel a free trial before it charges",
    summary: "Stop a streaming or app trial from becoming a surprise subscription.",
    category: "finance",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Phone or computer"],
    tags: ["trial", "cancel", "subscription", "streaming", "charge", "money"],
    doneWhen: "The account shows canceled / ends on a date, and you get a confirmation email or screen.",
    steps: {
      "Phone or computer": [
        "Find which store billed you: Apple App Store, Google Play, or the company’s own website (Netflix, Spotify, etc.). Check your email for “trial started” or a receipt.",
        "Apple: Settings → your name → Subscriptions → tap the service → Cancel subscription.",
        "Google Play: open Play Store → profile icon → Payments & subscriptions → Subscriptions → the service → Cancel.",
        "Company website: sign in → Account → Membership / Billing / Subscription → Cancel. Confirm through every “are you sure?” screen.",
        "Write down the date access actually ends. You can usually keep using it until then.",
        "Optional: set a calendar reminder a day before any other trials you still have open."
      ]
    },
    tips: [
      "Canceling does not always delete your account — it stops future charges.",
      "If you can’t find Cancel, search the help center for “cancel subscription” plus the service name, or use the app store path above."
    ]
  },
  {
    id: "bank-alerts",
    title: "Turn on bank transaction alerts",
    summary: "Get a text or push when money moves so fraud and oops-spends show up fast.",
    category: "finance",
    time: "8 min",
    difficulty: "Easy",
    platforms: ["Bank app or website"],
    tags: ["bank", "alerts", "fraud", "text", "notifications", "card"],
    doneWhen: "You receive a test or real alert after a small purchase, or the app shows alerts are on.",
    steps: {
      "Bank app or website": [
        "Open your bank’s official app or website (type it yourself or use the app you already installed from the real store).",
        "Sign in. Open Profile, Settings, Security, or Accounts → Alerts / Notifications.",
        "Turn on alerts for: debit/credit purchases, low balance, and large withdrawals if offered.",
        "Choose how you want them: push notification, text, or email. Push or text is fastest for fraud.",
        "Save changes. Make a tiny purchase or transfer if you want to confirm an alert arrives.",
        "If alerts don’t appear, check that your phone number and email on the bank profile are current."
      ]
    },
    tips: [
      "Alerts don’t stop every scam, but they give you hours instead of weeks to react.",
      "Never read a full card number or password into a “bank” call you didn’t place yourself."
    ]
  },
  {
    id: "read-paycheck",
    title: "Read a basic paycheck / pay stub",
    summary: "Know what gross, net, and deductions mean so the number in your bank makes sense.",
    category: "finance",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Any pay stub"],
    tags: ["paycheck", "pay stub", "gross", "net", "taxes", "work", "salary"],
    doneWhen: "You can point to gross pay, net pay, and at least one deduction on your stub.",
    steps: {
      "Any pay stub": [
        "Find Gross pay (or Gross earnings): what you earned before money was taken out.",
        "Find Net pay (or Take-home): what you actually receive. This should match (or nearly match) the deposit in your bank.",
        "Scan deductions/taxes: federal/state tax, Social Security, Medicare, health insurance, retirement — names vary.",
        "Check the pay period dates and hours if you’re hourly. Wrong hours are worth asking HR or your manager about quickly.",
        "Save a PDF or photo of each stub in a private folder for taxes and apartment applications.",
        "If net pay suddenly drops, compare this stub to the last one line by line before panicking."
      ]
    },
    tips: [
      "Gross is not “what I can spend.” Budget with net.",
      "HR or payroll can explain a line you don’t recognize — ask once with the stub in hand."
    ]
  },
  {
    id: "emergency-fund-start",
    title: "Start a tiny emergency fund",
    summary: "Park a small cushion so one surprise bill doesn’t break the whole month.",
    category: "finance",
    time: "15 min",
    difficulty: "Easy",
    platforms: ["Bank app"],
    tags: ["savings", "emergency", "fund", "money", "buffer"],
    doneWhen: "You have a separate savings balance (even $25–$50) and a plan for the next automatic transfer.",
    steps: {
      "Bank app": [
        "Open your bank app. See if you already have a savings account; if not, open one with the same bank (usually free).",
        "Nickname it something boring and clear, like “Emergency — do not touch”.",
        "Transfer a starter amount you can survive without this week — even $20 counts.",
        "Set a recurring transfer on payday: a fixed small amount (for example $15–$50) from checking to that savings.",
        "Only use it for true emergencies: essential car/medical/rent gaps — not sales or nights out.",
        "When you spend from it, make a plan the same week to refill it."
      ]
    },
    tips: [
      "A small fund you actually build beats a huge goal you never start.",
      "If debt interest is crushing you, still keep a tiny buffer so you don’t need more high-interest debt for every flat tire."
    ]
  },

  /* ========== HOME ========== */
  {
    id: "laundry-basics",
    title: "Do laundry without ruining clothes",
    summary: "Wash a normal load without shrinking sweaters or dyeing everything pink.",
    category: "home",
    time: "15 min active",
    difficulty: "Easy",
    platforms: ["Laundry room"],
    tags: ["laundry", "wash", "clothes", "detergent", "dryer", "apartment"],
    doneWhen: "Clean clothes are dry, folded or hung, and nothing obvious is ruined.",
    steps: {
      "Laundry room": [
        "Empty pockets. Zip zippers. Separate lights and darks if you have enough for two loads; if not, wash cold.",
        "Check care labels on anything expensive or wool/silk — when in doubt, hang-wash or use a gentle bag.",
        "Load the machine loosely — don’t pack it tight. Add detergent per the bottle’s “normal load” line (more is not cleaner).",
        "Choose cold water for most everyday clothes; warm only when the label allows and items are sturdy.",
        "Start the washer. When done, move clothes to the dryer promptly so mildew doesn’t start.",
        "Dryer: medium or low heat. Pull sweaters, bras, and anything “lay flat / hang dry” out before the dryer. Clean the lint trap every time."
      ]
    },
    tips: [
      "One red sock in a hot white load is how you invent new colors. Cold + sorted is safer.",
      "Overloading is the #1 reason clothes stay dirty and machines smell."
    ]
  },
  {
    id: "reset-breaker",
    title: "Reset a tripped circuit breaker",
    summary: "Bring power back to one room after outlets or lights suddenly die.",
    category: "home",
    time: "5 min",
    difficulty: "Easy",
    platforms: ["Apartment or house panel"],
    tags: ["breaker", "electric", "power", "outage", "outlet", "fuse"],
    doneWhen: "The breaker stays on and the room’s lights or outlets work again.",
    steps: {
      "Apartment or house panel": [
        "Unplug or turn off the device that was running when power died (hair dryer, space heater, microwave) if you know which one.",
        "Find the breaker panel (gray metal door in a hallway, closet, garage, or basement). Open it carefully.",
        "Look for a switch that is between ON and OFF, or clearly flipped the opposite way from the others. That one tripped.",
        "Push it firmly to OFF first, then all the way to ON. (Some need that full OFF → ON motion.)",
        "Check the room. If it trips again immediately, leave it off and unplug more devices before retrying once.",
        "If it keeps tripping, stop and contact your landlord, building maintenance, or an electrician — don’t keep forcing it."
      ]
    },
    tips: [
      "Wet hands and open panels don’t mix. Dry hands only.",
      "If half the apartment is dark and breakers look fine, it may be a wider outage — check a neighbor or outage map."
    ]
  },
  {
    id: "smoke-detector-test",
    title: "Test a smoke detector and change the battery",
    summary: "That chirp at 2 a.m. usually means a battery — here’s the calm fix.",
    category: "home",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Home or apartment"],
    tags: ["smoke", "detector", "alarm", "battery", "chirp", "safety"],
    doneWhen: "The alarm beeps loudly when tested and the random chirping has stopped (or maintenance is called).",
    steps: {
      "Home or apartment": [
        "If the unit is hardwired and you’re a renter, still try a test; battery changes may be your job or the landlord’s — check your lease norms.",
        "Press and hold the Test button until it blasts a loud alarm. Cover your ears. If silent, note that for maintenance.",
        "For battery models: twist the cover counterclockwise or open the marked door. Remove the old battery.",
        "Insert a new battery matching the type (often 9V or AA). Match + and −. Close/twist the cover until it clicks.",
        "Test again. The chirp should stop within a few minutes after a successful battery change.",
        "If it still chirps or won’t test, replace the whole unit if you own it, or submit a maintenance request if you rent."
      ]
    },
    tips: [
      "Never remove batteries and leave them out “for peace and quiet.” Fix or replace the unit.",
      "Vacuum dust from vents once in a while — dust causes false alarms."
    ]
  },
  {
    id: "change-mailing-address",
    title: "Change your mailing address after a move",
    summary: "Point mail, banks, and subscriptions toward your new place.",
    category: "home",
    time: "30 min",
    difficulty: "Easy",
    platforms: ["Computer"],
    tags: ["move", "address", "mail", "usps", "forwarding", "apartment"],
    doneWhen: "You’ve filed mail forwarding (if available where you live) and updated bank, job, and at least your top 3 accounts.",
    steps: {
      Computer: [
        "Make a list: bank, job/HR/payroll, tax agency if needed, doctor, insurance, school, subscriptions, Amazon/shopping, voter registration if applicable.",
        "In the U.S., start USPS.com Change of Address (official site only) for mail forwarding. Pay the small fee only on the official flow. Other countries: use your national postal service’s official site.",
        "Update your bank and employer first — money and tax forms matter most.",
        "Update phone, internet, and utility accounts if they’re in your name.",
        "Change the address on shopping and streaming accounts so packages don’t go to the old place.",
        "Tell close friends/family once. Keep an eye on the old mailbox (if you can) for a couple of weeks for stragglers."
      ]
    },
    tips: [
      "Scam sites mimic postal services. Type the official address yourself.",
      "Forwarding is temporary. Still update each account directly."
    ]
  },
  {
    id: "unclog-drain-basic",
    title: "Clear a slow bathroom sink or tub drain",
    summary: "Try safe first steps before calling a plumber or landlord.",
    category: "home",
    time: "20 min",
    difficulty: "Easy",
    platforms: ["Bathroom"],
    tags: ["drain", "clog", "sink", "tub", "hair", "plunger"],
    doneWhen: "Water drains in a few seconds instead of sitting in a pool.",
    steps: {
      Bathroom: [
        "Put on gloves if you have them. Remove the stopper or drain cover if it lifts out easily. Pull out visible hair and gunk with a tissue or zip-tie hook.",
        "Boil a kettle of water (if your pipes are metal; for plastic pipes use very hot tap water instead of rolling boil).",
        "Pour hot water down the drain in stages. Wait a minute. Check flow.",
        "If still slow: use a cup plunger on the drain with enough water to cover the plunger cup. Plunge firmly 10–15 times.",
        "Rinse with hot water again. Avoid mixing different chemical cleaners — dangerous fumes.",
        "If it’s fully blocked, sewage smell is strong, or multiple drains fail, stop and contact maintenance/landlord or a plumber."
      ]
    },
    tips: [
      "A $5 drain hair catcher prevents most bathroom clogs.",
      "Renters: document with a photo before and after if you’ll file a maintenance request."
    ]
  },
  {
    id: "trash-recycling-day",
    title: "Figure out trash and recycling day",
    summary: "Stop guessing which bin goes out and when in a new place.",
    category: "home",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Phone or computer"],
    tags: ["trash", "recycling", "garbage", "bins", "apartment", "city"],
    doneWhen: "You know which days bins go out, where they sit, and what belongs in recycling.",
    steps: {
      "Phone or computer": [
        "If you rent: check the move-in packet, building app, or email the landlord/office: “What days are trash and recycling, and where do bins go?”",
        "If you own or the city collects: search your city name + “trash collection schedule” + your address on the official city site.",
        "Note garbage day vs recycling day (sometimes the same, sometimes not). Add a repeating phone calendar reminder the evening before.",
        "Learn the rules: clean cardboard, no plastic bags in recycling in many cities, lids closed so animals don’t scatter trash.",
        "Ask where bulk items (mattress, couch) go — often a special pickup, not the weekly bin.",
        "Take a photo of the correct bin lineup once so roommates match it."
      ]
    },
    tips: [
      "Wrong bin placement can mean the truck skips you — check your block once on pickup morning.",
      "When in doubt, trash is safer than “wishcycling” dirty items that contaminate a whole load."
    ]
  },

  /* ========== FOOD ========== */
  {
    id: "grocery-list-plan",
    title: "Make a grocery list you’ll actually follow",
    summary: "Buy food for the week without three trips or a cart of random snacks only.",
    category: "food",
    time: "15 min",
    difficulty: "Easy",
    platforms: ["Notes app"],
    tags: ["grocery", "shopping", "list", "food", "meal", "budget"],
    doneWhen: "You have a list grouped by store section and a rough meal plan for several days.",
    steps: {
      "Notes app": [
        "Open your fridge and pantry. Write what’s already usable (rice, eggs, half a jar of sauce).",
        "Pick 4–5 dinners you can cook with overlapping ingredients (example: tacos, pasta, stir-fry, eggs + toast, one frozen backup).",
        "Add breakfast/lunch staples you run out of weekly: oats, bread, fruit, sandwich stuff, coffee.",
        "Group the list: produce, dairy, meat/protein, dry goods, frozen, household. Stores are laid out that way.",
        "Set a spending cap before you go. Shop the list first; treats only if money remains.",
        "Eat something small before shopping — hungry brains buy junk."
      ]
    },
    tips: [
      "A shared note with roommates prevents four jars of the same mayo.",
      "Unit price on shelf tags beats “bigger bag looks cheaper” guesses."
    ]
  },
  {
    id: "leftovers-safe",
    title: "Store leftovers so they stay safe to eat",
    summary: "Pack last night’s dinner without guessing how long it’s still okay.",
    category: "food",
    time: "5 min",
    difficulty: "Easy",
    platforms: ["Kitchen"],
    tags: ["leftovers", "fridge", "food safety", "meal prep", "containers"],
    doneWhen: "Food is in shallow containers in the fridge with a date, within two hours of cooking.",
    steps: {
      Kitchen: [
        "Within 2 hours of cooking (1 hour if the room is very hot), move leftovers into the fridge — don’t leave the pot on the stove overnight.",
        "Use shallow containers so food cools faster. Divide big pots into smaller boxes.",
        "Label with the date (masking tape + pen works). Most cooked leftovers are best within 3–4 days.",
        "Reheat until steaming hot all the way through. Soup and stew should bubble.",
        "When in doubt, throw it out — especially seafood, rice left out a long time, or anything that smells off.",
        "Freeze portions you won’t eat in 3 days. Frozen cooked meals keep quality longer; reheat fully after thawing in the fridge."
      ]
    },
    tips: [
      "Rice and pasta left at room temperature too long are common stomachache stories.",
      "Clear containers help you actually see food before it becomes science."
    ]
  },
  {
    id: "rice-pasta-basics",
    title: "Cook rice or pasta without a fancy recipe",
    summary: "Two staple methods that cover a lot of cheap, filling meals.",
    category: "food",
    time: "20 min",
    difficulty: "Easy",
    platforms: ["Kitchen"],
    tags: ["rice", "pasta", "cook", "dinner", "basics", "student"],
    doneWhen: "You have tender pasta or fluffy rice ready to add sauce, eggs, veggies, or leftovers.",
    steps: {
      Kitchen: [
        "Pasta: boil a large pot of water. Add a big pinch of salt when it boils. Add pasta. Stir in the first minute so it doesn’t stick.",
        "Taste a piece near the package time. Drain when tender with a tiny bit of bite (or softer if you prefer). Save a splash of pasta water if making sauce.",
        "Rice (stovetop white rice): rinse rice in cold water until it runs clearer. Use about 1 cup rice to 1.5–2 cups water (package is boss).",
        "Bring to a boil uncovered, then cover, low heat, ~15 minutes. Don’t peek constantly. Rest 5 minutes off heat, then fluff with a fork.",
        "Add protein or veg you have: frozen vegetables, an egg, canned beans, leftover chicken, jar sauce.",
        "Clean the pot soaking now — dried starch is harder later."
      ]
    },
    tips: [
      "Package directions beat memory. Brands differ.",
      "Burned bottom? You likely cooked too hot or with too little water — lower heat next time."
    ]
  },
  {
    id: "date-labels-food",
    title: "Understand sell-by and use-by dates",
    summary: "Stop throwing out fine food — and stop eating truly sketchy food.",
    category: "food",
    time: "5 min",
    difficulty: "Easy",
    platforms: ["Kitchen"],
    tags: ["expiration", "sell by", "use by", "food", "waste", "safety"],
    doneWhen: "You know which labels are about quality vs safety for common foods you buy.",
    steps: {
      Kitchen: [
        "Sell-by: mostly for the store. Food is often still fine after if stored right — use smell/sight and type of food.",
        "Best if used by / best by: about peak quality, not a hard safety cliff for many shelf-stable items.",
        "Use-by: take more seriously, especially on deli meat, fresh meat, and ready-to-eat packaged foods.",
        "When you open milk, deli meat, or jars, write the open date on the package. Don’t rely only on the factory date.",
        "Raw meat: cook or freeze by the use-by date. Fridge time after opening is short — check package guidance.",
        "If it smells wrong, is moldy (except intentional cheese rinds), or was left out for hours, skip it."
      ]
    },
    tips: [
      "Canned goods years past “best by” may taste flat; bulging or rusty cans are a hard no.",
      "When money is tight, learning dates reduces waste without playing food-poisoning roulette."
    ]
  },

  /* ========== HEALTH ========== */
  {
    id: "book-doctor-appointment",
    title: "Book a doctor or clinic appointment",
    summary: "Get on the calendar without wandering through five phone menus forever.",
    category: "health",
    time: "15 min",
    difficulty: "Easy",
    platforms: ["Phone or patient portal"],
    tags: ["doctor", "appointment", "clinic", "health", "primary care"],
    doneWhen: "You have a date, time, address, and any prep notes (fasting, ID, insurance card).",
    steps: {
      "Phone or patient portal": [
        "Find the clinic’s official number or patient portal from their real website or your insurance directory — not a random ad.",
        "Have ready: your full name, birth date, insurance card (if any), a short reason (“annual checkup”, “sore throat 4 days”, “refill”).",
        "Call or use Book appointment online. Ask for the earliest slot that fits, or join a waitlist/cancellation list.",
        "Write down: date, time, building address, suite, and whether to arrive early.",
        "Add it to your phone calendar with a reminder the day before and two hours before.",
        "Ask what to bring: photo ID, insurance card, list of medicines, and payment method for any copay."
      ]
    },
    tips: [
      "If you have no insurance, ask about sliding-scale clinics or community health centers in your area.",
      "Urgent symptoms (chest pain, trouble breathing, severe bleeding) are ER / emergency services — not a routine booking."
    ]
  },
  {
    id: "refill-prescription",
    title: "Refill a prescription",
    summary: "Order more meds before you run out at 9 p.m. on a Sunday.",
    category: "health",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Pharmacy app, website, or phone"],
    tags: ["prescription", "refill", "pharmacy", "medication", "health"],
    doneWhen: "The pharmacy confirms the refill is processing or ready, with a pickup or delivery time.",
    steps: {
      "Pharmacy app, website, or phone": [
        "Check the bottle label for the pharmacy name, Rx number, and remaining refills.",
        "If refills remain: use the pharmacy app, website, automated phone line, or counter to request a refill with the Rx number.",
        "If zero refills remain: contact the prescribing clinic/doctor for a renewal — many patient portals have “request refill”.",
        "Confirm pickup location, date, and ID requirements. Ask about cost if you’re paying cash.",
        "Set a phone reminder a few days before you take the last doses so you’re never at zero.",
        "When you pick up, verify your name and the drug name on the bag before you leave."
      ]
    },
    tips: [
      "Don’t skip doses to “stretch” critical meds without a clinician’s advice.",
      "Transferring pharmacies is normal if you move — ask the new pharmacy to pull the prescription."
    ]
  },
  {
    id: "urgent-care-vs-er",
    title: "Choose urgent care vs ER (quick guide)",
    summary: "A plain map of where to go when you’re sick or hurt and the doctor’s office is closed.",
    category: "health",
    time: "5 min",
    difficulty: "Easy",
    platforms: ["Any"],
    tags: ["urgent care", "ER", "emergency", "clinic", "health", "injury"],
    doneWhen: "You can name which option fits your situation and you know how you’ll get there.",
    steps: {
      Any: [
        "Call emergency services / go to the ER for: chest pain, trouble breathing, severe bleeding, stroke signs (face droop, arm weakness, speech trouble), overdose, suicidal crisis, major trauma, confusion/fainting you’re worried about.",
        "Consider urgent care or a nurse line for: sprains, minor cuts, earaches, UTI symptoms, mild fevers, sore throats, possible strep, small burns — when you need same-day help but it’s not life-threatening.",
        "Primary care / patient portal is best for ongoing issues, refills, and non-urgent follow-ups.",
        "If unsure, many insurers and health systems have a 24/7 nurse line — use the number on your insurance card.",
        "Bring ID, insurance card if you have one, a meds list, and a charger for your phone.",
        "For mental health crisis, use local emergency numbers or crisis lines posted by your country’s health service — save one in your phone before you need it."
      ]
    },
    tips: [
      "This is general education, not personal medical advice. When in doubt about severity, err toward emergency care.",
      "ER waits can be long for non-emergencies; urgent care is often faster when it truly fits."
    ]
  },
  {
    id: "meds-list",
    title: "Make a simple personal meds & allergy list",
    summary: "Carry what you take and what you’re allergic to for appointments and emergencies.",
    category: "health",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Phone notes"],
    tags: ["medication", "allergy", "list", "doctor", "emergency", "health"],
    doneWhen: "Your phone (and optional paper wallet card) lists meds, doses, allergies, and an emergency contact.",
    steps: {
      "Phone notes": [
        "Create a note titled “Medical — ICE” (In Case of Emergency).",
        "List each medicine and supplement: name, dose, time of day. Include inhalers and birth control if relevant.",
        "List allergies (drugs, foods, latex) and what happens (rash vs anaphylaxis).",
        "Add conditions a caregiver should know (asthma, diabetes, epilepsy) in one short line each.",
        "Add emergency contact name and phone. Optional: insurance member ID.",
        "Screenshot the note for offline access, or write a tiny card in your wallet. Update when prescriptions change."
      ]
    },
    tips: [
      "Don’t put your full Social Security number on this list.",
      "Share the note with a trusted person if you’re comfortable."
    ]
  },

  /* ========== EDUCATION ========== */
  {
    id: "submit-assignment-online",
    title: "Submit a school assignment online",
    summary: "Upload to Canvas, Google Classroom, or similar without the “did it go through?” panic.",
    category: "education",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Computer"],
    tags: ["homework", "assignment", "canvas", "classroom", "school", "upload"],
    doneWhen: "The site shows Submitted / Turned in, and you have a screenshot or confirmation time.",
    steps: {
      Computer: [
        "Save your file with a clear name: Lastname_Assignment1.pdf (export to PDF if they asked for PDF).",
        "Open the official class site from a bookmark or the school portal — not a random emailed link if it looks off.",
        "Open the assignment page. Read file type and size limits once more.",
        "Click Submit / Upload / Turn in. Choose your file. Wait for the progress bar to finish.",
        "Confirm the status says Submitted or Turned in. Screenshot that page with the time visible.",
        "If it fails, try another browser, smaller file, or school Wi‑Fi; email the teacher the file plus a note if the deadline is close (keep it polite and factual)."
      ]
    },
    tips: [
      "Submit a day early when you can — platforms love midnight outages.",
      "Google Docs: use File → Download → PDF if the teacher doesn’t want an edit link."
    ]
  },
  {
    id: "organize-school-files",
    title: "Organize school or course files on your computer",
    summary: "Stop losing essays in Downloads — build a simple folder system.",
    category: "education",
    time: "15 min",
    difficulty: "Easy",
    platforms: ["Windows"],
    tags: ["files", "folders", "school", "organize", "documents", "student"],
    doneWhen: "You have a class folder structure and know where this week’s files go.",
    steps: {
      Windows: [
        "Open File Explorer. Go to Documents (or OneDrive/Documents if you use cloud).",
        "Create a folder for this term, e.g. 2026-Spring.",
        "Inside it, create one folder per class: ENG101, MATH120, etc.",
        "Inside each class, optional subfolders: Notes, Assignments, Readings.",
        "Move current downloads into the right class folder. Rename files clearly.",
        "For each new download this term: save directly into the class folder (browser Save as) instead of leaving everything in Downloads."
      ]
    },
    tips: [
      "Cloud backup (OneDrive, Google Drive, school account) saves you when a laptop dies.",
      "Same system works for work training and certificates."
    ]
  },
  {
    id: "professional-email-school",
    title: "Email a teacher or advisor clearly",
    summary: "Short, polite messages that get answers faster than “hey u up?”.",
    category: "education",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Email"],
    tags: ["email", "teacher", "professor", "school", "professional", "advisor"],
    doneWhen: "You’ve sent a message with a clear subject, who you are, and a specific ask.",
    steps: {
      Email: [
        "Subject line that says the point: “Question about Essay 2 due Friday — Jane Doe, ENG101 Section B”.",
        "Greeting: “Hi Professor Rivera,” or “Hello Dr. Lee,” — use the name they use on the syllabus.",
        "Sentence 1: who you are (full name + class + section).",
        "Sentence 2–3: the question or request, with what you already tried (“I checked the syllabus section on late work…”).",
        "Close with thanks and your name. Send from your school email if you have one.",
        "Wait at least 1–2 business days before a polite follow-up. Don’t spam six messages overnight."
      ]
    },
    tips: [
      "Attachments: PDF preferred; say “attached” in the body so they look.",
      "Write when you’re calm. Drafts fold is your friend."
    ]
  },
  {
    id: "study-block",
    title: "Run a 25-minute study block (Pomodoro-style)",
    summary: "Focus long enough to finish something without “studying” for six empty hours.",
    category: "education",
    time: "30 min",
    difficulty: "Easy",
    platforms: ["Any"],
    tags: ["study", "focus", "pomodoro", "homework", "exam", "productivity"],
    doneWhen: "You completed one timed focus block and can name what you finished.",
    steps: {
      Any: [
        "Pick one task small enough to finish or clearly advance: “outline intro”, “do 10 practice problems”, not “study biology.”",
        "Put your phone in another room or use Do Not Disturb. Close extra browser tabs.",
        "Set a timer for 25 minutes. Work only on that task until it rings.",
        "When it rings, write one line: what you did. Take a 5-minute real break (water, stretch — not infinite scrolling if you can help it).",
        "Repeat 2–4 times, then take a longer break.",
        "End by scheduling the next block on your calendar so momentum isn’t a feeling — it’s an appointment."
      ]
    },
    tips: [
      "If 25 minutes feels impossible, start with 10. Consistency beats heroics.",
      "Noise: libraries, headphones, or café background — pick what your brain tolerates."
    ]
  },

  /* ========== WORK ========== */
  {
    id: "resume-one-page",
    title: "Build a simple one-page resume",
    summary: "A clean structure hiring humans can scan in 20 seconds.",
    category: "work",
    time: "45 min",
    difficulty: "Medium",
    platforms: ["Computer"],
    tags: ["resume", "job", "cv", "hiring", "career"],
    doneWhen: "You have a one-page document PDF with contact info, experience bullets, and education.",
    steps: {
      Computer: [
        "Open a blank doc. At the top: name, phone, email, city/region, LinkedIn or portfolio if you have one (no full street address required).",
        "Add a short skills line (tools and strengths you truly have).",
        "Experience: for each job/internship/volunteer role — title, place, dates, then 2–4 bullets starting with action verbs (Stocked, Scheduled, Resolved, Built).",
        "Each bullet: what you did + how it helped (numbers if you have them: “closed register drawer with $0 variance 4 nights/week”).",
        "Education: school, program or degree, year or expected year. Skip GPA unless it’s strong and recent.",
        "Export/save as PDF named FirstLast_Resume.pdf. Proofread out loud. Ask one trusted person to spot typos."
      ]
    },
    tips: [
      "One page is enough early in your career. Fancy templates that break when uploaded to job sites are not worth it.",
      "Don’t lie. Exaggeration that you can’t discuss in an interview backfires."
    ]
  },
  {
    id: "video-interview-setup",
    title: "Set up for a video interview",
    summary: "Look and sound decent on Zoom/Teams without a fancy studio.",
    category: "work",
    time: "20 min",
    difficulty: "Easy",
    platforms: ["Computer or phone"],
    tags: ["interview", "zoom", "teams", "video", "job", "camera"],
    doneWhen: "A test call shows your face lit, audio clear, and the meeting link opens correctly.",
    steps: {
      "Computer or phone": [
        "Charge your device. Update the meeting app (Zoom, Teams, Google Meet) ahead of time.",
        "Sit facing a window or lamp so light hits your face, not a bright window behind you.",
        "Camera at eye level (stack books under a laptop). Clean the lens. Look at the camera when speaking.",
        "Headphones with a mic reduce echo. Test audio in the app’s settings.",
        "Close other programs. Mute notifications. Put a “interview in progress” note on the door if you can.",
        "Join 5 minutes early. Have resume and a glass of water nearby. Keep a charger in reach."
      ]
    },
    tips: [
      "If the link fails, email the recruiter immediately with your phone number for a backup call.",
      "Blurred background is fine; chaotic bedrooms distract more than a plain wall."
    ]
  },
  {
    id: "job-application-tracker",
    title: "Track job applications in a simple list",
    summary: "Know where you applied, when, and what they said — without relying on memory.",
    category: "work",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Spreadsheet or notes"],
    tags: ["job", "application", "tracker", "hiring", "career", "spreadsheet"],
    doneWhen: "You have a table with at least company, role, date applied, status, and link or contact.",
    steps: {
      "Spreadsheet or notes": [
        "Create a spreadsheet (Google Sheets, Excel) or a clean note with columns: Company | Role | Date applied | Status | Link/posting | Contact | Notes.",
        "Status examples: Applied, Screening, Interview, Offer, Rejected, Ghosted.",
        "Every time you apply, add a row the same day — not “later.”",
        "When you get an email, update Status and Notes (interview date, what they asked).",
        "Once a week, scan for applications older than 2 weeks with no reply — decide to follow up once or move on.",
        "Keep offer details (pay, start date) in Notes so you can compare fairly."
      ]
    },
    tips: [
      "Following up once after ~7–10 business days is professional; daily emails are not.",
      "Save the job description text — postings disappear and you’ll want them before interviews."
    ]
  },
  {
    id: "follow-up-application",
    title: "Send a polite job-application follow-up",
    summary: "One short email that nudges without sounding desperate.",
    category: "work",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Email"],
    tags: ["job", "follow up", "email", "application", "career"],
    doneWhen: "You’ve sent a brief follow-up to the right person or general hiring email after enough time has passed.",
    steps: {
      Email: [
        "Wait about 7–10 business days after applying (or after the posted deadline) unless they gave another timeline.",
        "Find a recruiter or HR email from the posting; if none, use the company’s listed careers email.",
        "Subject: “Follow-up: [Role title] application — [Your Name]”.",
        "Body: 4–6 lines — remind them of the role and date, restate one fit sentence, attach resume again if helpful, thank them.",
        "Proofread. Send once. Log it in your application tracker.",
        "If no reply, focus energy on other applications rather than a third follow-up."
      ]
    },
    tips: [
      "No reply often means volume, not personal failure.",
      "Never badmouth the company or a slow process in the follow-up."
    ]
  },

  /* ========== ENTERTAINMENT ========== */
  {
    id: "cast-to-tv",
    title: "Show your phone screen on a smart TV",
    summary: "Watch a video or photos on the big screen without buying new gadgets (if your TV supports it).",
    category: "entertainment",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["iPhone", "Android"],
    tags: ["cast", "tv", "chromecast", "airplay", "streaming", "mirror"],
    doneWhen: "Your phone’s video or screen appears on the TV.",
    steps: {
      iPhone: [
        "Make sure the iPhone and TV/Apple TV/smart TV are on the same Wi‑Fi.",
        "For apps that support it (Photos, many streamers): open the video → tap the AirPlay icon → choose your TV.",
        "To mirror the whole screen: open Control Center → Screen Mirroring → select the TV → enter the code if shown.",
        "To stop: Control Center → Screen Mirroring → Stop Mirroring.",
        "If the TV doesn’t appear: reboot the TV’s Wi‑Fi or the phone’s Wi‑Fi, then retry."
      ],
      Android: [
        "Connect the phone and Chromecast/smart TV to the same Wi‑Fi.",
        "In a supported app (YouTube, Netflix, etc.): tap the Cast icon → choose the TV.",
        "To mirror the whole screen: Settings → Connected devices / Cast / Smart View / Screen mirroring (name varies by brand) → select the TV.",
        "Accept any prompt on the TV. To stop, tap the Cast icon → Disconnect.",
        "If it fails: power-cycle the TV streaming stick and confirm guest Wi‑Fi isn’t isolating devices."
      ]
    },
    tips: [
      "Hotel Wi‑Fi often blocks casting. Use a streaming app’s built-in sign-in on the TV instead.",
      "Mirroring drains battery — plug in for long movies."
    ]
  },
  {
    id: "find-local-events",
    title: "Find free or cheap local events",
    summary: "Fill a weekend without defaulting only to scrolling.",
    category: "entertainment",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Phone or computer"],
    tags: ["events", "local", "concert", "meetup", "free", "weekend"],
    doneWhen: "You have at least one event on your calendar with time and place.",
    steps: {
      "Phone or computer": [
        "Check your city’s official parks & recreation or library events page.",
        "Search Eventbrite, Facebook Events, or Meetup for your city + this weekend; filter Free if needed.",
        "Look at local colleges — public lectures, games, and showcases are often open or cheap.",
        "Ask a coworker or classmate “what’s actually fun around here?” — humans beat algorithms for hidden gems.",
        "Pick one event. Add address + travel time to your calendar. Set a leave-the-house reminder.",
        "Invite one person if that makes you more likely to go. Going alone is also allowed."
      ]
    },
    tips: [
      "Free outdoor concerts and library workshops are real and underrated.",
      "Verify last-minute cancellations the morning of."
    ]
  },
  {
    id: "playlist-for-chores",
    title: "Make a playlist so chores hurt less",
    summary: "A simple music queue for cleaning, laundry, or cooking.",
    category: "entertainment",
    time: "10 min",
    difficulty: "Easy",
    platforms: ["Spotify, YouTube Music, or Apple Music"],
    tags: ["playlist", "music", "chores", "spotify", "motivation"],
    doneWhen: "You have a named playlist with enough songs to cover one full chore session.",
    steps: {
      "Spotify, YouTube Music, or Apple Music": [
        "Open your music app and create a new playlist named something you’ll recognize (“Clean boost”, “Sunday reset”).",
        "Add 10–20 songs you already know you like — speed of adding matters more than perfection.",
        "Optional: start from a public “upbeat pop” or “focus” playlist and save/copy tracks you enjoy.",
        "Download the playlist for offline play if your app allows (helpful with flaky Wi‑Fi).",
        "When chores start, hit shuffle and put the phone where you can still hear it.",
        "Update the list monthly so it doesn’t go stale."
      ]
    },
    tips: [
      "Podcasts work too if music isn’t your thing — same “queue before you start” idea.",
      "Keep volume safe if you share walls with neighbors."
    ]
  },
  {
    id: "game-night-simple",
    title: "Host a low-stress game night",
    summary: "Friends, snacks, one game everyone can learn in five minutes.",
    category: "entertainment",
    time: "30 min prep",
    difficulty: "Easy",
    platforms: ["Home"],
    tags: ["friends", "games", "party", "social", "hangout"],
    doneWhen: "You have a date, a game, a snack plan, and invites sent.",
    steps: {
      Home: [
        "Pick a night 3–7 days out. Keep it 2–3 hours so people can say yes.",
        "Choose one easy game (cards, a simple board game, or a party video game with easy multiplayer). Avoid 40-page rulebooks for a first hang.",
        "Invite 3–6 people with a clear message: day, time, address, what to bring if anything.",
        "Snacks: water + one crunchy + one sweet is enough. You are not catering a wedding.",
        "Clear a table. Charge controllers if needed. Have a backup YouTube “how to play” video ready.",
        "End on time if people work early — good hosts protect tomorrow morning too."
      ]
    },
    tips: [
      "Tell people the vibe: chill, not competitive Olympics.",
      "If budgets are tight, make it potluck snacks explicitly."
    ]
  },

  /* ========== TRANSPORT ========== */
  {
    id: "tire-pressure-check",
    title: "Check car tire pressure",
    summary: "A five-minute habit that saves gas, tires, and roadside drama.",
    category: "transport",
    time: "15 min",
    difficulty: "Easy",
    platforms: ["Car"],
    tags: ["car", "tire", "pressure", "psi", "vehicle", "maintenance"],
    doneWhen: "All tires (and spare if you can) are at the PSI on your door sticker, or you’ve planned a fix for a leak.",
    steps: {
      Car: [
        "Find the recommended PSI on the driver’s door jamb sticker (not the tire sidewall max number).",
        "Check when tires are cold (before a long drive). Borrow or buy a simple pressure gauge.",
        "Unscrew the valve cap. Press the gauge on firmly until the hiss stops and you get a reading.",
        "If low, add air at a station until you hit the sticker number. If high, press the valve stem center briefly to release air and recheck.",
        "Replace valve caps. Repeat for all four tires. Check the spare when you can.",
        "If a tire keeps going flat, get it patched — don’t just keep topping off forever."
      ]
    },
    tips: [
      "Gas station air pumps often need quarters or a card — keep a gauge in the glove box.",
      "A tire that looks fine can still be underinflated."
    ]
  },
  {
    id: "rideshare-safety",
    title: "Take a rideshare more safely",
    summary: "Match car, plate, and driver before you get in — every time.",
    category: "transport",
    time: "3 min",
    difficulty: "Easy",
    platforms: ["Phone"],
    tags: ["uber", "lyft", "rideshare", "safety", "night", "travel"],
    doneWhen: "You’re in the correct car with the trip shared or visible in the app.",
    steps: {
      Phone: [
        "When the car arrives, check the app: license plate, car color/model, and driver photo/name.",
        "Ask “Who are you here for?” and wait for your name — don’t answer to a wrong name.",
        "Sit in the back seat when alone. Wear a seatbelt.",
        "Share trip status with a friend in the app if the option exists, especially at night.",
        "Keep the app open and watch the route map. If something feels wrong, ask to be let out in a public place and end the trip.",
        "Rate fairly and report serious issues in the app after you’re safe."
      ]
    },
    tips: [
      "Never get into a car that hails you if the plate doesn’t match the app.",
      "Charge your phone before late-night rides."
    ]
  }
];

window.DOTHIS_CATEGORIES = [
  { id: "all", label: "All guides", icon: "📚" },
  { id: "finance", label: "Finance", icon: "💰" },
  { id: "home", label: "Home", icon: "🏠" },
  { id: "food", label: "Food", icon: "🍳" },
  { id: "health", label: "Health", icon: "❤️" },
  { id: "education", label: "Education", icon: "📖" },
  { id: "work", label: "Work", icon: "💼" },
  { id: "entertainment", label: "Entertainment", icon: "🎬" },
  { id: "tech", label: "Technology", icon: "💻" },
  { id: "transport", label: "Transport", icon: "🚗" }
];
