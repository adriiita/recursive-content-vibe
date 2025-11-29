# The Recursive Thought Mirror

This project is a recursive content vibe generator. It explores the concept of "Recursive Loops" in creativity—feeding your own patterns back into the system to reveal blind spots and unlock true scale.

## 🔮 The Vibe Life Template

This repository serves as a **Lead Magnet & Tutorial** for creators who want to build high-end, interactive web experiences using AI.

Below are the exact prompts used to generate the animations, layout, and "vibe" of this site. You can use these prompts to replicate this aesthetic or templatize it for your own projects.

---

### 1. The Design & Animation Prompt

Use this prompt to generate the visual foundation—animations, interactions, and layout.

> **Context:** You don't need animations everywhere, but there are key places where it can enhance your design: the hero intro, hover interactions, slow content reveal, background effects, and navigation transitions.
>
> **Intro + Animation on Scroll:**
> "Animate when in view: fade in, slide in, blur in, element by element. Use 'both' instead of 'forwards'. Don't use opacity 0."
>
> **Background:**
> "Add a clip animation to the background, column by column using clip-path."
>
> **Micro-Interactions:**
> *   **Buttons:** "Add a 1px border beam animation around the pill-shaped button on hover."
> *   **Flashlight:** "Add a subtle flashlight effect on hover/mouse position to both background and border of the cards."
>
> **Typography:**
> "Add a vertical text clip slide down animation letter by letter."
>
> **Looping Elements:**
> *   **Logos:** "Add a marquee infinite loop slow animation to the logos using alpha mask."
> *   **Testimonials:** "Make the cards animate marquee in an infinite loop with alpha mask slowly."
> *   **Content Switch:** "Animate the big card to rotate between 3 cards in a loop. Add prev/next arrows to switch between cards."
>
> **Layout Structure (Instagram Slides):**
> "Turn this into 8 sections for instagram slides: each section is full-width with 3/4 aspect ratio card v-center h-center inside like a site section with h-screen pagination: 1 cover, 6 sections explaining the steps, 1 cta. Add numbers."

---

### 2. The Style Extraction Prompt (Bonus)

Want to apply this exact design system to another project? Use this prompt to extract the styles into a reusable JSON format.

> **Prompt:**
>
> "{Paste the Website HTML code here}"
>
> "Give me the json format of the styles of this design so I can use this to apply on any design. It should include:
> *   Fonts & Colors
> *   Spacing & Shadows
> *   Animations (scripts, keyframes, instructions)
> *   Layout specs (adaptive)
> *   Component styles (Main/Secondary buttons)
> *   Icon sets & Hover states"

---

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the app:
   ```bash
   npm run dev
   ```
