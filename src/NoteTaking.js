import React, { useState } from 'react';
import { TextField, ThemeProvider, Button, Grid } from '@material-ui/core';
import './App.css';
import useStyles from './style';
import theme from './theme';

var dataNotes = [];


function NotesList() {
  const classes = useStyles();

  const [textInput, setTextInput] = useState();
  const [notes, setNotes] = useState();
  const [id, setId] = useState(1);

  const removeItem = (id) => {
    dataNotes = dataNotes.filter((item) => item.id !== id);
    setNotes(RenderNotes(dataNotes));
  };

  const RenderNotes = (dataNotes) => {
    return(
      <Grid container spacing={1}>
        {dataNotes.map((item) => {
        const { id, textInput } = item;
          return (
            <Grid key = {id} item xs={3}>
                <TextField 
                  value={textInput}
                  label={id}
                  disabled
                  multiline
                  variant="outlined"
                  />
                  <Button 
                  color = 'primary' 
                  classname={classes.button}
                  onClick={() => removeItem(id)}>Delete
                  </Button>
            </Grid>
          );
        })}
      </Grid>
    );
  }

  function handleSubmit(event){
    event.preventDefault();
    setId(id+1);
    dataNotes.push({id, textInput});
    setNotes(RenderNotes(dataNotes));
  }

  return (
    <ThemeProvider theme = {theme}>
      <Grid container className={classes.mainGrid}>
      {notes}
      </Grid>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <TextField
            className={classes.inputField}
            id="outlined-multiline-static"
            label="Note"
            multiline
            rows={4}
            fullWidth
            placeholder="type a note here..."
            variant="outlined"
            value={textInput}
            onInput={ e=>setTextInput(e.target.value)}
          />
          <Button
            type="submit"
            className={classes.button} 
            variant='contained' 
            color='primary'>
            Save Note
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
}

export default NotesList;