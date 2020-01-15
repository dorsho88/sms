import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useForm from './useForm';
import { ItemsContext } from '../contexts/ItemsContext';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),

    },
    submitBtn: {
        marginTop: '30px;',
    },

}));


const NewItem = (props) => {

    const classes = useStyles();
    const { handleNewItem } = React.useContext(ItemsContext);
    const { values, handleChange, handleSubmit } = useForm(handleNewItem);



    return (
        <div className={classes.root}>

            <Grid container >
                <Grid item xs={12}>

                    <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
                        <Grid item xs={12}>
                            <TextField
                                id="number"
                                label="Number"
                                value={values.number}
                                placeholder="enter a valid mobile number"
                                onChange={handleChange}
                                margin="normal"
                                name="number"
                                autoFocus
                                inputProps={{ maxLength: '15', minLength: '7' }}
                                required
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <TextField
                                id="message"
                                label="Message"
                                name="message"
                                placeholder="up to 256 characters"
                                onChange={handleChange}
                                multiline
                                rows="6"
                                margin="normal"
                                value={values.message}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button className={classes.submitBtn} variant="contained" type="submit" color='primary'>
                                Send
                            </Button>
                        </Grid>
                    </form>

                </Grid>
            </Grid>
        </div>
    );
};

export default NewItem;
