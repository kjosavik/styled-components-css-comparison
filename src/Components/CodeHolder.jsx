import React from 'react';
import styled from 'styled-components';
import Gist from 'react-gist'

export default ( props => {
  //const Gist = require('react-gist')

  return(
    <Main>
      <Gist id={props.id} />
    </Main>
  )
})

const Main = styled.div`
  margin-top: ${props => props.theme.size.m};
  
`;