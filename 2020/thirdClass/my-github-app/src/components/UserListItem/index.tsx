import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {useFragment, useMutation} from 'relay-hooks';
import {fragmentSpec, followUser, unfollowUser} from './UserListItem.gql';
import {UserListItem_user$key} from './__generated__/UserListItem_user.graphql';
import { UserListItemFollow_Mutation } from './__generated__/UserListItemFollow_Mutation.graphql'
import { UserListItemUnFollow_Mutation } from './__generated__/UserListItemUnFollow_Mutation.graphql'

type UserListItemProps = {
  user: UserListItem_user$key;
};

const UserListItem = (props:UserListItemProps) => {

  const user = useFragment(fragmentSpec, props.user)
  const [commitFollowUser] = useMutation<UserListItemFollow_Mutation>(followUser);
  const [commitUnfollowUser] = useMutation<UserListItemUnFollow_Mutation>(unfollowUser);

  const handleFollow = (followStatus:boolean) => {
    if(followStatus === true) {
      commitUnfollowUser({
        variables: {
          input: {
            userId:user.id
          },
        },
        })
    } else {
      commitFollowUser({
        variables: {
          input: {
            userId:user.id
          },
        },
      })
    }
  }
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
          onClick={() => handleFollow(user.viewerIsFollowing)}
          edge="end"
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default UserListItem;