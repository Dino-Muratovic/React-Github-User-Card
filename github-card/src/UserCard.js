import React from 'react';
import './App.css';
import styled from 'styled-components';

const FollowersCardContainer = styled.div`
    background-color:gray;
    width:40%;
    margin:0 auto;
    margin-top:5%;
`

const FollowersImage = styled.img`
  width:100%;
`

const PersonLogin = styled.p`
    color:white;
    margin:0 auto;
`



const UserCard = props => {  
      console.log(`this is props inside UserCard`, props)
        return (
        <FollowersCardContainer>
            
            <PersonLogin>{props.person.login}</PersonLogin>
            <FollowersImage src={props.person.avatar_url}></FollowersImage>   
            <p>{props.person.url.company}</p>        
        </FollowersCardContainer>
      )
    }  
  
  
  export default UserCard;