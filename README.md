# The Recursive Thought Mirror

This project is a recursive content vibe generator.

## The Prompt Used

> You don't need animations everywhere, but there are key places where it can enhance your design: the hero intro, hover interactions, slow content reveal, background effects and navigation transitions.
>
> Gemini 3 relies heavily on good prompting, ideally with image or code.
>
> Intro + animation on scroll: "Animate when in view: fade in, slide in, blur in, element by element. Use 'both' instead of 'forwards'. Don't use opacity 0.
>
> Add a clip animation to the background, column by column using clip-path."
>
> Buttons: "Add a 1px border beam animation around the pill-shaped button on hover. "
>
> Text animation: "Add a vertical text clip slide down animation letter by letter"
>
> Logos looping: "Add a marquis infinite loop slow animation to the logos using alpha mask"
>
> Content switching: "Animate the big card to rotate between 3 cards in a loop. Add prev/next arrows to switch between cards."
>
> Flashlight on hover: "Add a subtle flashlight effect on hover/mouse position to both background and border of the cards."
>
> Testimonials looping: "Make the cards animate marquis in an infinite loop with alpha mask slowly."
>
> Turn this into 8 sections for instagram slides: each section is full-width with 3/4 aspect ratio card v-center h-center inside like a site section with h-screen pagination: 1 cover, 6 sections explaining the steps, 1 cta. Add numbers, {Vibe Life}. Here's the content:
>
> This is my content:
>
> ----------
>
> {Content to include}
>
> ----------
>
> Animate fade in, slide in, blur in, element by element. Use 'both' instead of 'forwards'. Don't use opacity 0.
>
> (Optional): Replicate this type of visual styles: JSON Structure you're gonna get from AI.
>
> then again another break with some things and then again another section again naming something linke prompt to get json structure of the site:
>
> {Website HTML code}
> Give me the json format of the styles of this design so I can use this to apply on any design. It would apply the styles: fonts, colors, spacing, shadows, animations, layout, main button styles, secondary button styles, animation script, animation keyframe, animation instruction, adaptive layout specs, icon set, icon logos set, hover states.

## Run Locally

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
