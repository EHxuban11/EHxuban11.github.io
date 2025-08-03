# My Portfolio Website Readme
This repository contains my portfolio website.

The webiste is made with react and deployed directly in github pages which is a free hosting option.

Here is the production link: https://ehxuban11.github.io

![Quick demo of the site](demo.gif)

## How to run
nodejs needs to be installed as a prerequisite


Change directory to portfolio
```
cd portfolio
```

To install dependencies (first time only):
```
npm install
```

To run the proyect in local
```
npm start
```

To put in production (on the internet)
This will only work if vscode is well connected to github (log in)
```
npm run deploy
```
In github pages a small ocnfiguration needs to be done in order to make the github page work. Go to the repository options, to the pages tab. Then put deploy from branch and select the gh-page branch-


## Additional context
This is using the gh-pages package under the hood which we installed when doing the npm install command because this installs the package.json file which contains gh-pages dependency.
