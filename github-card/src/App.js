import React from 'react';
import './App.css';
import axios from 'axios';
import CardContainer from './CardContainer';
import MyInfoCard from './MyInfoCard';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      followersInfo: [],
      myInfo: []
    };
  }

  componentDidMount(){    
    this.grabMyData();
    this.grabFollowers();       
  }

  grabMyData = () => {
    //Fetch the data of the github
    axios.get('https://api.github.com/users/Dino-Muratovic')
    //promises - console.log what you get
    .then(response => {
      console.log(`response`, response.data)
    // set the state to be what you drilled to  
      this.setState({
        myInfo: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })    
  }

  grabFollowers = () => {
     //Fetch the data of the github
     axios.get('https://api.github.com/users/Dino-Muratovic/followers')
     //promises - console.log what you get
     .then(response => {
       console.log(`this is response inside grabFollowers`, response.data)
     // set the state to be what you drilled to  
       this.setState({
        followersInfo: response.data
       })
     })
     .catch(error => {
       console.log(error)
     })    

  }

 


  render(){
    return (
      <>      
      <MyInfoCard myInfo={this.state.myInfo} key={this.state.myInfo.id}/>
      <CardContainer followersInfo={this.state.followersInfo}/>
      </>
    )
  }  
}

export default App;
