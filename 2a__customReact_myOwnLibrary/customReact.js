
function customRender (reactElement, container){
//                                                               // element created in the mainContainer (as we do in html
//     const domElement = document.createElement(reactElement.type)  // to create div or span tag to add anything)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)
//     container.appendChild(domElement)

    // ***************************************************************************************
    // ******** **** upper code optimise and readiblity increase *************
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    
    for(const iter in reactElement.props){                      // when iterator reaches out to key "children" skip loop for children 
        if(iter === 'children')   continue;                                   // and if again propsElement it execute
        domElement.setAttribute(iter, reactElement.props[iter]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'http://google.com',
        target : '_blank'
    },
    children : 'Link to google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer);      // it injects the reactElement to root through mainContainer