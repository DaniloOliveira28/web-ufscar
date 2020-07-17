import graphql from 'babel-plugin-relay/macro';
import { searchQuery} from '../../pages/SearchUser/SearchUser.gql';

export const fragmentSpec = graphql`
    fragment UserList_query on Query {
      users: search(first: $count, after: $cursor, query: $query, type: USER)
        @connection(key: "UserList_users") {
        edges {
          cursor
          node {
            ... on User {
              id
              ...UserItem_user
            }
          }
        }
        userCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
`;

export const connectionConfig = {
  getConnectionFromProps(props) {
    return props && props.users;
  },
  getFragmentVariables(prevVars, totalCount) {
    return {
      ...prevVars,
      count: totalCount,
    };
  },
  getVariables(props, { count, cursor }, fragmentVariables) {
    return {
      ...fragmentVariables,
      count,
      cursor,
    };
  },
  query: searchQuery,
};

