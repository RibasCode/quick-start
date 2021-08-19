# quick-start-template
## A template with the basics already set up to start web projects using HTML, CSS, JavaScript and Php faster.



### @font-face
- Use of Poppins & Open Sans localy
- Fast performance optimitzation

* Also a Google fonts CDN @import comented on the css, to launch a quick start in case you want a lighter weith project, you can remove the local files on:
- assets/font
- assets/css/font/css



### mobile frist
- This project it's done with mobile frist to keep good practices
- Also has custom Responsive Grid Class (Similar to Bootstrap) - Explained at the end of the document


### jQuery
- Contains a local script for making use of jQuery on its version 3.6.0
- Fast performance optimitzation

* Also jQuery CDN comented for quick start in case you want lighter weith project, you can remove the local files on:
- assets/js/jquery



### butter
- Commented by defauld
- Warning, fixed elements has to be outside of ```<main id="butter">``` for its proper functioning
- if you want butter on your project you have to uncoment the following lines:
```
   <!-- <script src="assets/js/butter.js"></script>
	<script>
		butter.init({cancelOnTouch: true});
	</script> -->
```

- if you dont want butter.js in your project you can remove the local files on:
- assets/js/butter.js
- and its respective lines of code previously mentioned



### normalize
- A library to neutralize css styles in all browsers
- you can find normalize.css at:
```
	CSS at (style.css)
     /* @import url(normalize.css); */

```



### AOS
- Commented by defauld
- A library to animate your website
- if you want AOS on your project you have to uncoment the following lines:
```
	CSS at (style.css)
     /* @import url(aos.css); */

	JS at (index.html)
   <!-- <script src="assets/js/aos.js"></script>
	<script>
		AOS.init();
	</script> -->
```
    
- if you dont want AOS in your project you can remove the local files on:
- assets/css/aos.css
- assets/js/aos.js
- and its respective lines of code previously mentioned



### @media

#### Custom (currently using this)
- Apple & Bootstrap mixt
```
/* Small devices (phones, 0px and up) */

/*--------------------------------------------------------------
    @media - Mobile First
--------------------------------------------------------------*/

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Medium/Large devices (small laptops, 1069px and up) */
@media (min-width: 1069px) { ... }

/* Large devices (laptops, 1281px and up) */
@media (min-width: 1281px) { ... }

/* Extra large devices (desktop & big laptops, 1441px and up) */
@media (min-width: 1441px) { ... }

/*--------------------------------------------------------------
    @media - Compressed Screens
--------------------------------------------------------------*/

/* Tablets compressed height */
@media screen and (max-width: 1068px) and (min-width: 768px) and (max-height: 733px) and (min-height: 0px) { ... }

/* Laptops compressed height */
@media screen and (max-width: 1440px) and (min-width: 1069px) and (max-height: 775px) and (min-height: 0px) { ... }

/* Desktop compressed height */
@media screen and (max-width: 1441000px) and (min-width: 1441px) and (max-height: 775px) and (min-height: 0px) { ... }
```


#### Aple
```
/* Small devices (phones, 0px and up) */

/*--------------------------------------------------------------
    @media - Apple
--------------------------------------------------------------*/

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (laptops, 1069px and up) */
@media (min-width: 1069px) { ... }

/* Extra large devices (desktop and macbook 16", 1441px and up) */
@media (min-width: 1441px) { ... }

/*--------------------------------------------------------------
    @media - Compressed Screens
--------------------------------------------------------------*/

/* Tablets compressed height */
@media screen and (max-width: 1068px) and (min-width: 768px) and (max-height: 733px) and (min-height: 0px) { ... }

/* Laptops compressed height */
@media screen and (max-width: 1440px) and (min-width: 1069px) and (max-height: 775px) and (min-height: 0px) { ... }

/* Desktop compressed height */
@media screen and (max-width: 1441000px) and (min-width: 1441px) and (max-height: 775px) and (min-height: 0px) { ... }
```


#### Bootstrap
```
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

/*--------------------------------------------------------------
    @media - Bootstrap
--------------------------------------------------------------*/

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```



