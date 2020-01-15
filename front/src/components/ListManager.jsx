import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from './List';
import NewItem from "./NewItem";
import { ItemsContext } from '../contexts/ItemsContext';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        padding: theme.spacing(3, 2),
    },
}));

const ListManager = () => {
    const { download } = React.useContext(ItemsContext);
    const classes = useStyles();
    return (
        <div>
            <Grid container
                direction="row"
                alignItems="center"
                justify="center">
                <Grid item xs={6}>
                    <Paper className={classes.root} >
                        <Grid container direction="column">
                            <Grid item xs>
                                <NewItem />
                            </Grid>
                            <Grid item xs>
                                <List className={classes.list} /*items={items} onChange={handleChange} onDelete={handleDelete}*/ />
                            </Grid>
                        </Grid>
                        <Button variant="contained" type="button" color='primary' onClick={() => download()}>
                            Download log
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default ListManager;