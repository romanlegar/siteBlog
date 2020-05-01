import { connect } from 'react-redux';
import App from '../components/App';
import demoActionCreator from '../actions/demoActionCreator';

const mapStateToProps = (state, ownProps) => {
  return {
    SomeData: "SomeValue"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    demoActionCreator: () => {
      dispatch( demoActionCreator.doSomsng() );
    }
  };
};

const MyApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default MyApp;
