import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {useFragment, useMutation} from 'relay-hooks';
import {fragmentSpec, followUser, unfollowUser} from './UserItem.gql'

const UserItem = props => {
    const {value} = props;

    const userData = useFragment(fragmentSpec, props.user);
    console.log(userData)

    const [commitFollowUser] = useMutation(followUser);
    const [commitUnfollowUser] = useMutation(unfollowUser);

    return (
        <ListItem key={value} button onClick={() => {
            var win = window.open(userData.url, '_blank');
            win?.focus();

        }}>
            <ListItemAvatar>
                <Avatar
                alt={userData.name}
                src={userData.avatarUrl}
                />
            </ListItemAvatar>
            <ListItemText primary={userData.name} />
            <ListItemSecondaryAction>
                <Checkbox
                    edge="end"
                    checked={userData.viewerIsFollowing}
                    onClick={() => {
                        if(!userData.viewerIsFollowing) {
                            commitFollowUser({
                                variables: {
                                  input: {
                                    userId:userData.id
                                  },
                                },
                              })
                        } else {
                            commitUnfollowUser({
                                variables: {
                                  input: {
                                    userId:userData.id
                                  },
                                },
                              })
                        }
                    }}
                />
            </ListItemSecondaryAction>
      </ListItem>
    )
}

export default UserItem;