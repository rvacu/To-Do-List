

# 🧭 To‑Do List (HTML/CSS/JS) — README

> A minimal, responsive to‑do app that demonstrates clean DOM manipulation, event handling, and component-tyle CSS

---

## ✨ Overview

This project is a client‑side to‑do list you can run by simply opening `index.html`. It lets you add items, mark them complete, and delete them—no backend or build tools required. The UI uses a playful repeating background and a soft card layout to keep things friendly while showing solid front‑end fundamentals.

---

## 🔧 Features

- Add tasks with a single click  
- Mark tasks **Complete** (adds line‑through + bold)  
- **Delete** tasks instantly  
- Zero external libraries; no bundler required  
---

## 🧱 Tech Stack

- **HTML5** for structure  
- **CSS3** for layout & theme (card UI, background image)  
- **Vanilla JavaScript (ES6+)** for app logic and events

---

## 📦 Prerequisites (and versions)

> You can run it without installing anything. For local servers or development niceties, the following are recommended:

- **Modern browser** (any of): Chrome 120+, Edge 120+, Firefox 122+, Safari 17+  
- **Optional:** Node.js **18+** (for a local static server like `http-server`), Git **2.40+**

---

## 🚀 Installation

Choose one:

**A. Download & Open**  
1. Download the project files (or extract from a ZIP).  
2. Double‑click `index.html` to open in your browser.

**B. Clone & Serve (optional but neat for dev)**  
```bash
git clone <your-repo-url> todo-list
cd todo-list
# Option 1: VS Code Live Server extension (Right‑click -> "Open with Live Server")
# Option 2: Node static server
npm i -g http-server
http-server -p 8080
# Visit http://localhost:8080
```

---

## 🗂️ Project Structure

```
.
├─ index.html      # App markup and component hooks
├─ style.css       # Theme + layout + background image
├─ script.js       # DOM logic for add/complete/delete
└─ squid.png       # Background asset used by CSS
```

---

## 🛠️ Build

No build step is required. It’s a static site—open `index.html` or serve statically as shown above.

---

## 📖 Usage

1. Open the page.  
2. Type a task in the input field.  
3. Click **Add Task!**  
4. Use **Complete** to mark finished items, or **Delete** to remove them.

### ✅ Example

```
Task: "Buy milk"
[Add Task!] → Item appears with "Complete" and "Delete" buttons
Click "Complete" → task is bold and struck through
Click "Delete"   → task disappears from the list
```

---

## ⚠️ Limits (What this project **doesn’t** do)

- ❌ No unit/integration tests provided  
- ❌ Accessibility is basic (e.g., keyboard shortcuts not implemented)  
- ❌ Not optimized for internationalization or RTL layouts  
- ❌ No offline packaging/PWA features

---

## 🧭 Roadmap (next steps)

- Persist tasks to **localStorage**  
- Add **keyboard shortcuts** and ARIA improvements  
- Batch actions (clear completed, reorder via drag‑and‑drop)  
- Simple filtering: *All / Active / Completed*  
- Optional theming toggle (light/dark)

---

## 🙌 Credits

- Built with love using plain HTML, CSS, and JavaScript.

