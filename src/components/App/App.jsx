import {useState, useEffect} from 'react';
import List from '../List';
import Search from '../Search/Search';
import Async from '../Async/Async';
import './App.css';

const data = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Angular',
    'NodeJS'
]

const App = () => {
    const [search, setSearch] = useState('')
    const [items, setItems] = useState(data)

    useEffect(() => {
        setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
    }, [search])

  return (
    <div className="App">
      <div className="App-header">
          <Search value={search} onChange={(e) => setSearch(e.target.value)}>
              Find course:
          </Search>
         <List items={items}/>
      </div>
      <Async/>
    </div>
  );
}

export default App;
