import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/professiona-photo.png'

import { Container, Avatar, Brief, Box, Skills, Projects, Talks, Navbar, Shape, Contact, Footer } from '../components/index'

import Test from '../components/Test'

const Home = () => {
  return (
    <>
      <Container>
        <Head>
          <title>My own portfolio</title>
        </Head>

        <Navbar />
        <Box>
          <Avatar>
            <Image src={profilePic} className="rounded-full" />
          </Avatar>
          <Brief />
        </Box>
        <Shape />
        <Skills />
        <Shape />
        <Projects />
        <Shape />
        <Talks />
        <Shape />
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default Home
