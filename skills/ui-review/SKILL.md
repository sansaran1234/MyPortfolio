# UI Review

## Purpose

Review UI-facing changes in this repo with focus on structure, visual consistency, semantics, and presentation quality.

## Use When

- files in `src/components/` change
- files in `src/app/` change
- content or layout changes affect presentation

## Inputs

- changed files
- relevant screenshots or visual intent when available
- `DESIGN.md`
- `CLAUDE.md`

## Review Flow

1. Identify the changed UI surfaces.
2. Check whether the change matches the section's existing role and tone.
3. Compare structure and spacing against nearby sections.
4. Review semantic HTML and interaction clarity.
5. Flag responsive or visual hierarchy risks.

## Checklist

- layout supports the intended information hierarchy
- spacing feels consistent with surrounding sections
- surface layering matches the design system
- typography choice and density fit the page
- CTAs and navigation remain clear
- semantics are reasonable for headings, landmarks, and interactive elements
- the change does not introduce generic landing-page patterns

## Escalate When

- the change conflicts with `DESIGN.md`
- the section feels visually disconnected from the rest of the page
- the layout solves the task but weakens the portfolio's tone

## Completion Criteria

- clear findings or approval
- any design risks are called out explicitly
- responsive concerns are noted when relevant
