
function customRender(reactElement,container){
 
  /*   This Also  Works but thoda lengthy hai so thoda thik karenge 
  const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement) 
    */

//loop aproach bcz agr bht sare attribute set krne hai th fr yh use krenge
const domElement=document.createElement(reactElement.type);
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
     if(prop==='children') continue;
     domElement.setAttribute(prop,reactElement.props[prop]);
}
container.appendChild(domElement)
}


const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },
    children:'Click Me to Open Google.com'

}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer);