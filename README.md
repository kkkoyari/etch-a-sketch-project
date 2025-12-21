# Etch-a-Sketch Project

A browser-based drawing grid built as part of The Odin Project Foundations curriculum.

---

## Features

- Dynamic grid generation (default 16×16)
- Grid resizing via user input
- Drawing on hover
- Random color drawing mode
- Progressive darkening mode
  - Each interaction darkens a cell by 10%
  - Full opacity is reached after 10 interactions
- Drawing modes are mutually exclusive (random color and darkening)

---

## Implementation Notes

### Grid overflow caused by borders

While implementing the grid, borders on cells caused layout overflow and incorrect wrapping.
The issue occurred because the container size calculation included borders, while Flexbox
lays out elements based on inner content size.

**Solution:**
- Use `clientWidth` / `clientHeight` instead of `getBoundingClientRect()` for layout calculations

---

### Progressive darkening logic

- Each grid cell stores its own state using HTML `data-*` attributes.
- Darkening is applied incrementally per interaction rather than using loops.
- Opacity is calculated based on interaction count (10 steps to full opacity).

This approach ensures that each cell darkens independently and resets correctly when the grid is recreated.

---

## Planned Improvements

- Draw while mouse button is pressed (drag-to-draw)
- Color picker (`input[type="color"]`) for custom drawing color
- Palette of the last 10 used colors with quick selection

---

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
