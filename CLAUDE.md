# HappyZero Website — Design System

Colors: Near-black #0A0A0A, warm white/cream #FBF9F6, HappyZero orange #FF6A00
Product accents: Talent = green, Academy = orange, Digital QMS = blue, YOA = blue/navy
Typography: Inter Tight Variable (font-sans), mobile-first scale (H1 40-48px mobile, 
H2 28-32px, H3 20-22px, body 16px). Large headings: letter-spacing -0.02em. Body: tracking 0, line-height 1.5.
No spaced caps: no uppercase text-transform or wide letter-spacing on labels/eyebrows. 
Eyebrows are sentence case, 14px, weight 500, tracking 0. Acronyms in copy (ISO, QMS, CAPA, AI) stay as written.
Mobile-first: design at 390-430px viewport first, then scale to tablet/desktop
Buttons: primary filled orange rounded with arrow icon, secondary ghost/outline
Nav: Software, Services, Industries, Academy (external, submastery.com), About, Resources, Book a Call. Software = Talent, YOA, Digital QMS.
Global footer: 5 columns (brand, Software, Services, Company, Resources) + copyright row
Reference screenshots for exact layout/spacing/style: /design/*.png

## Working rules
- Dev server already runs at localhost:5173, never start another
- No screenshots or browser checks
- No git commit or push unless I ask
- Never touch package-lock.json
- Service names never change
- Academy is an external link to submastery.com
- No fake logos, testimonials, statistics, awards, percentages, phone numbers or addresses

## Minimal-code mode (adapted from Ponytail, github.com/DietrichGebert/ponytail)
Before writing code, stop at the first rung that holds:
1. Does this need to be built at all?
2. Does it already exist in this codebase? Reuse the helper, component or pattern.
3. Does the platform (HTML/CSS/browser API) or an already-installed dependency cover it? Use it.
4. Can it be one line? Make it one line.
5. Only then write the minimum code that works.

- Read the task and the code it touches first; the smallest change in the wrong place is a second bug.
- Bug fix means root cause: grep all callers and fix the shared function once.
- No unrequested abstractions, new dependencies or boilerplate. Prefer deletion, fewest files.
- Never cut corners on input validation, data-loss error handling, security, accessibility, or anything explicitly requested.
