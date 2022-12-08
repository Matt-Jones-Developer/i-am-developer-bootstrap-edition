# i-am-developer-bootstrap-edition
A Bootstrapped version of my portfolio.

## Description

Welcome to my portfolio - Bootstrap edition!
This repo will serve as a home to for the bootstrapped version of my portfolio, that introduces myself to the world as a professional web developer and showcases my best work styled using Bootstrap which I can add to my skillset and offer a bootstrap option to my clients. 

As before, this web app includes an about me section, a projects section with additional carousel component, a skills and contact section, sticky navbar and footer.

I found learning Bootstrap fairly straight-forward, it's drag and drop design of components makes it easy to quickly build a webpage that looks professional.  The custom styling classes make it easy to change the way it looks without affecting or breaking the underlying Bootstrap classes.

I initially struggled with the modal and form sections, but overcame them after a quick revisit on how it's done.
I decided to add a call to action button within my header that would allow users to quickly get in touch with me, raising it's importance as per the UX heirachy document I created. 

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
![This is a screenshot](/assets/images/demo/portfolio_screenshot1.png)
![This is a screenshot](/assets/images/demo/portfolio_screenshot2.png)


## Design & Features

When I first set out in designing my original portfolio I had many ideasthat I did'nt implement so I wanted to try to add more for this version.

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

- my best work to date (webpages, apps, design, music) with html, css, python etc: DONE (I reluctantly ommited the link to Cristal Vision's website as I currently have it down for maintenance; a lot of bugs written back when I was just starting out!  But all the other links work great.

- homepage (the main back/return to page) has 2 sections (projects + about me)  - went with a single page l;ayout in the end, but I did include smooth scrolling links to each section which work great.

- navbar has collapsing burger menu for mobile views containing 'projects' 'web development' 'graphic design' and 'about me', CV PDF + 'contact' as another route to call to action: TODO 

- add my music (which track?) and a Soundcloud widget to turn it on/off: Implemented but removed due to web formatting issues: TODO! I still have a basic link which works just fine.

- responsive screenshots embedded/skewed into iphone images! - TODO - When you click on a project image, I'd like it to open a page dedicated to how and why the site was made, the issues I overcame and screenshots of it's responsive design in mobile view.

## Mock-up Design

mockup - here are my wireframes and design mockups I created before coding - I ended up reverting back to the original design to meet the criteria but still included the gameboy slide reel inside my gameboy assets website.

- layout design - kept it simple and followed the assessment criteria, I wanted to include other information but felt that the brief didn.t allow me to do so without changing the criteria. 
- colour palette - I chose light and dark greys as the main backgrounds, highlighted by aqua.  I wanted to make the colour grid randomise but I ended up using CSS animations to achieve the effect I wanted.  The secondary palette was to complement the gameboy page (you can view my palettes in the design folder)

First design wireframe:

![This is a screenshot](/assets/images/design/home-page-layout.png)
![This is a screenshot](/assets/images/design/project_grid_design.png)
![This is a screenshot](/assets/images/design/final-project-page-layout.png)

Updated (used for Gameboy Assets project in the end):

![This is a screenshot](/assets/images/design/portfolio_updated_wireframe_1.png)
![This is a screenshot](/assets/images/design/portfolio_updated_wireframe_2.png)
![This is a screenshot](/assets/images/design/portfolio_updated_wireframe_3.png)
![This is a screenshot](/assets/images/design/portfolio_updated_wireframe_4.png)

## License 

Licensed under MIT.  Please view the license file included in the repo.

Copyright (c) [2022] [Matt Jones]


## Badges

As always, the project has been fully verified thanks to w3Validator!

![This is an image](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fvalidator.nu%2F)
