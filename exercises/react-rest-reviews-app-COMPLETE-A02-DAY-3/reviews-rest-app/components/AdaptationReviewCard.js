import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';

import Typography from '@mui/material/Typography';

import {deleteReview} from '../utils/api/reviews'

export default function AdaptationReviewCard(props) {

  const deleteCurrentReview = () =>{
    deleteReview(props.id).then(()=> {
      props.removeFromReviews(props.id)
    })
  }

  return <Card sx={{mt: 2 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          {props.rating}
        </Avatar>
      }
      action={
        <IconButton onClick={deleteCurrentReview}>
          <DeleteIcon />
        </IconButton>
      }

      title={
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      }
      
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {props.comment}
      </Typography>
    </CardContent>
  </Card> 
}
