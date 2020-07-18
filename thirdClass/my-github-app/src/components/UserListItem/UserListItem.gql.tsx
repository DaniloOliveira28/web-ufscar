import graphql from 'babel-plugin-relay/macro';

export const fragmentSpec = graphql`
  fragment UserItem_user on User {
    id
    avatarUrl
    login
    name
    location
    email
    url
    viewerIsFollowing
  }
`;