# MyPortfolio AI Operating Manual

## Project Identity
- Project: personal portfolio built as a high-signal frontend showcase
- Product goal: present work, technical taste, and credibility through a polished single-page experience
- Delivery priority: visual quality, motion quality, and consistency matter as much as functional correctness

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Motion

## Source Of Truth
- Repo-wide rules: `AGENTS.md`
- Design direction: `DESIGN.md`
- App code: `src/`
- Shared animation code: `src/animations/`
- Component-local animation code: colocate only when the animation is truly local and not reusable

## Working Model
Use AI as a compact frontend team instead of a single generic assistant.

Primary roles:
- `ui-implementer`
- `design-guardian`
- `motion-reviewer`
- `release-checker`

Primary workflows:
- `/review-ui`
- `/check-motion`
- `/ship-check`

## UI Standards
- Follow the "Architectural Ledger" direction in `DESIGN.md`
- Favor asymmetry, spacing, tonal layering, and technical elegance over generic landing-page patterns
- Avoid visual drift between sections
- Treat `src/components/home/`, `src/components/layout/`, and `src/app/` as review-sensitive areas
- Preserve mobile and desktop quality together

## Design Guardrails
- Do not introduce generic boxed layouts that break the established visual language
- Do not rely on visible divider lines for structure
- Use spacing, tonal shifts, and layered surfaces for separation
- Use accent color sparingly
- Keep typography purposeful and hierarchy-driven
- Preserve the premium technical tone in copy and layout decisions

## Motion Rules
- Animation logic must have clear ownership
- Shared variants belong in `src/animations/`
- Local motion modules are allowed only when the animation is specific to one component and not reused elsewhere
- If similar motion logic appears in multiple places, consolidate it
- Review pacing, reveal order, and easing for consistency across sections

## File Placement Rules
- Shared UI primitives belong in `src/components/ui/`
- Home-section components belong in `src/components/home/`
- Layout components belong in `src/components/layout/`
- Shared animation definitions belong in `src/animations/`
- Avoid duplicate files that differ only by folder placement unless there is a documented ownership reason

## Review Pipeline
Apply this pipeline to any UI-facing change:

1. `ui-implementer`
Make the requested change with minimal unrelated edits.

2. `design-guardian`
Review against `DESIGN.md`, spacing, hierarchy, typography, and component tone.

3. `motion-reviewer`
Review animation ownership, duplication, pacing, transitions, and interaction feel.

4. `release-checker`
Run verification before any completion claim.

## Workflow Triggers
- Changes in `src/components/` or `src/app/` trigger `/review-ui`
- Changes in animation files or motion-heavy components trigger `/check-motion`
- Any task that is ready to conclude triggers `/ship-check`

## Command Mapping

### `/review-ui`
Use when:
- editing UI components
- changing layout
- updating copy that affects presentation

Checks:
- structure
- spacing
- semantics
- consistency with `DESIGN.md`
- responsive risk

### `/check-motion`
Use when:
- editing `src/animations/`
- adding or changing motion behavior
- moving animation logic between shared and local files

Checks:
- duplication
- ownership
- transition consistency
- reveal timing

### `/ship-check`
Use when:
- preparing to finish a task
- validating a UI change before handoff

Checks:
- `npm run lint`
- `npm run build` for UI-affecting changes

## Verification Rules
- No completion claim without fresh verification evidence
- Minimum verification for repo changes: `npm run lint`
- Required verification for UI-affecting changes: `npm run lint` and `npm run build`
- If verification fails, report the actual failure state instead of implying success

## Escalation Rules
- Escalate when a change conflicts with `DESIGN.md`
- Escalate when a change requires choosing between shared and local animation ownership
- Escalate when a requested UI change would meaningfully alter the site's creative direction
- Escalate when a quick fix would add inconsistency or duplicate patterns

## Security Rules
- Do not place secrets in this file
- Keep credentials in environment variables when needed
- Treat any future MCP or plugin configuration as non-secret by default

## Deliverable Expectations
- Changes should be scoped and intentional
- Reviews should focus on user-facing quality, not only syntax
- Final status messages must reflect actual verification output

## References
- `AGENTS.md`
- `DESIGN.md`
- `AGENTS_PLANS/2026-04-07-ai-system-design.md`
- `AGENTS_PLANS/ai-system-starter.md`
