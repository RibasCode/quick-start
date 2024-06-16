
<!--

HOW TO RUN THE PROJECT

   Use comands at ./

   - Install all dependencies:
      - npm install

   - Compile Sass to CSS styles:
      - npm run sass-dev
      - npm run sass-prod

-->

<!--

PROJECT DEPENDENCIES

   - npm install sass --save-dev
      - URL: https://sprucecss.com/blog/the-simplest-sass-compile-setup#4-set-the-compile-commands

   - npm install jquery --save-dev
      - URL: https://jquery.com

   - npm install standard --save-dev
      - URL: https://standardjs.com/
      - Install: ESLint extension
      - Settings > Enables ESLint as a formatter: true
      - Settings > Defauld formatter: ESLint
      - Settings > Format on save: true
      - Create & config: ./.eslintrc.json

   - npm install normalize.css --save
      - URL: https://necolas.github.io/normalize.css

   - npm install toastify-js --save
      - URL: https://apvarun.github.io/toastify-js

-->

<!--

HOW TO RUN SASS

This template project uses Sass to improve the front-end organization.
*(Down below we explain how to install Sass from scratch).

How it works:

   - Styles are placed in assets/scss
   - Then via CLI are compiled into css in assets/css
   - Those .css are imported into style.css file.

How-to:

1.  You need NodeJS installed.

2.  We have a ./package.json with Sass development dependency.

3.  Open the console ./ and run:

   - npm install
   - This will get you all dependencies that the project needs.

4.  In the packeage.json file we have set 2 scripts to compile our Sass into css files easier.

   "scripts": {
      "sass-dev": "sass --watch --update --style=expanded assets/scss:assets/css",
      "sass-prod": "sass --no-source-map --style=compressed assets/scss:assets/css"
   },

5.  Run:
   - npm run sass-dev
   - This will run the script in the packeage.json file watching for changes and compiling all .scss into .css files.

   - If you want to make a minified file Run:
   - npm run sass-prod

-->

<!--

*IF YOU WANT TO INSTALL SASS FROM SCRATCH (IN A NEW PROJECT)

How-to:

1.  You need NodeJS installed.

2.  Use:

   - npm init
   - Answer the asked questions (which you can modify later) or/and press enters.
   - It creates a ./package.json

3.  To install Sass, we have to run the following npm command:

   - npm install sass --save-dev
   - The –save-dev flag means that Sass is a development dependency (as you will see in your package.json, it is under the devDependecies object).

4.  In the packeage.json file we need to set 2 scripts to compile our Sass into css files easier.

   "scripts": {
      "sass-dev": "sass --watch --update --style=expanded assets/scss:assets/css",
      "sass-prod": "sass --no-source-map --style=compressed assets/scss:assets/css"
   },

5.  Open the console ./ and Run:

   - npm run sass-dev
   - This will run the script in the packeage.json file watching for changes and compiling all .scss into .css files.

   - If you want to make a minified file Run:
   - npm run sass-prod

-->
