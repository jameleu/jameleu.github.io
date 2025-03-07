# Personal Website
This is my personal website, where I dove deep into math invovled with CSS, along with Next.js best design practices.
## Info About Craftmanship of Website
Coded in React, Next.js, JS, CSS, HTML. All components (like carousel buttons) are made from scratch using math and code
* For the bubble's floating movement, used **Perlin Noise** to generate naturally smooth sequence of pseudo-random numbers to determine bubbles' position. Pop up text has adaptive size despite the lack of the usual hierarchical child to parent influenced sizing
* Designed realistic **physics-based** animations (React Spring) and CSS animations that animate on scroll position, as well as object visibility calculated from window-object convergence
* Tracked scroll position within whole container and sections of website using calculations with document offsets, reference top offsets, and inner/outer window size
* Coded formatting that adapts to screen size and containers, changing rule sets as needed
* Created typewriter animation that uses before pseudo-element to hide the text and slowly reveal the text by an amount calculated to be one letters-width for the given font size
