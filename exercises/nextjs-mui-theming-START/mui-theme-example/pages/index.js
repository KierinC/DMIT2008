import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// material ui imports.
import Box from '@mui/material/Box'
import CoffeeTwoToneIcon from '@mui/icons-material/CoffeeTwoTone';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* 
          The Following line will only install Roboto on this page.
          Later in the course we'll learn about the "document.js"
          page where this will be more appropriate. To have
         */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
            <Typography
            variant="h2"
            component="h2"
            color='primary'
            >
              MUI Example
            </Typography>
            <CoffeeTwoToneIcon color='secondary' />
            <Typography
            variant="p"
            component="p"
            color='secondary'
            >
              Rate the coffee you're drinking
            </Typography>
            <Rating />
          </Box>
        </Container>
      </main>
    </div>
  )
}