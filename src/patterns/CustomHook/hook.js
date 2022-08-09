import React, { useState } from 'react'

function useToggler() { 
  const [on,setOn] = useState(false);
  const handleToggler = () =>{
    setOn(prev => !prev);
  }
  return {on,handleToggler};
}

export default useToggler;