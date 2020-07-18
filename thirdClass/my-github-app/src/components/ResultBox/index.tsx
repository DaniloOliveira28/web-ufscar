import React from 'react';
import {Box} from '@material-ui/core';
import {useQuery} from 'relay-hooks';
import UserList from '../UserList';

import {searchQuery } from './ResultBox.gql';
import { ResultBox_Query } from './__generated__/ResultBox_Query.graphql';

type ResultBoxProps = {
  query: string;
}
const ResultBox = (props:ResultBoxProps) => {
  const {query} = props;
  
  const variables = {
    query,
    count: 6
  }
  const {props: result, error, retry, cached} = useQuery<ResultBox_Query>(searchQuery, variables);

  return (
    <Box>
      Total de items: {result?.search?.userCount ?? 0}
      <UserList />
    </Box>
  )
}
export default ResultBox;
