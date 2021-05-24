import React from 'react'
import autopilot from '../video/autopilot.mp4'
import styled from 'styled-components'

function VideoSection() {
  return (
    <Container>
      <video autoPlay loop muted>
        <source src={autopilot} type='video/mp4' />
      </video>
      <TextItems>
        <h1>Sample text1</h1>
        <h1>Sample text1</h1>
        <h1>Sample text1</h1>
      </TextItems>
    </Container>
  )
}

export default VideoSection

const Container = styled.div`
position: relative;
width:100%;
height 50%;
  video {
    width: 100%;
    max-height: 100%;
    object-fit:cover;
    
    display: inline-block; 
  }
`
const TextItems = styled.div`
position: absolute;
  top: 50%;
  left: 25%;
  width:100%;
  height:100%;
  transform: translate(-50%, -50%);
  h1{
    display: flex;
    flex:1;
    margin:0;
    padding:0;
    
    justify-content:center;
    align-items:center;
    flex-direction: column;
  }
`
