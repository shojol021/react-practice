import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counter() {
  const [count, setCCOunt] = useState(0);

  const increaseNumber = () => setCCOunt(count + 1)
  const decreaseNumber = () => setCCOunt(count - 1)
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Increase</button>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      {
        users.map(user => <div><h2>Name: {user.name}</h2><h4>Name: {user.email}</h4></div>)
      }
    </div>
  )
}

export default App;
