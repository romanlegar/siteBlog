import React, { Component } from 'react';
import FormRegistration from './FormRegistration';
import Actions from '../../actions/demoActionCreator';
import { connect } from 'react-redux';
import './adminpanel.css';

class AdminPanel extends Component {
  render() {
    let {data, activeAdminPanel} = this.props;

    const onSubmit = (formData) => {
      console.log(formData);
    }
    return (
      <div>
        {
          data === true ?
              <div>admin</div>
          :
              <div>
                <FormRegistration onSubmit={activeAdminPanel}/>
              </div>
        }
      </div>
    )
  }
}
const MapStateToProps = (state, ownProps) => {
  return {
    data: state.adminPanelData.admin

  }
}
const MapDispatchToProps = ( dispatch ) => {
  return {
    dispatch,
    activeAdminPanel: (dataUser) => {
      dispatch( Actions.activeAdminPanel(dataUser) );
    }
  }
}
const ConnectedAdminPanel = connect(
  MapStateToProps,
  MapDispatchToProps
)(AdminPanel)

export default ConnectedAdminPanel;
