import {useState} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';


export default function TodoList() {
  const [todoText, setTodoText] = useState("")
  const [allTodos, setAllTodos] = useState([
    "dunk",
    "shoot hoops",
    "throw up nasty blocks",
    "ask for a trade"
  ])

  const onTodoTextChange = (event) => {
    // console.log(event.target.value)
    setTodoText(event.target.value)
  }

  const onAddTodoClick = () => {
    console.log("onAddTodoClick")
    console.log(todoText)
    // add the todo to a list (probably)
    const newAllTodos = [todoText, ...allTodos]
    setAllTodos(newAllTodos)

    // reset the todoText value
    setTodoText("")
  }

  const deleteTodo = (todoIndex, event) => {
    console.log(event)
    let newAllTodos = [...allTodos]
    newAllTodos.splice(todoIndex, 1)
    console.log(newAllTodos)
    setAllTodos(newAllTodos)
  }

  return <Box sx={{ flexGrow: 1 }}>
    <Grid container  spacing={2}>
      <Grid item xs={12} >
        <Typography variant="h2" gutterBottom>
          Our Todo List
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          onChange={onTodoTextChange}
          value={todoText}
          required
          id="outlined-required"
          label="Thing to do."
          variant="standard"
          fullWidth 
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{
            mt: 1,
            width: '100%'          
          }}
          variant="contained"
          onClick={onAddTodoClick}
        >Add</Button>
      </Grid>
      <Grid item xs={12}>
        <List>
          {allTodos.map((todo, index)=> {
            return <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={(event) => deleteTodo(index, event)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText 
                  primary={todo}
                  secondary={`is at index ${index}`}
                />
              </ListItem>
          })}
        </List>
      </Grid>
    </Grid>
  </Box>
}