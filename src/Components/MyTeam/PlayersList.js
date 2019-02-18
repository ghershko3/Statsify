import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class PlayerList extends React.Component  {
  render() {
    const { classes, players } = this.props;

    return (
      <List className={classes.root}>
        {players.map(player => 
          <ListItem button alignItems="flex-start">
            {/* <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar> */}
            <ListItemText
              primary={`${player.fName} ${player.lName}`}
              secondary={
                  <React.Fragment>
                  <Typography component="span" className={classes.inline} color="textPrimary">
                      {`${player.number}, `}
                  </Typography>
                  {player.position}
                  </React.Fragment>
              }
            />
          </ListItem>)}
        </List>
      );
    }
}

const styles = theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  });

PlayerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayerList);