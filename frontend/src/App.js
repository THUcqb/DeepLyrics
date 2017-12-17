import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Query from './Query';
import {TEST} from './config';

const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: "center",
        padding: theme.spacing.unit * 3
    },
    flex: {
        flex: 1
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing.unit * 3
    }
});

/**
 * The app which consists of ...
 */
class App extends Component {
    render() {
        const {classes} = this.props;

        const appBar = (<AppBar className={classes.appbar} position="static">
            <Toolbar>
                <Typography className={classes.flex} type="title" color="inherit">
                    Deep Lyrics
                </Typography>
            </Toolbar>
        </AppBar>)

        return (<div className={classes.root}>
            {appBar}
            <Paper className={classes.paper}>
                <Query title='测试' api={TEST}/>
            </Paper>
        </div>);
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
