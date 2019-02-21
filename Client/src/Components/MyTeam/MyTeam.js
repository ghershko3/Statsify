import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { PositionsEnum } from '../../Consts';
import PlayersList from './PlayersList'
import TeamData from './TeamData'

class MyTeam extends Component {
  render() {
    const players = [
      {
        id: 1,
        teamId: 1,
        fName : "Aga",
        lName: "Doo",
        position: PositionsEnum.GUARD,
        number: 6
      },
      {
        id: 2,
        teamId: 1,
        fName : "Young",
        lName: "Haim",
        position: PositionsEnum.CENTER,
        number: 7
      },
      {
        id: 3,
        teamId: 1,
        fName : "Itzik",
        lName: "Kala",
        position: PositionsEnum.FORWARD,
        number: 8
      },
    ]

    const teams = [
      {
        id: 1,
        name: 'Otzma Modiin',
        year: 2019
      }
    ]

    const { classes } = this.props

    return (
      <Grid container className={classes.cont} direction={"column"} alignItems={"stretch"}>
        <Grid item>
          <TeamData team={teams.find(team => team.id === 1)} />
        </Grid>
        <Grid item>
          <PlayersList players={players} />
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  cont: {
    height: '100%',
  }
});

MyTeam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTeam);
