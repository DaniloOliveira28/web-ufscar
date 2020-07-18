import React from 'react';

import List from '@material-ui/core/List';
import UserListItem from '../UserListItem';
import OrganizationListItem from '../OrganizationListItem';
import {useFragment} from 'relay-hooks';
import {fragmentSpec} from './UserList.gql';
import {UserList_edges$key} from './__generated__/UserList_edges.graphql'

type UserListProps = {
  userEdges: UserList_edges$key;
}

const UserList = (props:UserListProps) => {

  const userEdges = useFragment(fragmentSpec, props.userEdges);
  console.log(userEdges)

  const [checked, setChecked] = React.useState([1]);

  // const handleToggle = (value: number) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };


  return (
    <List dense>
      {userEdges.edges?.map(item => {
        console.log('xxx_item.__typename', item?.node?.__typename)
        if (item.node.__typename === 'User') {
          return (
            <div key={item?.node!.id}>
              <UserListItem user={item?.node} />
            </div>
          )
        }
        if (item.node.__typename === 'Organization') {
          return (
            <div key={item?.node!.id}>
              <OrganizationListItem organization={item?.node} />
            </div>
          )
        }
        return null
      })}
    </List>
  );
}

export default UserList;