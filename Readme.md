#### NPM => Node Package Manager
#### NPX => Node package Executor

--
# React Foundation

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

-React not change variables in UI using conditional statement.
- We have to update th UI using `useState` hook.

---

# Virtual DOM

- `createRoot()` Method => Create a DOM like structure just like browser DOM => Compare main DOM and its own DOM => and update only those things that are updated in UI  => It is "virtual DOM"

### - Reconciliation is the algorithm behind what is popularly understood as "virtual DOM"

- In virtual DOM we can track complete DOM and values that are changed we can remove them from DOM and update DOM with new values.

- browser DOM => remove complete DOM if any changes in UI and repaint complete DOM => Which is called "page reloading"

"Kya aesa ho sakta hae k hum immediately update na krein UI ko aur kuch algorithm laga k optimize way me update krein"

React Team =>"No need to update each UI instantaneously"

### ReactFiber

"React use Fiber algo(core algorithm) behind to update virtual DOM"

- The goal of React Fiber is to increase its suitability for areas like animation,layout, and gestures.

- Its headline feature is incremental rendering: the ability to split rendering intp chunks and spread it out over multiple frames.

### Features

- Ability to pause
- abort
- reuse work as new updates come in
- ability to assign priority to different types of updates (hydration)
- Hydration =>after completion of web layout (HTML rendering) Injection of javascript to make everything interactive is called HYDRATION.

- Hydration process make better by fiber algorithm.

Jab pehli baar page load hota hai, buttons aur images dikhte hain (HTML aa gaya), lekin kuch click nahi hota kyunki JavaScript ab tak load nahi hui hoti. Phir jab JavaScript load ho ke React ko HTML ke saath connect karti hai aur sab interactive ho jata hai, us process ko hydration bolte hain. aur ye fibre algorithm k through kaafi achi hoti hai

[Document Link](https://github.com/acdlite/react-fiber-architecture)

![React Fiber Document link](<Screenshot 2025-01-25 204641.png>)

## Reconciliation

- ### Reconciliation (Recursive Algorithm)
The algorithm React uses to differentiate one tree with another tree(VirtualDOM and webDOM) 

- the process to determine which part to be changed is called reconciliation.
(Browser tree and React Tree that is created by createRoot Method)

- git also work in differenciation algo(differentiate od files and new files)

- ### Update 
A change in the data used to render a React app. Usually the result of 'setState'. Eventually result in a re render.

"React Api k andar kbhi bhhi developer ye nhi sochta k aik state sey mein dusri state mein kesey jaonga ya variables kesey update hongey ye sara kaam React k Algorithms kr rhy hotey hein"


### Key Points:

- 1) Different component types are assumes to generate substantially different trees. React will not attempt to differentiate them, but rather replace the old tree completely.

(kuch components aesey hotey hein jinko compare krney ka koe sense hi nhi hae wo hamein pta hae completely change hongey tw unko compare mat kro directly replace krdo)

#### - Diffing of lists is performed using keys. Keys should be "stable,predictable, and stable"


## Fiber

Fiber is a ground-up rewrite of the reconciler

- The reconciler is like React's brain. It figures out what has changed in the app and tells the browser what needs to be updated.

- Fiber is a new version of this brain. React made it from scratch (instead of improving the old one) to make apps faster, smoother, and better for modern needs.

- In Simple terms: Fiber is a new and improved version of React’s system for updating the screen, built from scratch to make apps faster, smoother, and better at handling complex tasks.

### Key Points 
- pause work and come back to it later
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed

---


# Lecture 7

- props 
- tailwind configuration

# 06 project

API: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`