# Ionic Angular Conference Application

This application is purely a kitchen-sink demo of the Ionic Framework and Angular.

## Getting Started

- [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
- Install the ionic CLI globally: `npm install -g ionic`
- Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
- Run `npm install` from the project root.
- Run `ionic serve` in a terminal from the project root.
- Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`

## Routing in Angular (RouteModule)

Until now, we have play with simple application with only one page.
A real application have most of the time several page.
A page is often mapped to a route.

First setup the `RouteModule` in `AppModule`.
Then setup the router outlet in `app.component.html`.
Finally let`s add some routes into our application in`app-routing.ts`:

- a route with the path `tutorial` that will render the component `TutorialPage`
- a route with the path `` that will redirect to `/tutorial`
- a wilcard route that will redirect to `/tutorial`. The wilcard will catch all unknown routes

## Tutorial and Programmatic navigation

If you succeed to setup the routing, you should the dashboard, you should see the tutorial.
Some functionality are not working well, fix them.
Don't worry if the route '/app/tabs/schedule' is not done yet, we will implement it the next step

## App and Lazy loading

We have a `app tabs` that contains his own module and components
Every user will have access to this section, after their perform the tutorial, so we should lazy loaded it to make our app smaller.

So setup the routes (in `tabs-page-routing.ts`) and the child routing in the `tabs-page.module.ts`.

Then lazy load this module at the route path `/app` in `app-routing.ts` (Hint: loadChildren)

## Navigation Drawer,  Router Link, Route Params

In `app.component.html`, we have a navigation drawer with different links setup. Clicking on the link, should redirect to page url.
It is not the case now, fix it.

The openTutorial function is also broken in `app.component.ts`, repair it.
The navigation to the session details is also broken, follow the todo in `session-detail/session-detail.ts`.

## Auto skip for tutorial with Guard

When an user has already done the tutorial, we should redirect him directly to the home page and not ACTIVATE the page.
Let's implement the CheckTutorial. (`/providers/check-tutorial.service.ts`).
The `CheckTutorial` should check if the "ion_did_tutorial" key in the storage is set to true or false.
Setup the guard on `/tutorial` route in `app-routing.ts`.

**_ Happy Hacking!_**

### [Hackages Team](https://hackages.io)
