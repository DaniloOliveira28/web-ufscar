import React from 'react';
import {useQuery} from 'relay-hooks';

import {searchQuery } from './ResultBox.gql';

type ResultBoxProps = {
  query: string;
}
const ResultBox = (props:ResultBoxProps) => {
  const {query} = props;
  
  const variables = {
    query,
    count: 6
  }
  const {props: result, error, retry, cached} = useQuery(searchQuery, variables);

  return (
    <div>
      ResulBox: {JSON.stringify(result)}
    </div>
  )
}
export default ResultBox;
