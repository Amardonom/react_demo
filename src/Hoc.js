import React, { Component } from 'react'
// 当需要对一个组件加工之后返回新组件 则需要高阶组件


const Withbtn = Comp => props => {
  return <div>
    <button>click me</button>
    <Comp {...props}></Comp>
  </div>
}

@Withbtn
class Show extends Component {
  constructor(p){
    super(p)
  }
  render() {
    return (
      <div>
        <div className='show'>{this.props.name}</div>
      </div>
    )
  }
}
export default class Hoc extends Component {
  render() {
    return (
      <div>
        <Show name='xiix'></Show>
      </div>
    )
  }
}