### Custom Responsive Grid Class (Similar to Bootstrap)
- This project it's done with mobile frist to keep good practices
```
.flex-row{
    display: flex;
    flex-wrap: wrap;
}

/* Extra Small devices (phones, 0px and up) */

.flex-xs-1{
    flex: 0 0 100%;
}
.flex-xs-2{
    flex: 0 0 50%;
}

/*--------------------------------------------------------------
    @media - Mobile First
--------------------------------------------------------------*/

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
    .flex-sm-1{
        flex: 0 0 100%;
    }
    .flex-sm-80p{
        flex: 0 0 80%;
    }
    .flex-sm-70p{
        flex: 0 0 70%;
    }
    .flex-sm-66p{
        flex: 0 0 66.666%;
    }
    .flex-sm-2{
        flex: 0 0 50%;
    }
    .flex-sm-3{
        flex: 0 0 33.333%;
    }
    .flex-sm-4{
        flex: 0 0 25%;
    }
    .flex-sm-30p{
        flex: 0 0 30%;
    }
    .flex-sm-20p{
        flex: 0 0 20%;
    }

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    .flex-md-1{
        flex: 0 0 100%;
    }
    .flex-md-80p{
        flex: 0 0 80%;
    }
    .flex-md-70p{
        flex: 0 0 70%;
    }
    .flex-md-66p{
        flex: 0 0 66.666%;
    }
    .flex-md-2{
        flex: 0 0 50%;
    }
    .flex-md-3{
        flex: 0 0 33.333%;
    }
    .flex-md-4{
        flex: 0 0 25%;
    }
    .flex-md-30p{
        flex: 0 0 30%;
    }
    .flex-md-20p{
        flex: 0 0 20%;
    }

}

/* Large devices (small laptops, 1069px and up) */
@media (min-width: 1069px) {
    .flex-lg-1{
        flex: 0 0 100%;
    }
    .flex-lg-80p{
        flex: 0 0 80%;
    }
    .flex-lg-70p{
        flex: 0 0 70%;
    }
    .flex-lg-66p{
        flex: 0 0 66.666%;
    }
    .flex-lg-2{
        flex: 0 0 50%;
    }
    .flex-lg-3{
        flex: 0 0 33.333%;
    }
    .flex-lg-4{
        flex: 0 0 25%;
    }
    .flex-lg-30p{
        flex: 0 0 30%;
    }
    .flex-lg-20p{
        flex: 0 0 20%;
    }
}

/* Extra large devices (laptops, 1281px and up) */
@media (min-width: 1281px) {
    .flex-xl-1{
        flex: 0 0 100%;
    }
    .flex-xl-80p{
        flex: 0 0 80%;
    }
    .flex-xl-70p{
        flex: 0 0 70%;
    }
    .flex-xl-66p{
        flex: 0 0 66.666%;
    }
    .flex-xl-2{
        flex: 0 0 50%;
    }
    .flex-xl-3{
        flex: 0 0 33.333%;
    }
    .flex-xl-4{
        flex: 0 0 25%;
    }
    .flex-xl-30p{
        flex: 0 0 30%;
    }
    .flex-xl-20p{
        flex: 0 0 20%;
    }

}

/* Extra extra large devices (desktop & big laptops, 1441px and up) */
@media (min-width: 1441px) {
    .flex-xxl-1{
        flex: 0 0 100%;
    }
    .flex-xxl-80p{
        flex: 0 0 80%;
    }
    .flex-xxl-70p{
        flex: 0 0 70%;
    }
    .flex-xxl-66p{
        flex: 0 0 66.666%;
    }
    .flex-xxl-2{
        flex: 0 0 50%;
    }
    .flex-xxl-3{
        flex: 0 0 33.333%;
    }
    .flex-xxl-4{
        flex: 0 0 25%;
    }
    .flex-xxl-30p{
        flex: 0 0 30%;
    }
    .flex-xxl-20p{
        flex: 0 0 20%;
    }

}
```