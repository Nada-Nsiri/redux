import { useSelector , useDispatch} from "react-redux";


function Counter() {
    const dispatch=useDispatch();
    const count=useSelector(state=>state.count);
    console.log("compteur=",{count});
    return (
      <div className="App">
       
<h1>{count}</h1>
<button onClick ={(()=>dispatch({type:"INCREMENT"}))} >+</button>
<button onClick ={(()=>dispatch({type:"DECREMENT"}))} >-</button>

      </div>
    );
  }
  
  export default Counter;