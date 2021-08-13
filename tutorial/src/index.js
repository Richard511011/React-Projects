import React from 'react'
import reactDom from 'react-dom'


//stateless functional component
//always return JSX
//always return single element div/section/aerticle/or fragment
//Camel case for html attributes
//className instead of class

//Importing CSS

import './index.css'
import {books} from './books.js'
import Book from './Book.js'

function BookList() {
  return (
   <section className='booklist'>
     {books.map((element)=>{
       return (<Book id= {element.id}book={element}></Book>)
     })}

   </section>
  )
}

 






// const Title = () =><h1>The Very Hungry Caterpillar</h1>
// const Author = ()=><h4 style={{color:''}}>Eric Carle</h4 >
// const Greeting= ()=>{
//   return React.createElement('h1',{},'helloWorld')
// }
reactDom.render(<BookList />, document.getElementById('root'))