import React, { Component } from 'react'
import store from './store'
import { connect } from 'react-redux'

// 这里是一个木偶组件 提供了一个用户列表 然后用户可以添加用户
class Userlist extends Component {
  render() {
    return (
      <div>
        <input onChange={(e)=>this.props.getinfo(e, 'name')} placeholder='用户名' value={this.props.addinfo.name}></input>
        <input onChange={(e)=>this.props.getinfo(e, 'pwd')} placeholder='密码' value={this.props.addinfo.pwd}></input>
        <input onChange={(e)=>this.props.getinfo(e, 'age')} placeholder='年龄' value={this.props.addinfo.age}></input>
        <button onClick={this.props.addCli}>添加</button>
        <table>
          <thead>
            <tr>
              <th>用户名</th>
              <th>密码</th>
              <th>年龄</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.pwd}</td>
                  <td>{item.age}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

// redux 获取跟更新数据demo(触发dispatch后需要重新渲染 在index.js里)
class UseRedux extends Component {
  constructor(p) {
    super(p)
    this.state = {
      addinfo: {
        name: '',
        pwd: '',
        age: ''
      }
    }
  }
  getinfo (e, type) {
    let value = e.target.value
    let info = this.state.addinfo
    info[type] = value
    this.setState({
      addinfo: info
    },()=>{
      console.log(this.state.addinfo)
    })

  }
  addCli() {
    store.dispatch({type: 'add', payload: this.state.addinfo})
  }
  render() {
    return (
      <div>
        <Userlist addCli={()=>this.addCli()} getinfo={(e, type)=>this.getinfo(e, type)} addinfo={this.state.addinfo} data={store.getState().user}></Userlist>
      </div>
    )
  }
}

// react-redux获取跟更新数据demo
const mapstate = state => state
const mapaction = {
  add: (payload) => ({type:'add', payload: payload})
}
@connect(mapstate, mapaction)
class UseRcRedux extends Component {
  constructor(p) {
    super(p)
    this.state = {
      addinfo: {
        name: '',
        pwd: '',
        age: ''
      }
    }
  }
  getinfo (e, type) {
    let value = e.target.value
    let info = this.state.addinfo
    info[type] = value
    this.setState({
      addinfo: info
    },()=>{
      console.log(this.state.addinfo)
    })

  }
  addCli() {
    this.props.add(this.state.addinfo)
  }
  render() {
    return (
      <div>
        <Userlist addCli={()=>this.addCli()} getinfo={(e, type)=>this.getinfo(e, type)} addinfo={this.state.addinfo} data={this.props.user}></Userlist>   
      </div>
    )
  }
}



export default class Redux extends Component {
  render() {
    return (
      <div>
        <UseRedux></UseRedux>
        <UseRcRedux></UseRcRedux>
      </div>
    )
  }
}
