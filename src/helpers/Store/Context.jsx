import React, { useState } from 'react';

const initialState={
  cep: '',
  number: '',
  moradores: '',
  setCep: (c) => {},
  setNumber: (n) => {},
  setMoradores: (m) => {}
}
  
 export const appContext= React.createContext(initialState)
  
 const Context = (props)=>{
  
 const [state, setState] = useState(initialState)
  
  function updateState(key,value){
  setState({
  ...state,
  [key]:value
  })
 }
  
  return(
  <appContext.Provider value={{
    cep: state.cep,
    number: state.number,
    moradores: state.moradores,
    setCep:(c)=>{updateState('cep', c)},
    setNumber:(n)=>{updateState('number', n)},
    setMoradores:(m)=>{updateState('moradores', m)},
  }}
  >
  {props.children}
  </appContext.Provider>
  )
 }

export default Context;