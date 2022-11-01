<!-- 
This template project uses Sass to improve the front-end organization.

In case you need to implement Saas from scratch:

Source:
https://sprucecss.com/blog/the-simplest-sass-compile-setup#4-set-the-compile-commands

How it works:
Styles are placed in ./assets/scss
Then via CLI are compiled into css in ./assets/css
Those .css are imported into style.css file.

How-to:
1. You need NodeJS installed.

2. Use:
npm init
Answer the asked questions (which you can modify later) or/and press enters.
It creates a ./package.json

3. To install Sass, we have to run the following npm command:
npm install sass --save-dev
The –save-dev flag means that Sass is a development dependency (as you will see in your package.json, it is under the devDependecies object).

4. In the packeage.json file we need to set 2 scripts to compile our Sass into css files easier.
"scripts": {
    "sass-dev": "sass --watch --update --style=expanded assets/scss:assets/css",
    "sass-prod": "sass --no-source-map --style=compressed assets/scss:assets/css"
},

5. Open the console ./ and Run:
npm run sass-dev
This will run the script in the packeage.json file watching for changes and compiling all .scss into .css files.
If you want to make a minified file Run:
npm run sass-prod
-->










<!-- 
This template project uses Sass to improve the front-end organization.

In case you already implemented Saas in this project:

How it works:
Styles are placed in assets/scss
Then via CLI are compiled into css in assets/css
Those .css are imported into style.css file.

How-to:
1. You need NodeJS installed.
2. We have a ./package.json with Sass development dependency.
3. Open the console ./ and run:
   - npm install
   - This will get you all dependencies that the project needs.

4. In the packeage.json file we have set 2 scripts to compile our sass into css files easier.
"scripts": {
    "sass-dev": "sass --watch --update --style=expanded assets/scss:assets/css",
    "sass-prod": "sass --no-source-map --style=compressed assets/scss:assets/css"
},

5. Run:
   - npm run sass-dev
   - This will run the script in the packeage.json file watching for changes and compiling all .scss into .css files.

   - If you want to make a minified file Run:
   - npm run sass-prod
-->