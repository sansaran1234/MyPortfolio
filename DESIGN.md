# Design System Document

## 1. Overview & Creative North Star: "The Architectural Ledger"
The goal of this design system is to transcend the "generic developer template" by adopting the persona of **The Architectural Ledger**. We are moving away from flat, boxed layouts toward a sophisticated, layered environment that mirrors the complexity and precision of high-level engineering. 

The aesthetic is grounded in **Technical Elegance**. We achieve this by using intentional asymmetry, generous negative space, and a "code-first" typographic hierarchy. The layout should feel like a high-end IDE or a professional blueprint—structured, rhythmic, and authoritative. We avoid "standard" UI by rejecting heavy-handed borders and instead using light, depth, and tonal shifts to guide the user's eye.

## 2. Colors: The Depth of the Machine
Our palette is rooted in a deep, nocturnal base (`#0b1326`) punctuated by a high-energy "Hyper-Green" (`#45f99c`). This creates a high-contrast, technical atmosphere that feels both premium and performant.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined through:
1. **Background Shifts:** Moving from `surface` to `surface-container-low`.
2. **Tonal Transitions:** Using subtle gradients to suggest a change in context.
3. **Negative Space:** Allowing whitespace (minimum 80px between sections) to act as a silent divider.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent materials.
*   **Base Layer:** `surface` (#0b1326) – The canvas.
*   **Section Layer:** `surface-container-low` (#131b2e) – Large content blocks.
*   **Component Layer:** `surface-container` (#171f33) – Cards and navigation.
*   **Interaction Layer:** `surface-container-high` (#222a3d) – Hover states and modals.

### The "Glass & Gradient" Rule
To achieve a "Senior" feel, use **Glassmorphism** for floating elements (e.g., sticky headers or side panels). Use `surface-container-low` with a 70% opacity and a `backdrop-blur` of 12px. Main CTAs should utilize a subtle linear gradient from `primary` (#45f99c) to `primary_container` (#00dc82) at a 135-degree angle to add "soul" and dimension.

## 3. Typography: Precision over Decoration
The typography system uses three distinct typefaces to convey different levels of technical density.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision. Use `display-lg` for hero statements with a `-0.02em` letter-spacing to create a tight, editorial look.
*   **Body & Titles (Inter):** The workhorse. Inter provides maximum legibility for long-form case studies. Ensure `body-md` has a line-height of `1.6` to maintain breathability.
*   **Technical Labels (Space Grotesk):** This is our "engineer's accent." Use `label-md` in uppercase for metadata, tags, and small technical details to evoke the feel of terminal output or architectural blueprints.

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to represent "height"; we use light and transparency.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` section creates a recessed, "etched" look that feels more modern than a raised shadow.
*   **Ambient Shadows:** For floating elements (Modals/Popovers), use a custom shadow: `0 20px 40px rgba(6, 14, 32, 0.5)`. The shadow color must be a tinted version of `surface_container_lowest`—never pure black.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` (#3c4a3f) at **15% opacity**. It should be felt, not seen.
*   **Micro-Interactions:** Every interaction should have a 200ms `ease-out` transition. Hovering over a card shouldn't just change the color; it should slightly shift the background-position or increase the `backdrop-blur` intensity.

## 5. Components: The Building Blocks

### Buttons
*   **Primary:** Gradient of `primary` to `primary_container`. No border. White-space is generous (12px 24px).
*   **Secondary:** `surface-container-highest` background with a `Ghost Border`. Text in `on-surface`.
*   **Tertiary:** Transparent background. Text in `primary`. Underline on hover only.

### Cards & Projects
*   **Rule:** Forbid divider lines.
*   **Styling:** Use `surface-container` with a `rounded-lg` (0.5rem) corner. Separate content blocks with `body-sm` height spacing. Use the "Hyper-Green" (`primary`) only for key action icons or status indicators.

### Input Fields
*   **Background:** `surface-container-lowest`.
*   **Border:** `outline-variant` at 20% opacity. On focus, the border opacity increases to 100% using `primary`.
*   **Typography:** Use `label-md` for floating labels to maintain the technical aesthetic.

### Additional Signature Components
*   **The "Status Terminal":** A small UI element using `surface-container-highest` and `Space Grotesk` font to display "Current Availability" or "Latest Commit" with a pulsing `primary` dot.
*   **Code Snippet Trays:** Use `surface-container-lowest` with no border. Syntactical highlighting should use the `tertiary` (#ffd4b3) and `secondary` (#bcc7de) ranges to remain sophisticated, not "rainbow-colored."

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts (e.g., a 7-column project description next to a 5-column technical stack list).
*   **Do** use `primary` sparingly. It is a high-visibility laser; don't drown the UI in it.
*   **Do** leverage the `surface_container` tiers to create a sense of "nested logic."

### Don't:
*   **Don't** use 1px solid white or grey borders. They break the immersion of the "Architectural Ledger."
*   **Don't** use standard "drop shadows." They feel dated and "out-of-the-box."
*   **Don't** crowd the interface. If a screen feels busy, increase the spacing between sections by 20%.
*   **Don't** use generic icons. Use thin-stroke (1.5px) technical icons that match the `outline` color.
