const userinfo = [
  {
    name: 'silence',
    pwd: '123123',
    age: 26
  }
]


export default function userStore(state = userinfo, {type, payload}) {
  console.log(type, payload)
  switch (type) {
    case 'add':
      return [...state, payload];
    default:
      return state
  }
}