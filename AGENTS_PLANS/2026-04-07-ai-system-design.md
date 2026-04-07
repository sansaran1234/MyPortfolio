# AI System Design For MyPortfolio

## Objective
Build a workflow-first AI operating layer for this Next.js portfolio so UI changes are implemented, reviewed, and verified through a repeatable team-like process instead of ad hoc prompting.

## Why This Repo Needs It
This codebase is small, design-sensitive, and animation-heavy. That means the highest leverage is not generic enterprise automation. The highest leverage is a compact system that protects visual consistency, motion quality, and release safety while staying easy to maintain.

## Recommended Approach
Use a team-first review pipeline with lightweight orchestration.

This gives the project:
- a clear source of truth in `CLAUDE.md`
- reusable workflows in `skills/`
- stable role boundaries in `agents/`
- a small command surface for common work
- a path to add hooks, plugins, and MCP later without redesigning the system

## Core Principles
- Workflow first, not folder first
- Optimize for UI review and design consistency
- Keep the first version small enough to maintain in a solo-developer repo
- Separate implementation, review, and release verification responsibilities
- Make commands map to real daily actions

## Operating Model
Every UI-facing change should follow this flow:

1. A task starts from a user request or slash command.
2. The implementer agent updates the requested UI or behavior.
3. The design guardian reviews the change against `DESIGN.md` and project standards.
4. The motion reviewer checks animation logic, file placement, and interaction quality.
5. The release checker runs repo verification such as lint and build before completion claims.

This creates a team pattern without requiring heavy orchestration infrastructure.

## Proposed Structure

### `CLAUDE.md`
This becomes the operating manual for the repo, not just a pointer file.

It should define:
- project identity and goals
- current stack: Next.js 16, React 19, TypeScript, Tailwind 4, Motion
- design rules derived from `DESIGN.md`
- animation conventions and file placement rules
- review pipeline for UI changes
- required verification commands
- escalation rules for structural or design-impacting changes

### `skills/`
These should encode repeatable workflows instead of generic advice.

Recommended starter skills:
- `ui-review`
- `design-consistency-check`
- `motion-audit`
- `responsive-pass`
- `release-gate`
- `portfolio-content-check`

Each skill should define:
- when to use it
- exact checklist or procedure
- expected inputs
- completion criteria

### `agents/`
Keep the team small and role boundaries crisp.

Recommended starter agents:
- `ui-implementer`
- `design-guardian`
- `motion-reviewer`
- `release-checker`

Responsibilities:
- `ui-implementer` changes components and app code
- `design-guardian` reviews against `DESIGN.md`, spacing, hierarchy, tone, and layout consistency
- `motion-reviewer` reviews animation structure, duplication, transitions, and file organization
- `release-checker` validates lint, build, and final delivery readiness

### `plugins/`
Plugins are optional in phase one. Keep them minimal.

Useful future plugin directions:
- changed-file classifier for UI vs non-UI work
- review checklist generator
- release summary formatter

### `mcp.json`
Phase one should define extension points rather than force external dependencies immediately.

Likely future integrations:
- browser automation for UI validation
- GitHub for PR-aware reviews
- design reference or asset systems

### Command Surface
Add a small set of commands that reflect real work:
- `/review-ui`
- `/check-motion`
- `/ship-check`

These commands should map cleanly to the skills and agent responsibilities above.

## Rules Specific To This Repo

### UI Review Rules
- Every change in `src/components/` or `src/app/` is treated as reviewable UI work unless clearly internal-only
- Reviews must consider `DESIGN.md`, not only code correctness
- Avoid duplicate animation logic across multiple locations when one shared animation module is enough

### Motion Rules
- Animation definitions should have a predictable home
- If both shared and local animation files exist, the system should force an explicit ownership decision
- Motion review should check for consistency in easing, reveal timing, and interaction pacing

### Release Rules
- No completion claim without fresh `npm run lint`
- UI-affecting changes should also verify `npm run build`
- If build or lint fails, release-checker owns the report back to the user

## Initial Deliverables
Phase one should produce:
- an expanded `CLAUDE.md`
- a new `skills/` directory with starter workflow docs
- a new `agents/` directory with role definitions
- an `mcp.json` placeholder that documents intended integrations
- a lightweight command convention documented in `README.md` or `CLAUDE.md`

## Tradeoffs

### What We Gain
- repeatable UI quality control
- less drift between implementation and design system
- a clearer way to use AI as a structured team
- easier onboarding for future contributors or future-you

### What We Avoid
- premature enterprise complexity
- overbuilt orchestration for a small portfolio repo
- too many agents competing over the same files

## Risks And Mitigations

### Risk: Too much process for a small repo
Mitigation: keep phase one documentation-heavy and command-light.

### Risk: Overlapping agent responsibilities
Mitigation: define strict ownership and handoff order in `CLAUDE.md`.

### Risk: Drift between design doc and actual reviews
Mitigation: make `design-consistency-check` explicitly reference `DESIGN.md`.

## Success Criteria
- A future UI task can be routed through a documented review pipeline
- The repo has named AI roles with clear boundaries
- The project has reusable skills for design, motion, and release checks
- The system can scale later into hooks, plugins, and MCP without reworking the base structure

## Notes
- I did not create a git commit for this design because repo instructions explicitly forbid committing unless the user asks for it.
