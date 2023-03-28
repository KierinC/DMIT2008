import { POPULAR_AUTHORS } from '../utils/constants/popular_authors';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const PopularAuthorList = (props) => {
  return (
    <Box sx={{width: '100%'}}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Popular Authors
      </Typography>
      <List sx={{width: '100%'}}>
        <Divider />
        {POPULAR_AUTHORS.map((author, index)=> {
          return (
            <>
              <ListItem
                secondaryAction={
                  <Button
                    onClick={() => 
                      props.setAuthorKey(author.key)
                    }
                  >show</Button>
                }
              >
                <ListItemText primary={author.name}></ListItemText>
              </ListItem>
              <Divider />
            </>
          )
        })}
      </List>
    </Box>
  )
}

export { PopularAuthorList }