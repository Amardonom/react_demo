import React, { Component } from 'react'
const FormContext = React.createContext()

const withStore = Comp => props => {
  return (
    <FormContext.Consumer>
      {store => (<Comp {...props} store = {store}></Comp>)}
    </FormContext.Consumer>
  )
}

const Rtest = withStore(Test)
function Test(p){
  return(
    <div>{JSON.stringify(p.store)}</div>
  )
}

const withProvider = Comp => props => {
  return <FormContext.Provider>
    <Comp {...props}></Comp>
  </FormContext.Provider>
}

@withProvider
class Context extends Component {
  render() {
    return (
      <FormContext.Provider value={{name: 'yyf13'}}>
        <Rtest></Rtest>
      </FormContext.Provider>
    )
  }
}

export default Context
