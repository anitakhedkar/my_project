Getting started
If you haven't yet done so, install yarn globally:

npm install -g yarn
Create your project directory and get your initial setup:

mkdir my-project
cd !$
yarn init -y
yarn add --dev lite-server
yarn add angular@1.6.0
Next create an index.html file, and reference the version of Angular from node_modules:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script src="/node_modules/angular/angular.min.js"></script>
  </body>
</html>
Then define your start script in package.json like so:

{
  "name": "reddit-clone-solution",
  "version": "1.0.0",
  "author": "Galvanize <info@galvanize.com>",
  "license": "MIT",
  "scripts": {
    "start": "lite-server"
  },
  "devDependencies": {
    "lite-server": "^2.2.2"
  },
  "dependencies": {
    "angular": "1.6.0"
  }
}
Add a readme that tells others (and your future self) how to install / run the app:

Install the app by running `yarn`

Run the app with `npm start`
Finally setup your project in Git:

echo node_modules >> .gitignore
git init .
git add -A
git commit -m "initial commit"
Then you can push to GitHub and start building the app!
