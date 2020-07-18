import React from 'react';
import {Box} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

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
  const {props: result, error} = useQuery<ResultBox_Query>(searchQuery, variables);


  if (result && result) {
    return (
      <Box>
        <UserList query={result} />
      </Box>
    );
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return (
  <div>
    <Skeleton />
    <Skeleton />
    <Skeleton />    
  </div>);


}
export default ResultBox;
