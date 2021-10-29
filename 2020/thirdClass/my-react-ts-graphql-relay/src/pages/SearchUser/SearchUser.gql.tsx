
import graphql from 'babel-plugin-relay/macro';

export const searchQuery = graphql`
  query SearchUser_Query($count: Int, $cursor: String, $query: String!) {
    ...UserList_query
  }
`;