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

- createRoot Method => Create a DOM like structure just like browser DOM => Compare main DOM and its own DOM => and update only those things that are updated in UI  => It is virtual DOM

- browser DOM => remove complete DOM if any changes in UI and repaint complete DOM => Which is called page reloading

### ReactFiber

- The goal of React Fiber is to increase its suitability for areas like animation,layout, and gestures.
- Its headline feature is incremental rendering.

### Features

- Ability to pause
- abort
- reuse
- ability to assign priority to different types of updates (hydration)
- Hydration => Injection of javascript

Jab pehli baar page load hota hai, buttons aur images dikhte hain (HTML aa gaya), lekin kuch click nahi hota kyunki JavaScript ab tak load nahi hui hoti. Phir jab JavaScript load ho ke React ko HTML ke saath connect karti hai aur sab interactive ho jata hai, us process ko hydration bolte hain. aur ye fibre algorithm k through kaafi aachi hoti hai


![React Fiber Document link](<Screenshot 2025-01-25 204641.png>)

## Reconciliation

- ### Reconciliation
The algorithm React uses to differentiate one tree with another tree(VirtualDOM and webDOM) to determine which part to be changed.
(Browser tree and React Tree that is created by createRoot Method)

git also work in differenciation algo(differentiate od files and new files)

- ### Update 
A change n the data used to render a React app. Usually the result of 'setState'. Eventually result in a re render.