import React, { useState, useEffect } from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import API from '../../utils/API';

const useStyles = makeStyles({
  searchInput: {
    marginTop: '10px',
  },
  list: {
    position: 'fixed',
    width: '250px',
    overflowY: 'scroll',
    maxHeight: '200px',
  },
});

const Search = ({ setItem, searchVariant, searchLabel }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (searchValue.length > 0) {
      API[searchVariant](searchValue).then((resp) => {
        setSearchList(resp.results);
      });
    } else {
      setSearchList([]);
    }
  }, [searchValue]);

  return (
    <>
      <TextField
        className={classes.searchInput}
        placeholder={searchLabel}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {searchList && searchList.length > 0 && (
        <List className={classes.list} component="nav">
          {searchList.map((item, index) => (
            <ListItem onClick={() => { setItem(item); setSearchValue(''); }} key={index} button>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default Search;
