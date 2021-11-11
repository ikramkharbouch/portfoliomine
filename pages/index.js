import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/myavatar.jpeg'

import { Container, Avatar, Brief, Box, Skills, Projects, Talks, Navbar, Shape, Contact } from '../components/index'


export default function Home() {
  return (
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
    </Container>
  )
}
