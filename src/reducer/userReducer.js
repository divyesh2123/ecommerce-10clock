const initialState = {
    data: []
}

export default (state =initialState, { type, payload }) => {
  switch (type) {

  case 'USER_REQ':
    return { ...state, data: payload }

  default:
    return state
  }
}
