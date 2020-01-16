import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditButton from '@material-ui/icons/Edit';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteButton from '@material-ui/icons/Delete';
import ForwardButton from '@material-ui/icons/Forward';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { ItemsContext } from '../contexts/ItemsContext';

const Item = (props) => {
  const { item } = props;
  const { handleChange, handleDelete, items } = React.useContext(ItemsContext);
  const [editMode, setEditMode] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(!!item.checked);
  const ref = React.useRef();

  const handleChecked = () => () => {
    setIsChecked(!isChecked);
    handleChange(item.id, 'checked', !isChecked);
  };

  const handleSave = property => (event) => {
    handleChange(item.id, property, event.target.value);
  };

  const handleDeletion = () => () => {
    handleDelete(item.id);
  };


  return (

    <ListItem>
      <Grid container>
        <Grid item xs={4}>
          {item.number}
        </Grid>

        <Grid item xs={4} noWrap>
          {item.message}
        </Grid>

        <Grid item xs={2}>
          {item.time}
        </Grid>

        <Grid item xs={2} align="center">
          {item.success ?
            <ListItemIcon>
              <CheckCircleIcon color='primary' />
            </ListItemIcon>
            :
            <ListItemIcon>
              <ErrorIcon color='error' />
            </ListItemIcon>
          }
        </Grid>
      </Grid>
    </ListItem>

  );
};

export default Item;




