import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class TeamData extends React.Component  {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Grid container direction={"column"} alignItems={"center"} justify={"space-around"}>
            <Grid item>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }   
}

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

TeamData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamData);