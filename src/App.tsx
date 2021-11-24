import React, {useState} from 'react';
import './App.css';
import AddToList from './components/addtolist';
import List from './components/list'

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: "M S Dhoni",
      age: 40,
      url: "https://hwnews.in/wp-content/uploads/2019/04/MS-Dhoni.jpg",
      note: "Retired form BCCI."
    },
    {
      name: "M S Dhoni",
      age: 40,
      url: "https://hwnews.in/wp-content/uploads/2019/04/MS-Dhoni.jpg",
      note: "Retired form BCCI."
    }
  ]);
  return (
    <div className="App">
      <h1>People invited for party.</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
