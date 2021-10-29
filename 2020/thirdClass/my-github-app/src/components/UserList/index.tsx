import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import UserListItem from '../UserListItem';
import OrganizationListItem from '../OrganizationListItem';
import {usePagination} from 'relay-hooks';
import {fragmentSpec, connectionConfig} from './UserList.gql';
import {UserList_query$key} from './__generated__/UserList_query.graphql'


type UserListProps = {
  query: UserList_query$key;
}

const UserList = (props:UserListProps) => {

  const [ query, { isLoading, hasMore, loadMore } ] = usePagination(fragmentSpec, props.query);

  const _loadMore = () => {
    if (!hasMore() || isLoading()) {
      return;
    }

    loadMore(
      // @ts-ignore
      connectionConfig,
      6,  // Fetch the next 10 feed items
      error => {
        console.log(error);
      },
    );
  }

  return (
    <Box>
      <Typography variant='body1'> Total de items: {query?.users?.userCount ?? 0} </Typography>
      <List dense>
        {query.users.edges?.map(item => {
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
      <Button
          onClick={_loadMore}
          title="Load More"
        >Carregar mais
      </Button>
    </Box>
  );
}

export default UserList;