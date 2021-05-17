import './App.css';
import Counter from './components/Counter';
import { CounterHook } from './components/CounterHook';
import { FormHook } from './components/FormHook';

function App() {
  return (
    <div className="App">
     {/* <Counter />  */}
     {/* <CounterHook /> */}
     <FormHook />
    </div>
  );
}

export default App;
