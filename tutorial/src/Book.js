import React from 'react'

export const Book = (passedArgument) => {
    const clickHandler = ()=>{
    alert('HelloWorld')
  }
  const clickHandlerHarder=(author)=>{
    alert(author)
  }
  const {img,title,author}=passedArgument.book;

    return (
    
    <article className='book' >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4 >
      <button type='button' onClick={clickHandler}>Button!!!</button>
      <button type = 'button' onClick={()=>clickHandlerHarder(author)}>A HARDER BUTTON!!!</button>
    </article>

  )

    
}
export default Book 