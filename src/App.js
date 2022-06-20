
import './App.css';
// import Ball from './components/simpleReact/Ball';
// import BatuseReducer from './components/simpleReact/BatuseReducer';
import Ball from './components/Ball';
import {Provider} from "react-redux"
import store from "./store"

function App() {
  return (
    <>
      {/* <Ball/>
      <BatuseReducer/> */}

      <Provider store={store}>
        <Ball/>
      </Provider>
    </>
    
  );
}

export default App;
