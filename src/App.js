import { useReducer, useState } from "react";
import { Alert } from "./Alert";
import { reducer } from "./reducer";


const initialState = {
  list: [],
  isAlert : false,
  alertText: ''
}

function App() {
  const [item, setItem] = useState('');
  const [state, dispatch] = useReducer(reducer,initialState);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(state.list.some((e) => e.item === item)){
      dispatch({
        type : 'ALREADY_EXIST',
        payload : item
      })
    }
    else if(item){
      const newItem = {id: new Date().getTime().toString(), item}
      dispatch({
        type: 'ADD_ITEM',
        payload: newItem
      })
      setItem('');
    }else{
      dispatch({
        type: 'NOTHING_TO_ADD',
      })
    }
  }

  const hideAlert = () => {
    dispatch({
      type: 'HIDE_ALERT'
    })
  }

  const removeItem = (arg) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: arg
    })
  }
  
  return (
    <main>
      <header>
        <h1> 
          SHOPPING LIST
        </h1>
      </header>

      <div className="alertBox">
        {state.isAlert && <Alert  hideAlert={hideAlert} alertText={state.alertText}/>}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" value={item} onChange={(e)=> setItem(e.target.value)} />
          <button className="addBtn">Add</button>
        </div>
      </form>

      {
        state.list.map((el)=>{
          return <div key={el.id} className="item-container">
            <h3>{el.item}</h3>
            <button onClick={()=> removeItem(el.id)}  className="removeBtn">Remove</button>
          </div>
        })
      }

    </main>
  );
}

export default App;
