# Page Selector Component

A React component for selecting pages with an interactive checkbox list, built with React and Tailwind CSS.

![Page Selector Preview](./preview.png)

## Features

- ✅ **All Pages Toggle** - Select or deselect all pages at once
- ✅ **Individual Selection** - Select pages individually
- ✅ **Indeterminate State** - Shows partial selection state on "All pages" checkbox
- ✅ **Hover Effect** - Displays checkmark outline when hovering over unchecked items
- ✅ **Done Button** - Confirms selection with visual feedback
- ✅ **Clean UI** - Modern, minimal design with smooth transitions

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ellty
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## Project Structure

```
ellty/
├── src/
│   ├── components/
│   │   ├── Button.jsx        # Reusable yellow button component
│   │   ├── Checkbox.jsx      # Custom checkbox with hover state
│   │   └── PageSelector.jsx  # Main page selector card
│   ├── App.jsx               # Main application
│   ├── index.css             # Tailwind CSS imports
│   └── main.jsx              # React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Components

### Button

A reusable button component with yellow background and hover effect.

```jsx
<Button onClick={handleClick}>Done</Button>
```

### Checkbox

Custom checkbox with three states:

- **Unchecked** - Gray border, shows checkmark on hover
- **Checked** - Blue background with white checkmark
- **Indeterminate** - Blue background with horizontal line

```jsx
<Checkbox checked={isChecked} onChange={setIsChecked} indeterminate={isPartial} />
```

### PageSelector

Main component combining checkboxes and button.

```jsx
<PageSelector onDone={(selectedPages) => console.log(selectedPages)} />
```

## Usage Example

```jsx
import PageSelector from "./components/PageSelector";

function App() {
  const handleDone = (selectedPages) => {
    console.log("Selected:", selectedPages);
  };

  return <PageSelector onDone={handleDone} />;
}
```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |


