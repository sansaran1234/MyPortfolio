# Release Gate

## Purpose

Provide final verification for repo changes before any completion claim.

## Use When

- a task is ready to finish
- UI work is about to be handed off
- a reviewer needs fresh verification evidence

## Required Commands

- `npm run lint`
- `npm run build` for UI-affecting changes

## Flow

1. Identify whether the task affects UI or app behavior.
2. Run `npm run lint`.
3. Run `npm run build` if the change is UI-facing or otherwise affects shipped output.
4. Read the full result and report the actual state.

## Rules

- do not claim success from expectation or intuition
- do not substitute partial verification for full verification
- if verification fails, include the failing command and the real failure summary

## Completion Criteria

- verification commands were run fresh
- the reported outcome matches command output
