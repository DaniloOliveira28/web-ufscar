import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';

type SearchBoxProps = {
  value: string;
  onChange: (newValue:string) => void;
};

const SearchBox = (props:SearchBoxProps) => {
  const {value, onChange} = props;

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          value={value}
          onChange={
            (event) => {
              onChange(event.target.value)
            }
          }
        />
      </FormControl>
    </div>
  )
}
export default SearchBox;
