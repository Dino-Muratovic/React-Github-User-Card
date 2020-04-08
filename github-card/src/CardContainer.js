import React from 'react';
import './App.css';
import UserCard from './UserCard';
import styled from 'styled-components';


const FollowersContainer = styled.div`
  background-color:salmon;
  width:80%;
  margin:0 auto;
`






const CardContainer = props =>{
  // console.log(`props in CardContainer`, props);
    return (
      <>
      
        <FollowersContainer>
          {props.followersInfo.map((person)=>{
            // console.log(`this is person`, person)
            return (
              <UserCard key={person.id} person={person} />
            )
          })}
        </FollowersContainer> 
        
      </>
    )
}


export default CardContainer;
