import * as React from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import increment from '../../Redux/actions/increment';

class Home extends React.Component<{ increment: Function, count: Number }>{
  render() {

    const { increment, count } = this.props;

    return (
      <>
        <h2>Count is: {count}</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => increment()}
        >
          Increment
        </Button>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ count: state.mainReducer.count })

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({ increment }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
