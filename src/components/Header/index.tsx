import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react';

const styles = {
  title: {
    flex: 1
  }
}

const Header = ({ classes } : { classes : any }) => {
  return (
    <AppBar position="sticky">
        <Toolbar>
          <Hidden xsDown={true}>
            <IconButton color="inherit">
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          <Typography classes={{ root: classes.title }} variant="title" color="inherit">
            Page Title
          </Typography>
          <Hidden xsDown={true}>
            <IconButton color="inherit">
              <Icon>account_circle</Icon>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
  );
}

export default withStyles(styles)(Header);