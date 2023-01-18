import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [ monsters, setMonsters ] = useState([])
  const [ searchField, setSearchField ] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState([])

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox 
        className='search-box'
        placeholder='search monsters' 
        onChange={onSearchChange} 
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(() => {
//         return {monsters: users}
//       }))
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLowerCase()
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//       const {monsters, searchField} = this.state
//       const {onSearchChange} = this

//       const filteredMonsters = monsters.filter((monster) => {
//         return monster.name.toLowerCase().includes(searchField)
//       })

//       return (
//          Same as above!            
//     );
//   }
// }

export default App;
