#### NPM => Node Package Manager
#### NPX => Node package Executor

--

### Run Project

## 01 Development Enviroment
npm run start

## Production Build
npm build
=> Build folder is created and this contain al static assets, css, javascript that we write in react.
=> In production this build folder serves to all users

---

### Create-react-app 

It is not a good method to create react app it is bulky and takes too much time and many unnecessary files are give

### Vite

-> Vite is a bundler

`npm create vite@latest`

Run 
`npm install` or `npm i`
to install all required packages for project

To Run project
`npm run dev`

### DevDepedencies

Only used during development it don't goes in production.

---

## 01Basics

---

## SPA => SINGLE PAGE APPLICATION

=> we call it SPA because have only 1 html(index.html) file and all the content loads on this.

- React core foundational library
- ReactDOM is a implementation of react on web
- ReactNative is implementation of react on Mobile apps
- There is DOM in website 
- React also create its own DOM which is called virtual DOM
=> it have method => createRoot(document.getElementById("root")) store this reference in variable root.
now render `root.render(JSX elements)`
- DOM is a tree structure (like in dsa)

---

## Component 

- Make component name in capitalize
- Also write file name in capitalize for best practice
- In vite files returning jsx elements shoud be named as `.jsx` extension.

### React Fragements
- used to group jsx elements `<></>`

---

## EValuated Expression.

- `<h1>Hello World {username}</h1>`

The curly braces in which i have passed username is a evaluated expression.
When we retrun a component we only use evaluated expression i.e final expression.
Like we dont use any loop/condition here like `username?username:null`

--- 

## Hooks

---

# Virtual DOM

- createRoot Method => Create a DOM like structure just like browser DOM => Compare main DOM and its own DOM => and update only those things that are updated in UI 

- browser DOM => remove complete DOM if any changes in UI and repaint complete DOM => Which is called page reloading

### ReactFiber

![alt text](<Screenshot 2025-01-25 204641.png>)
