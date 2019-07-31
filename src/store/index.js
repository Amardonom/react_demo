import { createStore, combineReducers} from 'redux'
import user from './user.redux'


export default createStore(combineReducers(
  { user}
))