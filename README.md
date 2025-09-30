# Custom UI (Pixelact-inspired) Components

A React + TypeScript + Tailwind CSS playground showcasing pixel-styled UI components (buttons, inputs, selects, lists, containers) with RPG-inspired aesthetics. Built with Vite and class-variance-authority for variants.

This project includes a custom List component and several styled components ported/adapted for use in a modern React stack.

## Features

- Pixel-styled components with configurable variants and sizes
- React Router pages for Buttons, Inputs, Selects, Lists, and Containers
- New custom list component with keyboard support and ARIA roles
- Tailwind-powered theme tokens and utility classes
- Easy asset-based theming (border/background images in `public/assets`)

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS + tailwind-merge + clsx
- shadcn/ui components as a base (Button, Input, Select)
- class-variance-authority (CVA) for variants
- Radix UI primitives (via shadcn/ui Select)

## Getting Started

1. Install dependencies
   ```bash
   pnpm install
   ```
2. Start dev server
   ```bash
   pnpm dev
   ```
3. Build for production
   ```bash
   pnpm build
   ```
4. Preview build
   ```bash
   pnpm preview
   ```

## Project Structure (high level)

```
src/
  components/
    Navigation.tsx
    ui/
      button.tsx                 # shadcn-style button (base)
      input.tsx                  # shadcn-style input (base)
      pixelact-ui/
        button.tsx               # pixel/custom-ui button wrapper
        input.tsx                # pixel/custom-ui input
        textarea.tsx             # pixel/custom-ui textarea
        select.tsx               # pixel/custom-ui select wrapper
        container.tsx            # decorative container
        list.tsx                 # custom-ui list (new)
        styles/
          styles.css             # shared vars and helpers
          button.css
          input.css
          select.css
          container.css
          list.css               # list styles (new)
  pages/
    HomePage.tsx
    ButtonPage.tsx
    InputPage.tsx
    SelectPage.tsx
    ListPage.tsx                 # new page
    ContainerPage.tsx
```

Static assets live under `public/assets` and fonts under `public/fonts`.

## Routes

- `/` Home
- `/buttons`
- `/inputs`
- `/selects`
- `/lists` (new)
- `/containers`

## Components Overview

### List (custom-ui)

- File: `src/components/ui/pixelact-ui/list.tsx`
- Styles: `src/components/ui/pixelact-ui/styles/list.css`
- Renders an unordered list with RPG-like border-image and background.
- Keyboard support: ArrowUp/ArrowDown, Home/End, Enter/Space
- Accessibility: `role="listbox"` and `role="option"` with `aria-selected`

Props:

- `items: { id: string; label: React.ReactNode; disabled?: boolean }[]`
- `selectedId?: string` — controlled selected item id
- `defaultSelectedId?: string` — uncontrolled initial selection
- `onValueChange?: (id: string) => void` — selection callback
- `disabled?: boolean`
- `maxHeight?: number | string` — sets an inline `max-height`
- `className?: string` — extra classes

Notes:

- Styles are namespaced to `.custom-ui-list` and affect only list instances rendered by this component (i.e., plain `<ul>` without the class are unaffected). If you want to restrict styling to direct children only, update the selector to `.custom-ui-list > li` in `list.css`.
- The list uses `overflow-y: auto`, so the scrollbar appears only when needed.
- By default, the list no longer auto-scrolls the selected item into view; the scroll position remains stable when selection changes.

### Other Components

- Buttons: Pixel-styled variants including a background-image "custom-ui" type
- Inputs/Textareas: Pixel/custom-ui styles and disabled states (grayscale)
- Selects: shadcn/ui Select wrapped with pixel/custom-ui skins
- Containers: Decorative framed containers with several variants and sizes

See their respective pages under `/buttons`, `/inputs`, `/selects`, and `/containers`.

### shadcn/ui Integration

- Base components live under `src/components/ui/` and follow shadcn/ui patterns:
  - `button.tsx` (Button)
  - `input.tsx` (Input)
  - `select.tsx` (Select composition around Radix primitives)
- Pixel/custom-ui components in `src/components/ui/pixelact-ui/` wrap or re-style these bases, keeping accessibility and behavior from shadcn/ui while applying the pixel aesthetic.

## Styling and Assets

- Component styles live under `src/components/ui/pixelact-ui/styles/` and are imported by their TSX files.
- Image assets (borders, backgrounds, scrollbars) are under `public/assets`. You can replace these images to reskin components without changing code.
- A local pixel font (`BoldPixels.ttf`) is loaded in `src/index.css`.
- Global custom scrollbars are defined in `src/index.css` and apply site-wide.

## Conventions

- Class names follow a `custom-ui-*` prefix to scope the styles to these components.
- Variants/sizes are implemented via CVA for composability with Tailwind utilities.

## Acknowledgements

- pixelact-ui — styles and concepts inspired and adapted from:
  - https://github.com/pixelact-ui/pixelact-ui
- shadcn/ui — base component patterns: https://ui.shadcn.com/
- Radix UI — accessible primitives used by shadcn/ui: https://www.radix-ui.com/

## License

This repository is for demonstration purposes. Refer to upstream asset and library licenses as applicable.
