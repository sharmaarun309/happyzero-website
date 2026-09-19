Service page rules
- Pattern: follow src/pages/services/SkillAssessment.jsx. The page file only renders src/data/services/<slug>.js. Use components in src/components/sections/. If a needed component is missing, add one small file there.
- Structure: hero (H1, one-line description, CTA), intro (2 paragraphs), "helps you" bullets (3), numbered offerings (6, each a title plus 1-2 lines), one unique visual (inline SVG), a second visual or method cards, FAQ, link cards, related services (other 3 in nav order plus a chip "Automotive manufacturing" -> /industries/automotive), CTA band.
- Slugs and names (never rename): skill-assessment = Skill Assessment & Gap Identification; training = In-house Training & Capability Development; gap-analysis = IMS / QMS Gap Analysis & Implementation; audit-outsourcing = QMS & Internal Audit Outsourcing.
- Style: warm white, charcoal, HappyZero orange, Inter Tight. Sentence case, no uppercase, no letter-spacing. Mobile-first.
- Copy comes from the prompt. Do not invent extra claims. No stats, percentages, durations, customer names, logos, testimonials, awards, prices, certificates or accreditation claims. No AI capability claims; future ideas are labelled "What's next".
- Any sample graphic carries the visible label "Illustrative example".
- Hero image slot: public/images/services/<slug>-hero.webp with a gradient fallback. The page must look finished without it.
- Every CTA -> /contact?service=<slug>. Contact.jsx: if the slug is missing from serviceParamToOption, add it mapped to the existing option text. Do not rename options.
- Register the route in src/App.jsx the same way /services/skill-assessment is registered.
