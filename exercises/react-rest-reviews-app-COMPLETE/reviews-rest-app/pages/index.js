import {useState} from 'react'

import Head from 'next/head'
import Image from 'next/image'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SEO from '../components/SEO';
import AdaptationReviewCard from '../components/AdaptationReviewCard'

import { getReviews, postReview } from '../utils/api/reviews';
import NavBar from '../components/NavBar';


export default function Home() {
  const [reviews, setReviews] = useState([])
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [rating, setRating] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()

    postReview({
      title: title,
      comment: comments,
      rating: rating
    }).then((data) => {
      setReviews([...reviews, data])
    })     
  }

  const loadAllReviewsButton = () => {
    getReviews().then(data => {
      setReviews(data)
    })
  }

  return (
    <div>
      <SEO/>
      <NavBar title="Adaptation Reviews"/>
      <main>
        <Container sx={{
            pt: 2,
            pb: 2,
          }}
          maxWidth="md"
        >
          <form
            onSubmit={handleSubmit}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="title"
                  name="title"
                  label="Adaptation Title"
                  fullWidth
                  variant="standard"
                  value={title}
                  onChange={(event)=> { setTitle(event.target.value) }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="review-comments"
                  name="review-comments"
                  label="Comments"
                  fullWidth
                  variant="standard"
                  value={comments}
                  onChange={(event)=> { setComments(event.target.value) }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel id="adaptation-rating">Rating</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="adaptation-rating"
                    name="rating-buttons-group"
                    value={rating}
                    onChange={(event)=> {setRating(event.target.value)}}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                    <FormControlLabel value="6" control={<Radio />} label="6" />
                    <FormControlLabel value="7" control={<Radio />} label="7" />
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel value="9" control={<Radio />} label="9" />
                    <FormControlLabel value="10" control={<Radio />} label="10" />
                  </RadioGroup>
               </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  variant="contained"
                  type="submit"
                >
                  Add New Review
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={loadAllReviewsButton}
            >
              Load All Current Reviews
            </Button>
          </Box>
          {reviews.map((adaptation, index)=> {
            return <AdaptationReviewCard
                key={index}
                rating={adaptation.rating}
                title={adaptation.title}
                comment={adaptation.comment}
              />
          })}
        </Container>
      </main>
    </div>
  )
}
