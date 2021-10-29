import graphql from 'babel-plugin-relay/macro';

export const fragmentSpec = graphql`
  fragment OrganizationListItem_organization on Organization {
    id
    avatarUrl
    login
    name
    location
    email
    url
  }
`;