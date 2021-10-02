import './App.css';
import { Cobbing } from './Cobbing';
// //import 'Sortable.js' // Doesn't work...
// // Trying to model on https://sortablejs.github.io/Sortable/
// // But lots of other stuff going on here...
// // import Sortable from 'sortablejs';

// // var example1 = document.getElementById('example1');
// // var example1 = <Cobbing/>

// // Example 1 - Simple list
// // new Sortable(example1, {
// //     animation: 150,
// //     ghostClass: 'blue-background-class'
// // });

function App() {
  return (
    <div className="App">
      <Cobbing/>
    </div>
  );
}

export default App;
