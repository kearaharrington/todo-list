import MyList from './MyList';
import './App.css';

function App() {
  const toDos = ['buy ice cream', 'wash the floors', 'fold the laundry', 'other things']
  
  return (
    <div className="App">
      <MyList items={toDos}/>
    </div>
  );
}

export default App;
