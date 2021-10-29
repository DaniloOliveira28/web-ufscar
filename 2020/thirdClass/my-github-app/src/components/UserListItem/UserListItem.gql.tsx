import graphql from 'babel-plugin-relay/macro';

export const fragmentSpec = graphql`
  fragment UserListItem_user on User {
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

export const followUser = graphql`
  mutation UserListItemFollow_Mutation($input: FollowUserInput!) {
    followUser(input: $input) {
      user {
        viewerIsFollowing
      }
    }
  }
`;

export const unfollowUser = graphql`
  mutation UserListItemUnFollow_Mutation($input: UnfollowUserInput!) {
    unfollowUser(input: $input) {
      user {
        viewerIsFollowing
      }
    }
  }
`;