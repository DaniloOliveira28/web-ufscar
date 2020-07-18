import React, {useState} from 'react';
import {Box} from '@material-ui/core';
import SearchBox from '../SearchBox';
import ResultBox from '../ResultBox';
import EmptyResult from '../EmptyResult';
import ErrorBoundary from '../ErrorBoundary';

const Main = () => {
  const [query, setQuery] = useState('');

  return (
    <main>
      <Box my={2}>
        <SearchBox onChange={(value) => {setQuery(value)}} value={query} />
      </Box>
      <ErrorBoundary>
        {query && query !== '' ? <ResultBox query={query}/> : <EmptyResult /> }
      </ErrorBoundary>
    </main>
  );
}

export default Main;