# Motion Audit

## Purpose

Review animation logic for ownership, duplication, pacing, and interaction quality.

## Use When

- files in `src/animations/` change
- motion behavior changes inside components
- a component introduces new reveal, hover, or entrance animation
- there are both shared and local animation files affecting the same area

## Inputs

- changed files
- `CLAUDE.md`
- motion-related files in `src/animations/` and component folders

## Review Flow

1. Identify where animation logic lives.
2. Decide whether the logic is shared or truly local.
3. Check for duplicated variants or inconsistent timing.
4. Review the motion sequence for clarity and pacing.

## Checklist

- shared motion patterns are centralized
- local motion files exist only for component-specific behavior
- easing and durations feel coherent
- stagger and reveal order support readability
- hover and scroll effects do not overpower content
- animation naming and placement are understandable

## Escalate When

- multiple files define overlapping hero or navbar motion behavior
- ownership between shared and local animation modules is unclear
- the motion improves spectacle but hurts clarity

## Completion Criteria

- a clear ownership decision is made
- duplication risks are named
- pacing issues are documented when present
