# fast-start-template
## A template with the basics already set up to start web projects using HTML, CSS, JavaScript and Php faster.



### @font-face
- Use of Poppins & Open Sans localy
- Fast performance optimitzation

* Also Google fonts CDN comented for fast start in case you want lighter weith project, you can remove the local files on:
- assets/font
- assets/css/font/css



### mobile frist
- This project it's done with mobile frist to keep good practices



### jquery
- Contains a local script for making use of jQuery on its version 3.6.0
- Fast performance optimitzation

* Also jQuery CDN comented for fast start in case you want lighter weith project, you can remove the local files on:
- assets/js/jquery



### butter.js
- Commented by defauld
- Warning, fixed elements has to be outside of ```<main id="butter">``` for its proper functioning
- if you want butter.js on your project you have to uncoment the following lines:
```
   <!-- <script src="assets/js/butter.js"></script>
	<script>
		butter.init({cancelOnTouch: true});
	</script> -->
```

- if you dont want butter.js in your project you can remove the local files on:
- assets/js/butter.js
- and its respective lines of code previously mentioned


### AOS
- Commented by defauld
- A library to animate your website
- if you want AOS on your project you have to uncoment the following lines:
```
   <!-- <link rel="stylesheet" href="assets/css/aos.css"> -->
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
- Mescla de Apple i Bootstrap
```
/*--------------------------------------------------------------
    @media - Custom
--------------------------------------------------------------*/

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (portatils petits, 1069px and up) */
@media (min-width: 1069px) { ... }

/* Large devices (portatils, 1200px and up) */
@media (min-width: 1200px) { ... }

/* Extra large devices (sobretaula, 1441px and up) */
/* Apartir d'aquí es solen col·locar caixes de 1440px en total perque creixin els laterals depenent l'amplada o simplement full with */
@media (min-width: 1441px) { ... }

/*--------------------------------------------------------------
    @media - compressed
--------------------------------------------------------------*/

/* Tablets amb height comprimit */
@media screen and (max-width: 1068px) and (min-width: 768px) and (max-height: 733px) and (min-height: 0px) { ... }

/* Portatils amb height comprimit */
@media screen and (max-width: 1440px) and (min-width: 1069px) and (max-height: 775px) and (min-height: 0px) { ... }

/* Sobretaula amb height comprimit */
@media screen and (max-width: 1441000px) and (min-width: 1441px) and (max-height: 775px) and (min-height: 0px) { ... }
```


#### Aple
```
/*--------------------------------------------------------------
    @media - Apple
--------------------------------------------------------------*/

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (portatils, 1069px and up) */
@media (min-width: 1069px) { ... }

/* Extra large devices (sobretaula, 1441px and up) */
/* Apartir d'aquí es solen col·locar caixes de 1440px en total perque creixin els laterals depenent l'amplada o simplement full with */
@media (min-width: 1441px) { ... }

/*--------------------------------------------------------------
    @media - compressed
--------------------------------------------------------------*/

/* Tablets amb height comprimit */
@media screen and (max-width: 1068px) and (min-width: 768px) and (max-height: 733px) and (min-height: 0px) { ... }

/* Portatils amb height comprimit */
@media screen and (max-width: 1440px) and (min-width: 1069px) and (max-height: 775px) and (min-height: 0px) { ... }

/* Sobretaula amb height comprimit */
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
