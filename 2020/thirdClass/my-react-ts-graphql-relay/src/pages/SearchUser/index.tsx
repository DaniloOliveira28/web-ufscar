import React, { useState } from "react";

import { Box, TextField } from '@material-ui/core';

import UserList from "../../components/UserList";
import { useQuery } from 'relay-hooks';
import {searchQuery} from './SearchUser.gql';
import "./index.css";

const DEFAULT_PAGE_SIZE = 15;
type SearchUserProps = {
  query: String;
}

const options = {
  fetchPolicy: 'store-or-network', //default
  networkCacheConfig: undefined,
}

const SearchUser = ( {query} ) => {
  const {props:users, error, retry, cached} = useQuery(searchQuery, {count:6, query});

  console.log('xxx_users', users)
  if (users) {
    return <UserList query={users} />;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  return <div>loading</div>;

  
};

export default SearchUser;

