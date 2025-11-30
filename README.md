# etch-a-sketch-project

## Implementation Notes

### Grid overflow caused by borders

While implementing the grid, borders on cells caused layout overflow and incorrect wrapping.
The issue occurred because the container size calculation included borders, while Flexbox
lays out elements based on inner content size.

**Solution:**
- Use `clientWidth` / `clientHeight` instead of `getBoundingClientRect()` for layout calculations
