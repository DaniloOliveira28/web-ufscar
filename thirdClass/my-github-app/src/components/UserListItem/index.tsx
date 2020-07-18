import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {useFragment} from 'relay-hooks';
import {fragmentSpec} from './UserListItem.gql';
import {UserItem_user$key} from './__generated__/UserItem_user.graphql';

type UserListItemProps = {
  user: UserItem_user$key;
};

const UserListItem = (props:UserListItemProps) => {

  const user = useFragment(fragmentSpec, props.user)
  console.log(user);
  
  return (
    <ListItem button onClick={() => {
        var win = window.open(user.url as string, '_blank');
        win?.focus();

    }}>
      <ListItemAvatar>
        <Avatar
          alt={`Avatar`}
          src={user?.avatarUrl ? user?.avatarUrl as string : 'https://www.w3schools.com/w3images/avatar6.png'}
        />
      </ListItemAvatar>
      <ListItemText primary={`${user.name} (${user.login})`} />
      <ListItemSecondaryAction>
        <Checkbox
          checked={user.viewerIsFollowing}
          edge="end"
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default UserListItem;