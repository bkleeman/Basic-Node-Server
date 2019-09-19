# Project Title

A very simple node.js server. Currently configured for deploying to a heroku dyno on branch `heroku-deploy`. Plans for the future include deploy scripts for other environments (perhaps codeanywhere, gitpod, etc. -- maybe even different local environments if I can think of a use case)

## Getting Started

### Local

`node server.js`
Open up a browser to `localhost:3000`

### For Heroku

Install [Heroku-CLI](https://devcenter.heroku.com/categories/command-line).
Provide your `heroku login` credentials
`heroku create` your new app
`git init`
`git add .`
`git commmit -m "your mesage"`
`git push heroku <branchname>`
Follow the link provided by heroku to your deployed app

## Built With

* [Node.js](https://nodejs.org/en/) 
* [Express](https://expressjs.com/) - Add structure for dynamic ports and processing capabilities, interpreting urls, and allowing for interpreting any sort of request in the exact same way.

## Author

* **Benjamin Kleeman** - [bkleeman](https://github.com/bkleeman)

## License

This project is licensed under the MIT License

## Acknowledgments

* Thanks to **James deBettencourt** for providing me and my fellow students with this file to expand off of for IT 339 at DePaul University.
