import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography, Card, CardContent, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: 20,
  },
}));

function App() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const obj = [
      {
        'name': "type 1",
        'notifications': {
          'first_notification': 'true',
          'second_notification': 'true'
        }
      },
      {
        'name': "type 2",
        'notifications': {
          'first_notification': 'true',
          'second_notification': 'false'
        }
      },
      {
        'name': "type 3",
        'notifications': {
          'first_notification': 'false',
          'second_notification': 'true'
        }
      },
      {
        'name': "type 4",
        'notifications': {
          'first_notification': 'false',
          'second_notification': 'false'
        }
      },
      {
        'name': "type 5",
        'notifications': {},
      }
  ];

  const handleClick = (obj) => () => {
    let [first, second] = Object.values(obj);
    console.log(`first: ${first}, second: ${second}`);
    ((first === 'true' || !first) && enqueueSnackbar(`This is a first notification`, {variant: 'success', autoHideDuration: 500},));
    ((second === 'true' || !second) && enqueueSnackbar(`This is a first notification`, {variant: 'error', autoHideDuration: 500}));
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {
          obj.map((item) => (
            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <Button variant="contained" color="primary" onClick={handleClick(item.notifications)}> {item.name} </Button>
                  <Typography className={classes.text}>
                      1st: { item.notifications.first_notification || '-----' }
                  </Typography>
                  <Typography className={classes.text}>
                      2nd: { item.notifications.second_notification || '-----' }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default App;

/*
if ({} && success.true && error.true) = success, error
if else (success.true && error.false) = success
if else (success.false && error.true) = error

{one, two}  = notify
*/