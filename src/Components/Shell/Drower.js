import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import history from "../../history"

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class SwipeableTemporaryDrawer extends React.Component {
  handleNavigate = (loc) => {
    history.push(loc)
  }

  render() {
    const { classes, left, toggleDrawer } = this.props;

    const sideList = (
        <div className={classes.list}>
            <List>
                <ListItem button onClick={() => this.handleNavigate("/")}>
                    <ListItemIcon> <Icon color={"secondary"}>home</Icon> </ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
                <Divider/>
                <ListItem button onClick={() => this.handleNavigate("/MyTeam")}>
                    <ListItemIcon> <Icon color={"secondary"}>group</Icon> </ListItemIcon>
                    <ListItemText primary={"My Team"} />
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
      <div>
        <SwipeableDrawer
          open={left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);