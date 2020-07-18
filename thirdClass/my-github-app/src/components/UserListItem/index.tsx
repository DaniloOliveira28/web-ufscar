import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const UserListItem = () => {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar
          alt={`Avatar`}
          src={`/static/images/avatar/1.jpg`}
        />
      </ListItemAvatar>
      <ListItemText primary={`Line item`} />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default UserListItem;