import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('didMount')

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {monsters: users}
      }))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
      console.log('render')
      const {monsters, searchField} = this.state
      const {onSearchChange} = this


      const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField)
      })

      return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search Monsters'
          //best practice is to move anonymous functions out of onChange attribute and move to its own method/function
              //WHY? because now the function won't run every time the app rerenders
          onChange={onSearchChange} 
      />
        {filteredMonsters.map((monster, i) => {
          return <h1 key={i}>{monster.name}</h1>
        })}
      </div>
    );
  }
}

export default App;
