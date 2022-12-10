// Importing JavaScript Bootstrap

// Import just what we need
// Popper.js util and modal dependencies
import "../../node_modules/popper.js/dist/popper.min.js";
import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";
const bootstrap = require('bootstrap')

// stop navlink animations repeating on hover
const startPage = (() => {
    const html = document.documentElement,
          s = 'start'
    html.classList.add(s)
    window.addEventListener('load', function() {
      setTimeout(() => {
        html.classList.remove(s)
      }, 200)
    })
  })()