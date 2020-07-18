
import graphql from 'babel-plugin-relay/macro';

export const fragmentSpec = graphql`
  fragment UserList_edges on SearchResultItemConnection {
    edges {
      node {
        ... on User {
          id
          __typename
          ...UserItem_user
        }
        ... on Organization {
          id
          __typename
          ...OrganizationListItem_organization
        }
      }
    }
  }
`;

 