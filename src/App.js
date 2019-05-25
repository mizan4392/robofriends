import React from 'react';
import './App.css';
import Spinner from './components/Spinner/Spinner';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';


class App extends React.Component {

  state = {
    robots:[],
    searchFild:''
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({robots:users}));

   
  }

  onSearchChange = (event) =>{
    
    this.setState({searchFild:event.target.value})

  }

  render(){
    
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLocaleLowerCase().includes(this.state.searchFild.toLocaleLowerCase());
    })

    if(this.state.robots.length === 0){
      return <Spinner />
    }else{
      return (
        <div className='App'>
          <h1 className='header'>ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={filteredRobots}/>
        </div>
      );
    }

    
}

}

export default App;
