import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar'
import CharactersUserForm from '../components/CharactersUserForm';
import CharactersDisplay from '../components/CharacterDisplay'
import './Characters.css'
import ls from './pics/ls.png';


class Characters extends Component {
  state = { characters: []}

  componentDidMount(){
    var elem = document.getElementById('charactersPage');
  elem.style.color = 'red'
  }

  getCharacter = (e) => {
    e.preventDefault();
    const character = e.target.elements.character.value;
    if(character) {
      axios.get(`https://swapi.co/api/people/?search=${character}`)
      .then(res => {
        this.setState({ characters: [...res.data.results] })
        // let characters = [...res.data.results]
        // for ( let k = 0; k < res.data.results.length; k++) {
        //   let planetURL = res.data.results[k].homeworld.toString()
        //   axios.get(planetURL).then(
        //       res => {
        //         characters[k].homeworld = res.data.name 
        //       }
        //   ).then(
        //     this.setState({ characters: characters })
        //   )
        // }
        // console.log(characters)
      })
      .catch(err => {
        console.log(err)
      })
    }else{
      return 
    }
  }

  render(){ 
    return(
      <>
        <Navbar/>
        <div id="lsdiv">
        <h1>Star Wars</h1>
        <img alt="lightsabers" id="ls" src={ls}></img>
        <h1>Characters</h1>
        </div>
       
        <CharactersUserForm getCharacter={this.getCharacter}/>
        <CharactersDisplay characters={this.state.characters} />
      </>
    )
  }
}

export default Characters    
