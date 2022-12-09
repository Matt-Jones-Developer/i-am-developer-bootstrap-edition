# i-am-developer-bootstrap-edition
A Bootstrapped version of my portfolio.

## Description

Welcome to my portfolio - Bootstrap edition!
This repo will serve as a home to for the bootstrapped version of my portfolio, that introduces myself to the world as a professional web developer and showcases my best work styled using Bootstrap which I can add to my skill set and offer a bootstrap option to my clients. 

As before, this web app includes an about me section, a projects section with additional carousel component, a skills and contact section, sticky navbar and footer.

I found learning Bootstrap fairly straight-forward, it's drag and drop design of components makes it easy to quickly build a webpage that looks professional.  The custom styling classes make it easy to change the way it looks without affecting or breaking the underlying Bootstrap classes.

I initially struggled with the modal and form sections, but overcame them after a quick revisit on how it's done.
I decided to add a call to action button within my header that would allow users to quickly get in touch with me, raising it's importance as per the UX heirachy document I created. 

Issues using V5 and updating everything so it worked:

I decided to install V5 via npm.  I also started with the template file, just to check everything was working.  To my surprise the modal button wasn't.  After a quick search I discovered they had not correctly updated the starter code, so I switched out data-toggle for data-bs-toggle, data-target for data-bs-target and data-dismiss to data-bs-dismiss.

I also set the link for the css using the supplied version and added the js popper link to the top of the document using defer.  Everything now worked as expected and I could begin coding! 

I also had 3 severe vulnerability warnings when updating npm from my previous version.  I ran npm audit fix --force to fix these.  I ran into unresolved warnings here so I applied:

Couple of npm commands that will help you audit your packages before upgrading:

npm list --depth 0 lists all packages at the top level:

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

# npm audit report

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


npm outdated lists report of package versions compared to versions specified in package.json file

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

I checked 
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Mock-up-Design](#mock-up-design)
* [License](#license)
* [Badges](#badges)

## Installation

Links to each project are provided through each projects link text. I wish I'd had time to refactor all of my other projects code too, but I will.

For the Python project, you will need to download the repo, install the correct python version (I like pyenv with a virtual environment) and then add the dependencies via requirements.txt on your system - instructions are provided.  I plan to make this game fully UI based in the future, complete with animations and a live leaderboard!


## Usage

To view the deployed portfolio, please go to: https://matt-jones-developer.github.io/i-am-developer-bootstrap-edition/

The link for this repo: https://github.com/Matt-Jones-Developer/i-am-developer-bootstrap-edition/

*screenshots of the homepage*
![This is a screenshot](/assets/images/demo/bootstrap-edition_screenshot.png)


## Design & Features

When I first set out in designing my original portfolio I had many ideas that I didn't implement so I wanted to try to add more for this version.

I will endeavour to include the following goals for this project:

- Sticky Navbar: DONE
- GRID of coloured squares: DONE - overcame a lot here, even tried to implement a random(math) function in JS, but it didn't really work and decided to omit it.  I am really happy with how this came out and I will make the colours randomise to random squares once I have a better grasp of JavaScript.

- site is 100% responsive on any device or screen adjustment: DONE 
- each project image link contains: transparent bg text section layered over the image with intro blurb: DONE
- Light/Dark switch: TODO

- main font to be a custom web-font: Decided to add custom fonts only to the gameboy project and to bio-metal in the end.  Very happy with Raleway as the main font to use in my portfolio as it looks clean.
  
- make the titles 'spell out' the letters?: TODO
- fading/blending/zooming main background image: Implemented then removed due to Safari causing issues.  Decided that it wasn't necessary especially on mobile views. Good fun figuring it out and working with transition: transform for the first time.  I feel my site already showcases my understanding of CSS animation quite nicely so, 'less is more' as they say.

- animated 'sections' similar to the titles on my bio-page: TODO - I want entire sections to slide in and out as you scroll but I will save for future feature.

- showcase my design skills via 'graphics commissions' including guitars and amps, the Gameboy game assets projects: DONE both Gameboy and some Guitar on metal-bio.

- my best work to date (webpages, apps, design, music) with html, css, python etc: DONE (I reluctantly omitted the link to Cristal Vision's website as I currently have it down for maintenance; a lot of bugs written back when I was just starting out!  But all the other links work great.

- homepage (the main back/return to page) has 2 sections (projects + about me)  - went with a single page layout in the end, but I did include smooth scrolling links to each section which work great.

- navbar has collapsing burger menu for mobile views containing 'projects' 'web development' 'graphic design' and 'about me', CV PDF + 'contact' as another route to call to action: TODO 

- add my music (which track?) and a Soundcloud widget to turn it on/off: Implemented but removed due to web formatting issues: TODO! I still have a basic link which works just fine.

- responsive screenshots embedded/skewed into iphone images! - TODO - When you click on a project image, I'd like it to open a page dedicated to how and why the site was made, the issues I overcame and screenshots of it's responsive design in mobile view.

## Mock-up Design

mockup - here are my wireframes and design mockups I created before coding - I ended up reverting back to the original design to meet the criteria but still included the gameboy slide reel inside my gameboy assets website.

- layout design - kept it simple and followed the assessment criteria, I wanted to include other information but felt that the brief didn't allow me to do so without changing the criteria. 
- colour palette - I chose light and dark greys as the main backgrounds, highlighted by aqua.  I wanted to make the colour grid randomise but I ended up using CSS animations to achieve the effect I wanted.  The secondary palette was to complement the gameboy page (you can view my palettes in the design folder)

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
