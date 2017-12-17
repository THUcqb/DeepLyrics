import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Query from './Query';
import {
    TEST,WORD2WORD,WORD2SENTENCE,SENTENCE2SENTENCE,SENTENCE2PIECE, PIECE2PIECE
} from './config';

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
                <Query title='Test' api={TEST}/>
            </Paper>
            <Paper className={classes.paper}>
                <Query title='Word -> Word' api={WORD2WORD}/>
            </Paper>
            <Paper className={classes.paper}>
                <Query title='Word -> Sentence' api={WORD2SENTENCE}/>
            </Paper>
            <Paper className={classes.paper}>
                <Query title='Sentence -> Sentence' api={SENTENCE2SENTENCE}/>
            </Paper>
            <Paper className={classes.paper}>
                <Query title='Sentence -> Piece' api={SENTENCE2PIECE}/>
            </Paper>
            <Paper className={classes.paper}>
                <Query title='Piece -> Piece' api={PIECE2PIECE} multiline={true}/>
            </Paper>
        </div>);
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
