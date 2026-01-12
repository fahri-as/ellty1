# Ellty Frontend Test Assignment - Page Selector Component

This repository contains the solution for the Frontend Test Assignment: creating a pixel-perfect `PageSelector` component based on Figma specifications.

**Live Demo:** [https://ellty1-three.vercel.app/](https://ellty1-three.vercel.app/)

## 🚀 Features & Implementation

The component has been built to strictly fully comply with the **9 provided requirements**:

1.  ✅ **All 8 Checkbox States**: Fully implemented including:
    - **Unchecked**: Default, Hover (Light gray checkmark `#E3E3E3`), Pressed (Darker gray checkmark `#878787`).
    - **Checked**: Default (Blue `#2469F6`), Hover (Lighter `#5087F8`), Pressed (`#2469F6` with thicker border).
    - **Pressed Visual**: Includes "Halo" ring effect (10% opacity) on Click & Hold.
2.  ✅ **Button States**: Default, Hover, and Pressed states with accurate color transitions.
3.  ✅ **Component Dimensions**: Exact width of **370px** verified.
4.  ✅ **Button Dimensions**: Exact size of **340x40px**.
5.  ✅ **Checkbox Shape**: Exact **25x25px** size with **6px** border radius.
6.  ✅ **Scrolling**: 6-page list with functional scrolling and **hidden scrollbar** (CSS-based).
7.  ✅ **Colors**: All hex codes matched exactly to design specs.
8.  ✅ **Layout & Spacing**: Pixel-perfect padding (Row: `8px 15px 8px 30px`, Separators: `10px 15px`).
9.  ✅ **Auto-Selection Logic**: "All pages" checkbox automatically updates based on individual selections.

## 🌟 Enhanced User Experience

- **Row Interaction**: Clicking and holding _anywhere_ on a page row (text or whitespace) triggers the checkbox "Pressed" state visual, providing a tactile feel.
- **Hidden Scrollbar**: Custom CSS utility ensures the list is scrollable without visual clutter.

## 🛠 Tech Stack

- **React** - Component-based UI.
- **Tailwind CSS** - Utility-first styling for exact pixel control.
- **Vite** - Fast development server.

## 📦 Project Structure

```
ellty/
├── src/
│   ├── components/
│   │   ├── Button.jsx        # Custom Button with 3 states (Default, Hover, Pressed)
│   │   ├── Checkbox.jsx      # Custom Checkbox with 8 distinct visual states + Halo effect
│   │   └── PageSelector.jsx  # Main container with scrolling logic and layout
│   ├── App.jsx               # Entry point
│   └── index.css             # Tailwind imports & custom utilities (scrollbar-hide)
└── README.md
```

## 🏃‍♂️ How to Run

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start development server:**

    ```bash
    npm run dev
    ```

3.  **Open browser:**
    Navigate to `http://localhost:5173`.

## 🎨 Component Details

### Checkbox

A highly interactive component that handles complex logic for visual feedback:

- **Hovering** an unchecked box shows a subtle visual cue (light gray checkmark) before selection.
- **Pressing** (mouse down) on the box OR the row text activates the **"Halo" ring effect** (10% opacity blue ring) for immediate feedback.

### PageSelector

- Includes a scrollable area for pages that hides the native scrollbar for a cleaner UI (`scrollbar-hide`).
- Implements "Select All" logic bidirectional binding (Parent ↔ Child checkboxes).
- Features precise dividers with accurate margins as per Figma.

---

**Completion Status**: 100% Verified against Figma Design.
