import React from 'react';
import './App.css';
import UserCard from './UserCard';




class CardContainer extends React.Component {  
  constructor(props){    
    super(props);  
    console.log(`this is props inside Card Container`, props)   
  
  }
  
  

  

 render(){
    return (
      <>
      <div>This is Card container</div>
      <UserCard />
      {console.log(`-->`, this.props.followersInfo)}
      </>
    )
  }  
}

export default CardContainer;
