## Website Performance Optimization portfolio project

For this Udacity optimization project, I optimized this online portfolio to improve load time. I worked to optimize the critical rendering path using techniques learned in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

###Part 1: Optimize PageSpeed Insights score for index.html

I used Github's gh-pages to run the site through PageSpeed Insights. To improve the score, I did the following:

* optimized the pizzeria.jpg file and made it the actual size it should be rendered at.
* minified CSS and inlined it in both index.html and pizza.html
* move JavaScript to before closing body tag

###Part 2: Optimize Frames per Second in pizza.html

In the main.js file these changes were made to render a consistent frame-rate of 60fps when scrolling:
* Reduce the number of pizzas generated on page load from 200 to 30
* Use a more efficient way to access the DOM than querySelectorAll - document.getElementsByClass()
* Move 'var items' outside of updatePositions(). We do not need to access the DOM element for every scroll.
* Created variable and moved document.body.scrollTop/1250 outside of for loop because calculation only needs to run once
* Put phase values in array in updatePositions(). Phase values are consistently the same because we are calculating the same set of 5 numbers for all of our pizzas no matter how big list of pizza is
* To improve speed at which pizzas change, set limit to 4 for changePizzaSizes() since the total number of pizzas shown is 4
* Change querySelector to document.getElementById() as document.getElementById Web API call is faster

### Build Tools and Run Instructions

I used Gulp to minify CSS and JavaScript. However I ended up moving the CSS to the head section of index.html and pizza.html to improve load time.

When building the project and running Gulp, cd into the project folder and type 'gulp'. This command will run the minification tasks for CSS and JavaScript.

Open up index.html to view the project.

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
