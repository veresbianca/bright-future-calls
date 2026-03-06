

# Add New Content Sections to Landing Page

## Overview
Add 5 new sections after "You might recognize yourself here" and before "The Shift", plus convert the "recognize yourself" section to a 2-column layout with an illustration on the right.

## Changes (all in `src/pages/Index.tsx`)

### 1. Modify "You might recognize yourself here" section (lines 87-130)
- Convert from single-column (`max-w-3xl`) to a 2-column grid layout (`max-w-6xl md:grid-cols-2`)
- Text content stays on the left
- Add an abstract SVG illustration on the right — a calm, minimal design (concentric circles or a soft wave pattern) rendered inline using earthy palette colors, to maintain the warm, grounded feel without needing an external image

### 2. Insert 5 new sections after line 130 (before "The Shift")

**Section A — "It's not that your life is falling apart"** (`bg-background`)
- Headline + italicized sub-headline
- Client quotes styled as blockquotes with quotation marks
- Bullet list of symptoms (background anxiety, overthinking, etc.)
- Closing paradox: "You're actually doing well… which makes it harder to understand"

**Section B — "The real problem isn't your thoughts"** (`bg-card`)
- Headline explaining the relationship with thoughts
- Explanatory copy about the protective scanning mechanism
- "What if…" questions styled as italicized quotes
- Closing line: "The mind believes it's helping. But the result is internal tension."

**Section C — "What changes when internal safety returns"** (`bg-background`)
- Bullet list of outcomes (quieter mind, less reactivity, deeper trust, etc.)
- Closing statement: "The goal is to stop living under their control"
- Featured quote: "I finally feel like myself again."

**Section D — "Who this work is for"** (`bg-card`)
- Two-column layout: "This work may be for you if" / "This work may NOT be for you if"
- Green/primary bullets for "for you", muted bullets for "not for you"
- Honest, non-pathologizing tone

**Section E — "Book a Discovery Call"** (`bg-background`)
- Description of the 45-minute call with bullet points
- "No pressure or obligation" reassurance
- CTA button linking to Calendly URL
- Replaces or supplements the existing final CTA — will keep both since they serve different positions on the page

### Design Approach
- All sections use the existing `fadeIn` and `stagger` animation variants
- Alternating `bg-card` / `bg-background` backgrounds for visual rhythm
- Typography follows the calm, intelligent, reflective tone
- Quotes styled distinctly (italic, slightly larger, with subtle left border or quotation styling)
- The SVG illustration for section 1 will be a simple, abstract design (overlapping soft circles) using the existing CSS custom property colors

