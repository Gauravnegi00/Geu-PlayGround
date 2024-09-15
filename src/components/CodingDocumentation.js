import React from 'react'

function CodingDocumentation() {
    const language = localStorage.getItem('preferredLanguage');
  return (
    <div>
      {
        language ==='Java' ?(
            <div>Welcome to java</div>
            
        ):(
             <div>
                welcome to cpp
             </div>
        )
    }
    </div>
  )
}

export default CodingDocumentation
