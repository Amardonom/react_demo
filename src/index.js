import React from 'react';
import ReactDOM from 'react-dom';
import UseRedux from './Redux'
// import Cart from './Cart'
// import Slot from './Slot'
// import Hoc from './Hoc'
// import Context from './Context'
import store from './store';


// react-redux
import {Provider} from 'react-redux'
ReactDOM.render(<Provider store={store}>
    <UseRedux />
  </Provider>, document.getElementById('root'));



// redux
// store.subscribe(render)

// render()
// function render() {
//   ReactDOM.render(<div>
//     {/* <Cart/>
//   <Slot/>
//   <Hoc/>
//   <Context></Context> */}
//     <UseRedux />
//   </div>, document.getElementById('root'));

// }


