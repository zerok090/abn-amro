## Getting Started

(To run this project you need Node to be installed on your device!)

First, run npm install in root directory to make sure we have all dependencies

Then to run the development server: npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content

This is PWA for searching dishes. The homepage consists of a randomly picked dish. Throughout the whole application one can use the searchbar to search for any dish. When doing so the application routes to a result page where all found dishes is presented. Clicking on the details button for a dish, one is routed to the dish detail page.

## Unit tests

For now the only fully unit tested component is the Search

## Folder structure

Components: 
- common: (dumb)components that are used without any context that display simple props 
- core: (smart)components that are used with context to our application, using common components to render state and api calls 
- ui: specific components that target the layout of our site

(All components have a dedicated folder to store all relevant files for that component -> tests, styling, storybook, etc.)

Hooks: folder for all reusable functions accross pages/components

Pages: folder for routing and configuring pages, homepage is by convention the file index.tsx, all other pages have their dedicated folders

Styles: All files related to global styling should be there

Types: All files related to declaring types used through the application should be there

## Included libraries

This project uses included libraries: 
- Jest and react-testing library for testing 
- svgr/webpack for transforming svg files into react components (mainly used for icons)
- sass for styling

## Frameworks

This project uses the framework Next.js. The main reasons for that are:

- Automatic code splitting: Next.js automatically splits your code into smaller chunks, which can improve the loading speed of your application and reduce the initial download size.
- API routes: Next.js provides an easy way to create API routes, which can be used to handle backend logic and communicate with external services.
- Extensibility: Next.js is highly extensible and provides a robust ecosystem of plugins and integrations that can help you customize your application and add new features quickly.

## Application state

Application state as of now is mainly handled inside of the given hooks imported by stateful components, with some local state that is only used by parent -> child component scenario's
