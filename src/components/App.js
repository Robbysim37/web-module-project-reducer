import React, {useReducer} from 'react';
import './App.css';
import reducer, {initialState} from '../reducers/index';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { addOne,applyNumber,changeOperation,clearMemory,clearTotal,setMemory } from '../actions';



function App() {

  const [state,dispatch] = useReducer(reducer,initialState)

  const operationClickHanlder = (e) => {
    dispatch(changeOperation(e.target.value))
  }
  
  const buttonClickHander = (e) => {
    if(e.target.value === "MR"){
      dispatch(applyNumber(state.memory))
    }
    else{
      dispatch(applyNumber(parseInt(e.target.value)))
    }
  }

  const clearClickHandler = (e) => {
    if(e.target.value === "MC"){
      dispatch(clearMemory())
    }
    else{
      dispatch(clearTotal())
    }
  }

  const setMemoryClickHandler = (e) => {
    dispatch(setMemory(state.total))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={setMemoryClickHandler} value={"M+"}/>
              <CalcButton onClick={buttonClickHander} value={"MR"}/>
              <CalcButton onClick={clearClickHandler} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={buttonClickHander} value={1}/>
              <CalcButton onClick={buttonClickHander} value={2}/>
              <CalcButton onClick={buttonClickHander} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={buttonClickHander} value={4}/>
              <CalcButton onClick={buttonClickHander} value={5}/>
              <CalcButton onClick={buttonClickHander} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={buttonClickHander} value={7}/>
              <CalcButton onClick={buttonClickHander} value={8}/>
              <CalcButton onClick={buttonClickHander} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={operationClickHanlder} value={"+"}/>
              <CalcButton onClick={operationClickHanlder} value={"*"}/>
              <CalcButton onClick={operationClickHanlder} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearClickHandler} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
