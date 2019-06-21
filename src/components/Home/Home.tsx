// ------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// ------------------------------------------------------------------------------
// Material UI Components ----------------------------------------------------------------
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

// ------------------------------------------------------------------------------
// Local Components ----------------------------------------------------------------
import fetchQuotes from '../../Redux/actions/fetchQuotes';
import postQuote from '../../Redux/actions/postQuote';
import deleteQuote from '../../Redux/actions/deleteQuote';
import styles from './Home.styles';
import { defaultState } from '../../Redux/store';
import { QuoteType } from 'src/types';
// ----------------------------------------------------------------

interface Props extends WithStyles<typeof styles> {
  fetchQuotes: typeof fetchQuotes;
  postQuote: typeof postQuote;
  deleteQuote: typeof deleteQuote;
  postError: string;
  postIsFetching: boolean;
  requestError: string;
  requestIsFetching: boolean;
  quotes: QuoteType[];
}

interface State extends WithStyles<typeof styles> {
  text: string;
  author: string;
}

class Home extends React.Component<Props, {}> {
  state = {
    text: '',
    author: '',
  };

  componentDidMount = () => {
    this.props.fetchQuotes();
  };

  onButtonClick = () => {
    const { text, author } = this.state;

    this.props.postQuote(text, author);
  };

  render() {
    const { deleteQuote, postError, postIsFetching, requestError, requestIsFetching, quotes, classes } = this.props;

    return (
      <Paper className={classes.home}>
        <Typography variant="h5">Quotes</Typography>
        <div className={classes.quotesContainer}>
          {requestError ? <div>Error: {JSON.stringify(requestError)} Please reload to try again....</div> : null}

          {requestIsFetching ? <div>Loading...</div> : null}

          {quotes.map((quote) => (
            <div className={classes.quote} key={quote.id}>
              <div>text: {quote.text}</div>
              <div>author: {quote.author}</div>
              <Button onClick={() => deleteQuote(Number(quote.id))}>DELETE</Button>
            </div>
          ))}
        </div>
        <Divider />
        <Typography variant="h5">Add new Quote</Typography>
        <TextField label="Text" onChange={(e: any) => this.setState({ text: e.target.value })} />
        <TextField label="Author" onChange={(e: any) => this.setState({ author: e.target.value })} />
        <Button onClick={this.onButtonClick}>Add New Quote</Button>
      </Paper>
    );
  }
}

const mapStateToProps = (state: typeof defaultState) => {
  const { count, fetchQuotes, postQuotes, quotes } = state.quotesReducer;

  return {
    postError: postQuotes.error,
    postIsFetching: postQuotes.isFetching,
    requestError: fetchQuotes.error,
    requestIsFetching: fetchQuotes.isFetching,
    quotes,
  };
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ postQuote, fetchQuotes, deleteQuote }, dispatch);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home));
