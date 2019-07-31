import React from 'react'

function Car(props) {
  return (
    <div>
      <table>
        <thead> 
          <tr>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>商品数量</th>
            <th>总计</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item,index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                {item.count}
                <button onClick={()=>props.addCount(item)}>+</button>
                <button onClick={()=>props.delCount(item)} disabled={item.count === 1}>-</button>
              </td>
              <td>{item.price * item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default class Cart extends React.Component {
  constructor(p) {
    super(p)
    this.state = {
      goods: [
        { name: 'aj1', price: 2999 }
      ],
      goodname: '',
      data: []
    }
  }
  addgood() {
    let data = [...this.state.goods, { name: this.state.goodname, price: 3999 }]
    this.setState({
      goods: data
    })
  }
  addcar(item) {
    let data = [...this.state.data]
    let idx = data.findIndex(element => element.name === item.name)
    let info = data[idx]
    if (info) {
      data[idx].count = data[idx].count + 1
    }else{
      data = [...data, { ...item, count: 1}]
    }
    this.setState({
      data: data
    })
  }
  getGoodinfo(e) {
    this.setState({
      goodname: e.target.value
    })
  }
  addCount(item){
    let data = [...this.state.data]
    let idx = data.findIndex(element => element.name === item.name)
    data[idx].count += 1
    this.setState({
      data: data
    })
  }
  delCount(item){
    let data = [...this.state.data]
    let idx = data.findIndex(element => element.name === item.name)
    data[idx].count -= 1
    this.setState({
      data: data
    })
  }
  render() {
    return (
      <div>
        <input goodname={this.state.goodname} onChange={(e) => { this.getGoodinfo(e) }}></input>
        <button onClick={() => this.addgood()}>添加商品</button>
        <ul>
          {this.state.goods.map((item, index) => (
            <li key={index}>
              {item.name}<button onClick={
                () => { this.addcar(item) }
              }>add</button>
            </li>
          ))}
        </ul>
        <Car delCount={(info)=>this.delCount(info)} addCount={(info)=>this.addCount(info)} data={this.state.data}/>
      </div>
    )
  }
}

