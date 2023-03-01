import {useState} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

import AdaptationReviewCard from '../components/AdaptationReviewCard'
import AdaptationReviewForm from '../components/AdaptationReviewForm'
import NavBar from '../components/NavBar';
import SEO from '../components/SEO'

import { getReviews } from '../utils/api/reviews';

export default function Home() {
  const [reviews, setReviews] = useState([])

  const removeFromReviews = (id) => {
    let newReviews = reviews.filter((review) => {
      return review.id !== id
    })
    setReviews(newReviews)
  }

  const loadAllReviewsButton = () => {
    getReviews().then((data)=> {
      setReviews(data)
    })
  }

  return (
    <div>
      <SEO />
      <NavBar title={`Adaptations Reviews`} />
      <main>
        <Container
          sx={{
            pt: 2,
            pb: 2,
          }}
          maxWidth="md"
        >
          <AdaptationReviewForm
            reviews={reviews}
            setReviews={setReviews}
          />
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
                id={adaptation.id}
                rating={adaptation.rating}
                title={adaptation.title}
                comment={adaptation.comment}
                removeFromReviews={removeFromReviews}
              />
          })}
        </Container>
      </main>
    </div>
  )
}
