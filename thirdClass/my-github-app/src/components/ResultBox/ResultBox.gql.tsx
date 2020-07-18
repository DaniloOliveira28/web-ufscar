
import graphql from 'babel-plugin-relay/macro';

export const searchQuery = graphql`
  query ResultBox_Query($count: Int!, $cursor: String, $query: String!) {
    search(first:$count query:$query type:USER after:$cursor) {
      userCount
      edges {
        node {
          ... on User {
            id
            name
            login
            viewerIsFollowing
            url
          }
        }
      } 
    }
  }
`;
