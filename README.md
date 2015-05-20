###### Help make the world a better place, use [EditorConfig](http://editorconfig.org/)

### This is a Middleman starter template.
Requirements
- [Ruby](https://www.ruby-lang.org/en/)
- [Bundler](http://bundler.io/)
- [Middleman](http://middlemanapp.com/)
- [Compass](http://compass-style.org/)
- [Bower](http://bower.io/)

##### Setup Project
```
git clone https://github.com/fellswoop/middleman-project-template.git
```
```
mv middleman-project-template/ <your-project-name>/
```
```
cd <your-project-name>
```
```
bower install
```
```
bundle install
```

##### Development
```
rake preview
```
view <a href="http://0.0.0.0:4567" target="_blank">Site</a>

##### Production
```
rake build
```

Image Grid and Hero Carousel
==
####Plugins and Libraries
Both of these components use Bootstrap 3.3.4 and jQuery 1.11.3. These are linked to CDN's. Refer to Bootstrap's [documentation](http://getbootstrap.com/getting-started/) for further style customization.

####Directories
The images for the grid are housed in the `images` directory. 

The `scripts` directory maybe used for any additional libraries or plugins you wish to use. You may also download Bootstrap and jQuery and place them in this folder if you do not wish to link to a CDN.

You may wish to add your own CSS styles, please use the `styles` directory to house your custom styles.

####Browser Compatibility
These components should be compatible with Chrome, Safari, Firefox and IE9+. If IE8 support is required, Respond.js should be added to your code.

####Installation and Configuration
Simply add the html for the components to your project as well as create an 'images' directory for the images in your implementation.  

#####Hero Carousel
To add or change images in the Hero Carousel component you may reference this snippet
```
<div class="item active">
   <img src="images/your-image.jpg" class="img-responsive" alt="your description"/>
</div>
```
To add images copy and paste the snippet inside of the `carousel-inner` div and replace the value for `src` with your image as well as replace the value for `alt` with your description.

#####Image Grid
To add or change images in the Hero Carousel component you may reference this snippet
```
<div class="col-lg-2 col-md-2 col-sm-3 col-xs-4">
    <img class="img-responsive" src="images/your-image.jpg" alt="your description"/>
</div>
```
To add images copy and paste the snippet inside of the `row grid` div and replace the value for `src` with your image as well as replace the value for `alt` with your description.

####Image Sizes
Hero Carousel = 1200x800  
Image Grid = 200x200

####Photo License
The images provided are for placement only and are soley reserved for the author's use.
