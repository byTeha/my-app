import React from 'react'
import cl from './MyModal.module.css'

function MyModal({children, visable, setVisable}) {
  const rootClasses = [cl.myModal]
  if(visable){

    rootClasses.push(cl.active);
    console.log(rootClasses)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={()=>setVisable(false)}>
        <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
         {children}
        </div>
    </div>
  )
}

export default MyModal