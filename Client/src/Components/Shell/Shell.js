import React, { Component } from 'react';
import Menu from './Menu'
import Main from './Main'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class Shell extends Component {
  render() {
    const { classes } = this.props

    return (
      <Grid container className={classes.root} direction={"column"}>
        <Grid item>
          <Menu />
        </Grid>
        <Grid item className={classes.content}>
          <Main />
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
    height: '100vh',
  },
  content: {
    flexGrow: 1,
  }
});

Shell.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shell);
