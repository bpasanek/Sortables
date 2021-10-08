import './App.css';
import { Cobbing } from './Cobbing';
import { Naylor } from './Naylor';
import { Carpenter } from './Carpenter';

function App() {
  return (
    <div className="App">
      <div className="tryptich">
        <Cobbing/>
        <Naylor/>
        <Carpenter/>
      </div>
    </div>
  );
}

export default App;
