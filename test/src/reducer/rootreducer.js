
const initialState = {
    count :0 
}

function rootreducer  (state = initialState, action)  {
    console.log('reducer', state, action);
   
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1}
       
      case 'DECREMENT':
        return {
          count: state.count - 1}
        
      
      default:
        return state;
    }
   }
   export default rootreducer;