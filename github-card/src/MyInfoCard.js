import React from 'react';
import './App.css';



 const MyInfoCard = props => {  
     console.log(props)
        return (
        <div>This is My Info Card
            <p>{props.myInfo.login}</p>
            <img src={props.myInfo.avatar_url} alt='Github profile pic'></img>
            <p>{props.myInfo.location}</p>
            <p>{props.myInfo.bio}</p>
        </div>
      )
    }
  
  
  
  export default MyInfoCard;