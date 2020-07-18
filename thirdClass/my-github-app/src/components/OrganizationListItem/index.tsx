import React from 'react';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {useFragment} from 'relay-hooks';
import {fragmentSpec} from './OrganizationListItem.gql';
import {OrganizationListItem_organization$key} from './__generated__/OrganizationListItem_organization.graphql';
import { StyledListItem } from './styles';

type OrganizationListItemProps = {
  organization: OrganizationListItem_organization$key;
};

const OrganizationListItem = (props:OrganizationListItemProps) => {

  const organization = useFragment(fragmentSpec, props.organization)
  console.log(organization);
  
  return (
    <StyledListItem button onClick={() => {
        var win = window.open(organization.url as string, '_blank');
        win?.focus();

    }}>
      <ListItemAvatar>
        <Avatar
          alt={`Avatar`}
          src={organization?.avatarUrl ? organization?.avatarUrl as string : 'https://www.w3schools.com/w3images/avatar6.png'}
        />
      </ListItemAvatar>
      <ListItemText primary={`${organization.name} (${organization.login})`} />
    </StyledListItem>
  )
}

export default OrganizationListItem;