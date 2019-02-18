import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Logo from'../../assets/logo-sest.png'



class Home extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Grid container className={classes.cont} direction={"column"} alignItems={"center"} justify={"space-around"}>
          <Grid item>
            <img className={classes.logo} src={Logo} alt="Statsify"/>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary"> Let's play </Button>
          </Grid>
        </Grid>
    );
  }

}

const styles = theme => ({
  logo: {
    width: '70vw',
    maxWidth: '300px'
  },
  cont: {
    height: '100%',
  }
});

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);