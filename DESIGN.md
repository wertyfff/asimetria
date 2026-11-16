---
name: Асиметрия
description: Minimal fashion storefront with expressive type and native-scroll choreography.
colors:
  paper: "#f4f4f1"
  ink: "#151515"
  muted: "#656560"
  line: "#d7d7d1"
  product-surface: "#e6e6e2"
typography:
  display:
    fontFamily: "Oswald, sans-serif"
    fontSize: "18.4vw"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "13px"
  product-name:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
  product-note:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "10px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "white"
    padding: "15px 20px"
---

# Design System: Асиметрия

## Overview

**Creative North Star: "Minimal form in motion"**

A restrained warm-white and black fashion store. Oversized WRONGFORM lettering and a studio model establish the opening; readable merchandise and straightforward controls carry product selection.

**Key Characteristics:**
- Quiet surfaces and expressive scale.
- The model crosses the hero lettering.
- The same products move from order to chaos and return to order.

## Colors

Paper is the page and dialog surface; ink carries text, active controls and primary actions. Muted supports product notes; line separates utility content. Product-surface supplies a slightly darker photographic field. There is no saturated accent.

## Typography

Oswald carries only the oversized Latin hero. Manrope handles Cyrillic navigation, product metadata and prose, with Arial as fallback. Mobile product names use a readable size (11px), while prices and notes use (10px). Names and prices may wrap rather than collide.

## Layout

Desktop catalogue: four columns, horizontal gutters (4%), gap (18px). At the mobile breakpoint (800px), use two columns, gutters (5%), row gap (22px) and column gap (12px). The hero and catalogue use sticky scenes within native document scrolling.

The short about paragraph sits between the hero and catalogue. The utility footer closes the page without an endnote slogan or a repeated manifesto headline.

## Elevation & Depth

Flat surfaces have no shadows. The model sits above the hero letters. Catalogue rotation and translation produce spatial depth during the middle of the scroll sequence; product metadata fades away to prevent overlapping text. Modal backdrops dim the page.

## Shapes

Products and controls use rectangular fields without decorative containers. Catalogue images use contain to preserve the complete silhouette. Thin rules mark active filters and divide utility content.

## Components

The hero opens with separated letters and assembles over (1400ms). Pointer movement separates letters around the model; touch uses the scroll sequence. Input remains available throughout.

The catalogue begins and ends at identical grid transforms. Narrow alternating horizontal vectors and separated vertical positions keep all four images in the composition. Filtering changes the visible product set. Reduced motion presents a static composition with metadata available immediately.

Filters have minimum targets (44px × 44px), muted inactive text and an ink underline for the active category. Text links pair a thin underline with a diagonal arrow. Primary dialog actions use ink with white text. Keyboard focus uses an ink outline (1px) offset (6px).

Product dialogs offer size selection; the demonstration bag supports adding and removing items. Navigation is quiet and the about link is hidden on mobile. Refresh returns the document to the top.

## Do's and Don'ts

### Do:
- **Do** preserve complete catalogue silhouettes and readable mobile metadata.
- **Do** preserve native scrolling, reversible movement and reduced-motion access.
- **Do** keep the hero model above the letterforms.

### Don't:
- **Don't** repeat manifesto headlines or add a closing slogan billboard.
- **Don't** invent product claims or imply that checkout is available.
- **Don't** let motion obscure access to collection controls.
