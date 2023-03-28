import {useState, useEffect} from 'react'

import {useRouter} from 'next/router'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

import NavBar from '@components/NavBar';
import LoadingCircle from '@components/LoadingCircle';
import SimpleDetailsCard from '@components/SimpleDetailsCard';

import { getSpaceCraft } from '@utils/api/spaceCraft';

export default function SpaceCraft() {
  const [spaceCraftDetails, setSpaceCraftDetails] = useState()
  
  const router = useRouter()
  const { spaceCraftId } = router.query
  // the same as
  // const spaceCraftId = router.query.spaceCraftId

  useEffect(()=> {
    // make the request to the backend
    getSpaceCraft(spaceCraftId).then((data)=> {
      console.log(data)
      // setting the data fetch to the frontend state
      setSpaceCraftDetails(data)
    })
  }, [spaceCraftId]) // fires on mount

  if (!spaceCraftDetails) {
    return <>
      <NavBar />
      <LoadingCircle />
    </>
  }

  return <>
    <NavBar />
    <Container sx={{paddingTop:2}} component="main">
        <Grid container>
          <Grid item xs={4}>
            <img
              style={{width:`220px`}}
              src={spaceCraftDetails.image_url}
              />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h3">
              {spaceCraftDetails.name}
            </Typography>
            <SimpleDetailsCard
              title="description"
              subDescription={spaceCraftDetails.details}
            />
          </Grid>
        </Grid>
    </Container>
  </>
}