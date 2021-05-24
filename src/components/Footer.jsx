import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <FooterITems>
        <li>Tesla © 2021</li>
        <li>Privacy & Legal</li>
        <li>Contact</li>
        <li>Careers</li>
        <li>Get Newsletter</li>
        <li>News</li>
        <li>Locations</li>
      </FooterITems>
    </Container>
  )
}

export default Footer

const Container = styled.div``
const FooterITems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  cursor: none;
  li {
    margin-left: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    li {
      margin-left: 0;
      margin-bottom: 5px;
    }
    li:nth-child(n + 3) {
      display: none;
    }
  }
`
