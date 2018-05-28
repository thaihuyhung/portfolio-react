import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const styles = (theme : any) : any => ({
  container: {
    background: '#dbdbdb',
    height: 80,
    padding: 24,
    [theme.breakpoints.down('xs')]: {
      height: 46,
      padding: 8,
    }
  },
  text: {
    textAlign: 'left'
  }
})

const Footer = ({ classes } : { classes : any}) => {
  return (
    <Grid
      container={true} 
      justify="flex-start" 
      alignItems="flex-start" 
      classes={{ container: classes.container }}
    >
      <Typography variant="caption" gutterBottom={true} align="center">
        Thai Huy Hung © 2018
      </Typography>
    </Grid>
  );
}

export default withStyles(styles)(Footer);