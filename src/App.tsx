import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people : {
      name : string,
      url : string,
      age : number,
      note? : string
  }[]
}
  

function App() {

  const [people, setPeople] = useState<IState["people"]>([{
    name: "Lebron James",
    url : "https://upload.wikimedia.org/wikipedia/commons/2/25/Lebron_wizards_2017_%28cropped%29.jpg",
    age : 32,
    note : "Allergic to staying on the same team",
  }]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
