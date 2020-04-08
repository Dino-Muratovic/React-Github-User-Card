import React from 'react';
import './App.css';



class UserCard extends React.Component {
    constructor(){
      super();
      this.state = {
        users: []
      };
    }
  
   render(){
      return (
        <div>This is Followers User Card</div>
      )
    }  
  }
  
  export default UserCard;