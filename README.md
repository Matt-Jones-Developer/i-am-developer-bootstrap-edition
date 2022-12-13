# i-am-developer-bootstrap-edition
A Bootstrapped version of my portfolio.

## Description

Welcome to my portfolio - Bootstrap edition!
This repo will serve as a home to for the bootstrapped version of my portfolio, that introduces myself to the world as a professional web developer and showcases my best work styled using Bootstrap which I can add to my skill set and offer a bootstrap option to my clients. 

As before, this web app includes an about me section, a projects section with additional carousel component, a skills and contact section, sticky navbar and footer.

I found learning Bootstrap fairly straight-forward, it's drag and drop design of components makes it easy to quickly build a webpage that looks professional.  The custom styling classes make it easy to change the way it looks without affecting or breaking the underlying Bootstrap classes.

I initially struggled with the modal and form sections, but overcame them after a quick revisit on how it's done.
I decided to add a call to action button within my header that would allow users to quickly get in touch with me, raising it's importance as per the UX heirachy document I created. 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Project-Trees](#project-trees)
* [Bootstrap-Issues](#bootstrap-issues)
* [UI-Design-Features](#ui-design-features)
* [Wireframing](#wireframing)
* [License](#license)
* [Badges](#badges)


## Installation

The bootstrapped portfolio is deployed so no further installation requirements.

Links to each project are provided through each projects link text. I wish I'd had time to refactor all of my other projects code too, but I will.

For the Python project, you will need to download the repo, install the correct python version (I like pyenv with a virtual environment) and then add the dependencies via requirements.txt on your system - instructions are provided.  I plan to make this game fully UI based in the future, complete with animations and a live leaderboard!


## Usage

To view the deployed portfolio, please go to: https://matt-jones-developer.github.io/i-am-developer-bootstrap-edition/

The link for this repo: https://github.com/Matt-Jones-Developer/i-am-developer-bootstrap-edition/

*screenshots of the homepage*
![This is a screenshot](/assets/images/demo/bootstrap-edition_screenshot.png)

## Project-Trees

I have included level 2 in the directory_tree.txt file.  So you can see the npm installed 'node_modules' bootstrap directory.  It means it's all self contained within the project and doesn't rely on server links to operate.  I had issues with version links too initially, so I feel this is a better way to use BS. 

Level 1:

.
├── LICENSE
├── README.md
├── assets
├── directory_tree.txt
├── index.html
├── node_modules
├── package-lock.json
├── package.json
└── scss


## Bootstrap-Issues

I had some issues using V5 and updating everything so it worked:

I decided to install V5 via npm.  I also started with the template file, just to check everything was working.  To my surprise the modal button wasn't.  After a quick search I discovered they had not correctly updated the starter code, so I switched out data-toggle for data-bs-toggle, data-target for data-bs-target and data-dismiss to data-bs-dismiss.

I also set the link for the css using the supplied version and added the js popper link to the top of the document using defer.  Everything now worked as expected and I could begin coding! 

I also had 3 severe vulnerability warnings when updating npm from my previous version.  I ran npm audit fix --force to fix these.  I ran into unresolved warnings here so I applied:

Couple of npm commands that help audit packages before upgrading:

- npm list --depth 0 lists all packages at the top level:

├── autoprefixer@10.4.13
├── bootstrap-icons@1.10.2
├── bootstrap@4.6.2
├── jquery@3.6.1
├── live-server@1.2.2
├── node-sass@7.0.3
├── nodemon@2.0.20
├── npm-run-all@4.1.5
├── popper.js@1.16.1
├── postcss-cli@10.1.0
├── postcss@8.4.19
├── purgecss@4.1.3
├── stylelint-config-twbs-bootstrap@4.0.0
└── stylelint@14.16.0


npm audit checks for security vulnerabilities or out-of-date versions:

- npm audit report

glob-parent  <5.1.2
Severity: high
glob-parent before 5.1.2 vulnerable to Regular Expression Denial of Service in enclosure regex - https://github.com/advisories/GHSA-ww39-953v-wcq6
fix available via `npm audit fix`
node_modules/glob-parent
  chokidar  1.0.0-rc1 - 2.1.8
  Depends on vulnerable versions of glob-parent
  node_modules/chokidar
    live-server  >=1.2.0
    Depends on vulnerable versions of chokidar
    node_modules/live-server


- npm outdated lists report of package versions compared to versions specified in package.

glitchy81@Matts-MacBook-Pro bootstrap-npm-starter % npm outdated
Package                          Current  Wanted  Latest  Location                                      Depended by
bootstrap                          4.6.2   4.6.2   5.2.3  node_modules/bootstrap                        bootstrap-npm-starter
node-sass                          7.0.3   7.0.3   8.0.0  node_modules/node-sass                        bootstrap-npm-starter
purgecss                           4.1.3   4.1.3   5.0.0  node_modules/purgecss                         bootstrap-npm-starter
stylelint-config-twbs-bootstrap    4.0.0   4.0.0   7.0.0  node_modules/stylelint-config-twbs-bootstrap  bootstrap-npm-starter

I can see my bootstrap is outdated! - so I uninstalled and then upgraded to the latest version.

npm uninstall bootstrap@4.6.2
npm i bootstrap@5.2.3

The severity warnings were still present.

I ran npm update.
I then uninstalled node-sass, purgecss and sytlelint I ran npm outdated and it returned clean.  So I attempted to reinstall these 3.  Ran npm outdated again - clean!

I checked for warnings again and they're still present sadly!  But hey, I tried.

I deployed the test app to make sure the bootstrap npm dist was working and seems to be all good.

I feel it's cleaner, more professional than the basic links and confusing amount of different scripts (different versions too) which initially caused bootstrap to fail.

I will always include the dist node files and folders in future bootstrapping.

Final thoughts on Bootstrap (post coding):

Whilst I liked the idea of drag and dropping in sections - they didn't seem to work as expected.  I still found myself needing to change the provided code, look up a lot of solutions and add a lot of CSS to style them as I wanted and I feel the responsiveness for this particular layout was worse than my hard-coded version.  

I made sure to test responsiveness for all apple devices in Safari, yet somehow when you manually adjust a browser window- the site will constantly overlap sections and generally look terrible.  I'd like to make a javascript version of the colours-grid hero, as I feel it could be contained and resized more easily and would of helped a lot of issues.

I feel that you would need an incredible amount of BS knowledge to understand how to use it in a professional capacity - I would honestly prefer to code every element myself. Modules I create allow for the same drag and drop, but they'll work as expected. 

Many of the shortcuts such as mb, pt etc would often fail, or be quite finnicky to apply, which caused more CSS and custom styles to be written.
The documentation said BS5 classes 'just needed new values' and not custom classes, but I ended up using customs for almost all of it due to things not working as expected.

The rows work ok, but I was annoyed by the lack of 'half spaces' in between say col-6 and col-7 - which meant that using CSS grid was a superior option for me.  When you adjust them to fit onto an ipad I had to force the cards to col-12 or full width earlier than if I'd just used flexbox as usual. 

I kept the blue buttons for most of the site apart from the CTA button, since applying my custom-btn class to them didn't work.  I hope to see improvements from BS in the future to make it more enjoyable to use and ready 'out of the box'.


## UI-Design-Features

When I first set out in designing my original portfolio I had many ideas that I didn't implement so I wanted to try to add more for this version.

I will endeavour to include the following goals for this project:

- Sticky Navbar: DONE
- GRID of coloured squares: DONE - overcame a lot here, even tried to implement a random(math) function in JS, but it didn't really work and decided to omit it.  I am really happy with how this came out and I will make the colours randomise to random squares once I have a better grasp of JavaScript.

- site is 100% responsive on any device or screen adjustment: DONE However using Bootstrap it brought additional complications with the hero grid - it seems that each time to reduce the browser window manually, it sends the jumbotron-bottom above/overlapping the grid container.  mb-5 didn't work so I forced to manually set a margin-top for almost every section to compensate.

- each project image link contains: transparent bg text section layered over the image with intro blurb: DONE

- Light/Dark switch: TODO - not enough time again.  But I will!
  
- make the titles 'spell out' the letters?: TODO

- fading/blending/zooming main background image: Implemented then removed due to Safari causing issues.  Decided that it wasn't necessary especially on mobile views. Good fun figuring it out and working with transition: transform for the first time.  I feel my site already showcases my understanding of CSS animation quite nicely so, 'less is more' as they say.

- animated 'sections' similar to the titles on my bio-page: TODO - I want entire sections to slide in and out as you scroll but I will save for future feature.

- showcase my design skills via 'graphics commissions' including guitars and amps, the Gameboy game assets projects: DONE both Gameboy and some Guitar on metal-bio.

- my best work to date (webpages, apps, design, music) with html, css, python etc: DONE (I reluctantly omitted the link to Cristal Vision's website as I currently have it down for maintenance; a lot of bugs written back when I was just starting out!  But all the other links work great.

- homepage (the main back/return to page) has 2 sections (projects + about me)  - went with a single page layout in the end, but I did include smooth scrolling links to each section which work great.  However once again Bootstrap has issues with both smooth scrolling and spyscroll - after a lot of googling I tried several suggestions but the scrolling offsets do not work as expected, therefore the scrolls don't stop at the correct points.  Very annoying I hope they fix this soon.

- navbar has collapsing burger menu for mobile views containing 'projects' 'web development' 'graphic design' and 'about me', CV PDF + 'contact' as another route to call to action: DONE - thanks to bootstrap it was a drag and drop - however their example code had errors in it which caused the toggle to fail.  I had to add 'bs' to a lot of the tags such as 'data-bs-toggle' before it would open.  For closing I had to change some of the targets and control sewttings to 'navbarNav' which fixed these issues.

- I still have a problem with the toggle since customising it to be 3 white bars only proved impossible.  I didn't like how it looked and wanted to add my own awesome font hamburger. I got that done, tried to hide the BS toggle, which proved infuriating.  I can either hide all the toggles, or the lines and the bg-colour of the bs-toggle only.  There is a constant outline of the original toggle which cannot seem to be removed at all.  Very disappointed and makes me positive I would sooner create my own toggle to begin with. 

- responsive screenshots embedded/skewed into iphone images! - When you click on a project image, I'd like it to open a page dedicated to how and why the site was made, the issues I overcame and screenshots of it's responsive design in mobile view. - STILL TODO

## Wireframing

mockup - here are my wireframes and design mockups I created before coding - I pretty much copied the original idea, but having learned about CTA and the importance of heirachy within your site, I wanted to adjust the hero page to include a large 'hook line' with a Call To Action button.  I think this improved the look of my site.

- layout design - kept it simple and followed the assessment criteria, I wanted to include other information but felt that the brief didn't allow me to do so without changing the criteria.  Since I wanted a CTA within my hero section, I did not want the about me section cluttering the hero up.  So it was added below in its own section, which allows the site to flow better.

- colour palette - I chose light and dark greys as the main backgrounds, highlighted by aqua.  I used the bs-dark colour and added it to my variable list.  I also added a subtle gradient for the main body background which looks better than the original design.

First design wireframe:

![This is a screenshot](/assets/images/design/jumbotron_header_wireframing.png)
![This is a screenshot](/assets/images/design/about_me_cards_wireframing.png)
![This is a screenshot](/assets/images/design/projects_grid_cards_wireframing.png)
![This is a screenshot](/assets/images/design/skills_contact_section_wireframing.png)


## License 

Licensed under MIT.  Please view the license file included in the repo.

Copyright (c) [2022] [Matt Jones]


## Badges

As always, the project has been fully verified thanks to w3Validator!

![This is an image](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fvalidator.nu%2F)
