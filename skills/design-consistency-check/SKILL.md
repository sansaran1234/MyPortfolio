# Design Consistency Check

## Purpose
Check whether a UI change still aligns with the repo's design language and creative direction.

## Use When
- a component layout changes
- typography, color, spacing, or surface treatment changes
- a section starts to feel visually out of family with the rest of the site

## Inputs
- changed UI files
- `DESIGN.md`
- `CLAUDE.md`

## Review Flow
1. Read the relevant section in `DESIGN.md`.
2. Identify the main visual moves in the changed UI.
3. Compare the change against the project's design rules.
4. Report mismatches as concrete findings.

## Checklist
- asymmetry and spacing still feel intentional
- separation is created by space or tonal layering, not generic lines
- accent color usage remains restrained
- typography still supports a technical premium tone
- cards, buttons, and sections feel like part of one system
- the UI avoids default-looking patterns

## Output Format
- approved
- concerns
- required changes

## Completion Criteria
- every design concern references a specific mismatch
- findings are grounded in `DESIGN.md`
