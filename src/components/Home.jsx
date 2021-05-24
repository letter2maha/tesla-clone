import React from 'react'

import styled from 'styled-components'
import Footer from './Footer'
import Section from './Section'
import VideoSection from './VideoSection'
function Home() {
  return (
    <Container>
      <Section
        title='Model 3'
        description='1% Company Car Tax'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom order'
        rightBtnText='Available inventory'
      />

      <Section
        title='Model S'
        description='1% Company Car Tax'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom order'
        rightBtnText='Available inventory'
      />

      <Section
        title='Solar and Powerwall'
        description='Power Everything'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
      />
      <Section
        title='Accessories'
        backgroundImg='model-y.jpg'
        leftBtnText='Learn More'
      />

      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop Now'
      />

      <Footer />
      <VideoSection />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
