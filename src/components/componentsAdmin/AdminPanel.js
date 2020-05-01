import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPanel extends Component {
  render() {
    let {data} = this.props;
    console.log(data);
    return (
      <div>
        {
          data === true ?
              <div>admin</div>
          :
              <div>noadmin</div>
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
const ConnectedAdminPanel = connect(
  MapStateToProps
)(AdminPanel)

export default ConnectedAdminPanel;
