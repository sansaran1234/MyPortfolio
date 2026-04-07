# AI System Starter Implementation Plan

> **For Codex:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a workflow-first AI operating layer for this portfolio repo, centered on UI review and team-style orchestration.

**Architecture:** Expand `CLAUDE.md` into the repo's operating manual, then add lightweight `skills/`, `agents/`, and `mcp.json` scaffolding that encode role boundaries and review workflows. Keep phase one documentation-driven so the system is immediately usable without overbuilding automation.

**Tech Stack:** Markdown docs, JSON config, Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion

---

### Task 1: Expand The Core Operating Manual

**Files:**
- Modify: `CLAUDE.md`
- Reference: `AGENTS.md`
- Reference: `DESIGN.md`

**Step 1: Replace the placeholder in `CLAUDE.md` with a full project operating manual**

Include:
- project purpose
- stack summary
- design guardrails from `DESIGN.md`
- animation placement rules
- UI review pipeline
- verification commands
- command mapping

**Step 2: Re-read `CLAUDE.md` and verify it does not conflict with `AGENTS.md`**

Run: `sed -n '1,260p' CLAUDE.md`
Expected: the file is a standalone operating manual and still compatible with repo instructions

### Task 2: Add Workflow Skills

**Files:**
- Create: `skills/ui-review/SKILL.md`
- Create: `skills/design-consistency-check/SKILL.md`
- Create: `skills/motion-audit/SKILL.md`
- Create: `skills/responsive-pass/SKILL.md`
- Create: `skills/release-gate/SKILL.md`
- Create: `skills/portfolio-content-check/SKILL.md`

**Step 1: Write `skills/ui-review/SKILL.md`**

Cover:
- trigger conditions for UI file changes
- review checklist for structure, spacing, semantics, and interaction quality
- when to escalate to design review

**Step 2: Write `skills/design-consistency-check/SKILL.md`**

Cover:
- direct comparison against `DESIGN.md`
- hierarchy, spacing, type, color, and component tone checks

**Step 3: Write `skills/motion-audit/SKILL.md`**

Cover:
- animation ownership rules
- duplicated animation detection
- pacing and transition review

**Step 4: Write `skills/responsive-pass/SKILL.md`**

Cover:
- checks for mobile, tablet, desktop
- overflow and spacing risks
- navigation and hero-specific review prompts

**Step 5: Write `skills/release-gate/SKILL.md` and `skills/portfolio-content-check/SKILL.md`**

Cover:
- lint/build verification flow
- content correctness checks for links, labels, and project metadata

**Step 6: Verify all skill files exist**

Run: `rg --files skills`
Expected: all six skill files are listed

### Task 3: Add AI Team Roles

**Files:**
- Create: `agents/ui-implementer.md`
- Create: `agents/design-guardian.md`
- Create: `agents/motion-reviewer.md`
- Create: `agents/release-checker.md`

**Step 1: Write `agents/ui-implementer.md`**

Define:
- scope of ownership
- when the role can change code
- expected handoff to reviewers

**Step 2: Write `agents/design-guardian.md`**

Define:
- design review authority
- what counts as a consistency regression
- how to report findings

**Step 3: Write `agents/motion-reviewer.md`**

Define:
- animation review scope
- motion-specific anti-patterns
- when to require consolidation of animation files

**Step 4: Write `agents/release-checker.md`**

Define:
- final verification role
- required commands
- failure-report format

**Step 5: Verify role files exist**

Run: `rg --files agents`
Expected: all four role definition files are listed

### Task 4: Define Command And MCP Entry Points

**Files:**
- Create: `mcp.json`
- Modify: `README.md`

**Step 1: Create `mcp.json` as a documented placeholder**

Include:
- intended external integration categories
- notes for browser validation and future GitHub integration
- no secrets

**Step 2: Add a short AI workflow section to `README.md`**

Document:
- available command concepts
- how UI work is reviewed
- where to find skills and agents

**Step 3: Verify docs mention the same commands**

Run: `rg -n "/review-ui|/check-motion|/ship-check" CLAUDE.md README.md`
Expected: all commands appear in both operating docs

### Task 5: Validate The Starter System

**Files:**
- Verify: `CLAUDE.md`
- Verify: `skills/`
- Verify: `agents/`
- Verify: `mcp.json`
- Verify: `README.md`

**Step 1: Run lint-safe structure verification**

Run: `find skills agents AGENTS_PLANS -maxdepth 2 -type f | sort`
Expected: the new documentation structure is present and readable

**Step 2: Run repo verification**

Run: `npm run lint`
Expected: exit code 0

**Step 3: Run build verification for final readiness**

Run: `npm run build`
Expected: exit code 0

**Step 4: Review the finished system against the design doc**

Check:
- `AGENTS_PLANS/2026-04-07-ai-system-design.md`
- all planned starter artifacts exist
- no scope creep beyond phase one

**Step 5: Stop before commit**

Do not commit unless the user explicitly asks for it.
