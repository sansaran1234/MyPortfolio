# Responsive Pass

## Purpose
Review a UI change across mobile, tablet, and desktop expectations before concluding the task.

## Use When
- layout changes affect section width, alignment, or spacing
- navigation, hero, project cards, or footer content changes
- new UI density could create overflow or wrapping issues

## Inputs
- changed UI files
- current layout structure
- `DESIGN.md`

## Review Flow
1. Inspect the affected components for breakpoint-sensitive layout decisions.
2. Check likely mobile stacking behavior.
3. Check tablet spacing and alignment risks.
4. Check desktop density and balance.

## Checklist
- no likely horizontal overflow
- headings and metadata wrap gracefully
- navigation remains usable on narrow widths
- hero content preserves hierarchy on small screens
- cards and badges do not feel cramped
- section spacing still breathes on large screens

## Hotspots
- `src/components/layout/Navbar.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/Projects.tsx`
- `src/components/layout/Footer.tsx`

## Completion Criteria
- major breakpoint risks are called out
- the reviewer states whether layout confidence is high or needs browser validation
