import React from 'react'
import { usePages } from '../../../hooks/usePages';

function Pagination({totalPages, page, changePage}) {
    let pagesArray = usePages(totalPages); 
  return (
    <div className='page__wrapper'>{pagesArray.map(p => 
        <span 
         onClick={()=>changePage(p)}
         key={p}
         className={page === p ? 'page page__current' : 'page'}
       > 
              {p}
        </span>
        )}</div>
        
  )
}

export default Pagination