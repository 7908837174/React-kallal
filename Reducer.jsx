import { use, useReducer } from "react";

const initialState = {const: 0};

const reducer = (state , action) =>{
    switch(action.type) {
        case 'increment':
            return {...state, count : state.count + 1};
             case "decrement":
                return{
                    ...state, count: state.count-1
                };

                case "reset":
                    return{
                        ...state, count :0
                    }; 

            default:
                break;
    }
}

const App = () =>{
    const [state , dispatch] = useReducer(reducer , initialState );

    return <div>
        <button onClick={() => dispatch({type:"increment"})}>+</button>
        <button onClick={() => dispatch({type:"dricement"})}>-</button>
        <button onClick={() => dispatch({type:"reset"})}>Resate</button>
         <h1> Count:{state.count}</h1> 
    </div>
}

export default App ; 