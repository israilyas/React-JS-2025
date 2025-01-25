function customRender(reactElement,root){
    const domElem = document.createElement(reactElement.type);

    domElem.innerHTML = reactElement.children;
    // domElem.setAttribute('href',reactElement.props.href)
    // domElem.setAttribute('target',reactElement.props.target)

    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElem.setAttribute(prop,reactElement.props[prop])
    }

    root.appendChild(domElem)
}

const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:"Click me to visit google"
}

const root = document.getElementById('root');

customRender(reactElement,root);
