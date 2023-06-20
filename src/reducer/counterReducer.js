const initialState = 0

export default (state = initialState, { type }) => {
  switch (type) {

  case 'INC':
    return  state+1;

    case 'DEC':
        return  state-1;
    
        case 'RESET':

        return 0;

  default:
    return state
  }
}
