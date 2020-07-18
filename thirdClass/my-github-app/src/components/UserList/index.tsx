import React from 'react';

import List from '@material-ui/core/List';
import UserListItem from '../UserListItem';

const UserList = () => {

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <div key={value}>
            <UserListItem />
          </div>
        );
      })}
    </List>
  );
}

export default UserList;