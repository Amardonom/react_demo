import React, { Component } from 'react'


// 具名插槽跟匿名插槽 （只是为了跟vue对比理解所以起名叫插槽）
function Dioag(props) {
  return (
    <div>
      <div>{props.children}</div>
      <div>{props.footer}</div>
    </div>
  )
    
}
function Footer () {
  return (
    <div>i m footer</div>
  )
}

// props.children是什么
function DioagDemo (props) {
  // 通过打印可以发现 children是一个数组 数组成员是虚拟dom
  console.log(props.children)
  return (
    <div>
      {props.children.filter(item => item.type === 'div')}
    </div>
  )
}

export default class Slot extends Component {
  render() {
    return (
      <div>
        <Dioag footer={Footer()}>
          <div>hello i m child1</div>
          <div>hello i m child2</div>
        </Dioag>
        <DioagDemo>
          <div>i m div tag</div>
          <p>i m p tag</p>
        </DioagDemo>
      </div>
    )
  }
}
