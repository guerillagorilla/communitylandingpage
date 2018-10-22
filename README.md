# Community Landing Page

## How to use

Fork the repo.

Use `npm install` inside the directory to install all the dependencies (vue, vue-router, etc).

Use `npm run serve` to begin the development server, which will hot-reload on code changes. The default address is `localhost:8080`, but the console will tell you.

Use `npm run build` to compile the project into the `/dist` folder. This is what the finished product will be like.

If you don't have `vue-cli` already and want it, use `npm install -g vue-cli`. After this, you may use `vue ui` to open up Vue's graphical user interface, which you might find easier to use.

## How to contribute

Follow the steps above to get the project running on your local computer. Make any changes/implementations you'd like then commit them to your own personal branch which you should create. If you need help with this ask on the discord.

Once you're happy with the state of your branch, create a pull request to the master branch and I'll have a look over it! :)

## Guide

All seperate pages should have their own component which is housed in the `./views` folder.

All components for a **specific** page should be housed under the respective folder in the `./components` folder and imported into the page's main component for use.
For example, `Home.vue` which lives in `./views/Home.vue` should import `HomeWelcome.vue` from `./components/Home/HomeWelcome.vue`.

Any components that are re-usable and not page-specific e.g the navigation, footer, etc should simply live at the root-level of `./components`.

If you have any questions feel free to ask! Don't worry if you do something wrong, we'll fix it easily.