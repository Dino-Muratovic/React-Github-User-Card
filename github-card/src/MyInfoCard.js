import React from 'react';
import './App.css';
import styled from 'styled-components';


const MyInfoContainer = styled.div`
  background-color:salmon;
  width:50%;
  margin:0 auto;
`
const MyInfoImage = styled.img`
 width:100%;
 background-color:yellow;
`


 const MyInfoCard = props => {  
        // console.log(`props inside MyInfoCard`, props)
        return (
        <MyInfoContainer>
            <p>{props.myInfo.login}</p>
            <MyInfoImage src={props.myInfo.avatar_url} alt='Github profile pic'></MyInfoImage>
            <p>{props.myInfo.location}</p>
            <p>{props.myInfo.bio}</p>
        </MyInfoContainer>
      )
    }  
  
  
  export default MyInfoCard;