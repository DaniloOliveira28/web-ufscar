import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import UserItem from '../UserItem';
import { Box, Button } from '@material-ui/core';

import { connectionConfig, fragmentSpec  } from './UserList.gql';

import { usePagination } from 'relay-hooks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

type UserListProps = {
  query: any;
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
  console.log('xxx_users', query)
  return (   
      <Box>
        <Box>
          Total: {query.users.userCount}
        </Box>

        <List dense>
          {query.users.edges.map((user) => {

            return (
              <Box key={user.node.id}>
                <UserItem user={user.node}/>
              </Box>
            );
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