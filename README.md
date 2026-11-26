SPA-single page application,
    only one html page sent as a response from server
MPA-will reload everytime
react-javascript library used to build UI,
      uses component based architecture which can be reuseable
  DOM-document object model
      (tree like representation of html page)
  VDOM-virtual DOM
       virtual representation of real DOM in memory
JSX-javascript xhtml
    contains javascript function which will return html
    index.html->main.jsx through id="root"->app.jsx
    two types of component:
        1.class component
        2.functional component-uses.jsx
  reconciliation-compare with old DOM change only necessary part
props-stands for properties
      props used to pass data from one component to another component
      Eg:parent component to child
      can not modify props in child component
XSS->cross site scripting
type:
   1.stored xss
   2.reflected xss
   3.DOM xss
react have auto-escaping which will prevent xss attacks
state:
   why we need state?
           without state even when value get updated UI won't change still shows the intial values by storing the value in state whenever value updated automatically rerender the page
spread operator(...)
     arr1=[1,2,3],arr2=[4,5,6],arr3=[1,2,3,4,5,6,7,8,9,10,11]
obj ={name:"user"
      age:33}
obj2={...obj,city="cbe"}
obj3={...obj2,age:40}
form using state
[name,set name]
[email,set mail]
[password,set password]
instead of creating separate state for variable
create object with proper string

export default

zod validation:
    validate the input field correctly
       eg:email without @gmail.com
          password lessthan & character
          empty name field
zod is a JS library which is used to validate user input using schemas
lifecycle of react:
    mounting:initial renser/elements added to DOM
    updating:UI changes due to state or pop update
    unmounting:removing from DOM