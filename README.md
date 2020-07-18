# Angular Bridge

This week we'll build a small Angular web app using a public dataset, Angular components, and third-party JavaScript and CSS libraries.

NOTE: you can also find similar walk-throughs and source code for building this app in [Vue](https://github.com/humphd/web422/tree/master/Code%20Examples/week4/bridge-vue) and [React](https://github.com/humphd/web422/tree/master/Code%20Examples/week5/bridge-react) for comparison.

The data we'll use is based on a freely available government dataset of [bridges in the province of Ontario](https://data.ontario.ca/dataset/bridge-conditions).  We'll
use this data under the [Open Government Licence - Ontario](https://www.ontario.ca/page/open-government-licence-ontario).

Our goal will be to create an app that lets us explore the data set visually, like the following:

![Screencast of final app](screenshots/app.gif)

## Walkthrough Videos

I've recorded a series of YouTube videos showing how to build the code, and explaining how everything works:

1. [Introduction](https://www.youtube.com/watch?v=ejux7e0YUZc&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=2)
1. [How to develop, build, run, and debug our code](https://www.youtube.com/watch?v=fc74WeFmMAk&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=3)
1. [Creating the app's overall layout and main components](https://www.youtube.com/watch?v=TH7DtQWr-n0&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=4)
1. [Working with the Bridge data, creating the Menu component](https://www.youtube.com/watch?v=rrw35Pm_0UQ&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=5)
1. [Creating the bridge info panel and map components](https://www.youtube.com/watch?v=a9A1ayG9gyk&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=6)
1. [Adding the map backend, connecting everything](https://www.youtube.com/watch?v=weLRdcaOHGM&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=7)

In the [routing](https://github.com/humphd/ng-bridge/tree/routing) branch we continue to evolve this app to use Angular Routing and an HTTP REST API via Angular's HttpClient.  The work continues in these videos:

1. [Switching to Angular Routing](https://www.youtube.com/watch?v=CFDw2_TrDo0&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=8)
1. [Creating an Express REST API for Bridge Data](https://www.youtube.com/watch?v=X5mFXt-uFw0&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=9)
1. [Reworking the Menu component to use Angular Routing](https://www.youtube.com/watch?v=toNdKUQWx1g&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=10)
1. [Adding a Service to use Angular's HttpClient to use our REST API](https://www.youtube.com/watch?v=2j09hjIh52k&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=11)

In the [forms](https://github.com/humphd/ng-bridge/tree/forms) branch we continue to evolve this app to use Angular Forms.  The work continues in these videos:

1. [Adding an Angular Template Driven Form](https://www.youtube.com/watch?v=haXVoC43k6U&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=13)
1. [Refactoring to a Reactive Form](https://www.youtube.com/watch?v=XPa0DKVHuVQ&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=14)
1. [Using Angular Material Form Components](https://www.youtube.com/watch?v=M_Fn5NGkDB0&list=PLJgO3yLojCBPEt6rnKsQnI2-8BdyU5z1K&index=15)

## Install Dependencies

To install the development and runtime dependencies, run the `npm install` command.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

