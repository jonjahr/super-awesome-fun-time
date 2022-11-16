## Jon Jahr's Kong Assignment

Thanks for inviting me to do this assignment!  

Changes:

* Hero section: Updated the hero to match the Figma design.  The layout is fully responsive.
* Menu: Updated the menu to match the Figma design, and made it fixed to the top of the page.  On scroll, the menu shows and hides.
* Unit tests!  I added two Jest tests.  The first test checks that the newsletter submits the email and UTM params as expected.  The second test runs the navbar init function.  Run `npm run test` to fire them up.
* Buttons: In `_button.scss` I'm showing one way to handle button variants.  We have utility classes for color variants (.color-blue, .color-green) and fill variants (.fill-solid, .fill-outline, .fill-inverted).  Size variants could be added if needed.  
* Webpack config: I updated the webpack config to optimize SVGs and inline them if they're smaller than 4KB.  All images are output to `/dist/static`.
* SASS variables: In `_variables.scss` I created variables for spacing, nav height, and easing.
* Responsive variables: I made a responsive CSS variable `--nav-height`.  For values that change responsively I like to create CSS variables.  I often do this for things like gutters and nav height.
* `.add-nav-padding`: The page template would add this class to the first content block on the page, whatever block type that is.  The block would use this class to add extra top padding to itself as necessary.  The reason for this extra care, and not adding a top margin to `body`, is that a top margin on `body` can cause a white gap at the viewport top when the nav is hidden.

What I didn't change:

* Image optimization.  All the images are SVGs, and I didn't look deeply to see if they could be optimized by converting them to WEBP/PNG/JPG.  In a production app my first choice would be to serve images from a CDN like Imgix and then create an image component that generates a `srcset` attribute using the CDN's image transforms.  My second choice would be to generate sets of optimized scaled images at build time with something like [webpack-image-srcset-loader](https://github.com/Calvin-LL/webpack-image-srcset-loader) and then create an image component that generates a `srcset` attribute from the built image set.
* All the other page blocks remain the same, except for the hero.  I would have liked to update them to match the Figma design but I ran out of time.  

## Deployed to Netlify:

[jonjahr-super-awesome-kong-site.netlify.app](https://jonjahr-super-awesome-kong-site.netlify.app/?utm_source=email&utm_medium=web&utm_campaign=awesome&utm_term=amazing&utm_content=hello&not_a_utm_param=not-included)

## Quick Start

* Clone the repo
* `nvm use`
* `npm install`
* Run in dev mode: `npm run start`
* Run in prod mode: `npm run build; cd dist; npx serve -p 8080`
* Run the Jest tests: `npm run test`