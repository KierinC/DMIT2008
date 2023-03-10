import Head from 'next/head'
import Image from 'next/image'

import Alert  from '@mui/material';
import AlertTitle from '@mui/material';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import NavBar from '../components/NavBar'
import Title from '../components/Title'
import FavouriteBooks from '../components/FavouriteBooks'

import { useState } from 'react';

const FAVOURITE_BOOKS = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    rating: 9
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 8
  }
]

export default function Home() {
  const [books, setBooks] = useState(FAVOURITE_BOOKS)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [rating, setRating] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validateSubmit()) {
      let newBook = {
      title: title,
      author: author,
      rating: rating
    }
    setBooks([newBook, ...books])
    }

    setTitle("")
    setAuthor("")
    setRating("")
  }

  const validateSubmit = () => {
    if (title.trim().length === 0 || author.trim().length === 0 || rating.trim().length === 0) {

      setErrorMessage("Please enter all of the values.")
      return false
    }

    setErrorMessage("")
    return true
  }

  return (
    <div>
      <Head>
        <title>Library App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar title={"Our Library"} />
      <main>
        <Container sx={{paddingTop: '2rem'}} maxWidth="md">
           <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', marginBottom: "2rem"}}>
              <Title>Add a New Favourite</Title>
              <form
                onSubmit={handleSubmit}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      // required
                      id="title"
                      name="title"
                      label="Book Title"
                      fullWidth
                      variant="standard"
                      value={title}
                      onChange={(event) => { setTitle(event.target.value)}}
                    />
                  </Grid>
                  <Grid item xs={10} sm={3}>
                    <TextField
                      // required
                      id="author"
                      name="author"
                      label="Author"
                      fullWidth
                      variant="standard"
                      value={author}
                      onChange={(event) => { setAuthor(event.target.value)}}
                    />
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <TextField
                      // required
                      id="rating"
                      name="rating"
                      label="Rating"
                      fullWidth
                      variant="standard"
                      value={rating}
                      onChange={(event) => { setRating(event.target.value)}}
                    />
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 1.5, ml: 1 }}>Add</Button>
                  </Grid>
                  <Grid item xs={10}>
                    {errorMessage !== "" &&
                      <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errorMessage}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </form>
           </Paper>
          <FavouriteBooks books={books} />
        </Container>
      </main>
    </div>
  )
}
