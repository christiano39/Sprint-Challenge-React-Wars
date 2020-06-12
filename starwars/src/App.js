import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character'
import PageSelector from './components/PageSelector'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersData, setCharactersData] = useState(null)
  const [page, setPage] = useState(1)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people/?page=${page}`)
      .then(res => {
        setCharactersData(res.data)
      })
      .catch(err => {
        setCharactersData(null)
      })
  }, [ page ])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        charactersData ? charactersData.results.map(char => {
          return <Character key={char.name} name={char.name} height={char.height} mass={char.mass} gender={char.gender} homeWorld={char.homeworld}/>
        })
        : <h2>Whoops! Looks like there's no data to display :(</h2>
      }
      {charactersData ? <PageSelector setPage={setPage} page={page} charactersData={charactersData} /> : ''}
    </div>
  );
}

export default App;
