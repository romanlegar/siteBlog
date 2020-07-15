import React, { Component } from 'react';
import Actions from '../../actions/demoActionCreator';
import { connect } from 'react-redux';
import './adminpanel.css';
import FormEdit from './FormEdit';
import PostEdit from './PostEdit';
import ActivFormMenu from './ActivFormMenu';


class AdminMenu extends Component {

  render() {
    let {activeAdminFilter, filters} = this.props;
    return (
      <div>
        <ul>
          <li onClick={activeAdminFilter} data-id="0">Setting</li>
          <li onClick={activeAdminFilter} data-id="1">NewPost</li>
          <li onClick={activeAdminFilter} data-id="3">Excit</li>
        </ul>
        <div>
          <ActivFormMenu counter = {filters}>
            <FormEdit/>
            <PostEdit/>
          </ActivFormMenu>

        </div>
      </div>
    )
  }
}

const MapStateToProps = (state, ownProps) => {
  return {
    filters: state.adminPanelData.activeFilter
  }
}
const MapDispatchToProps = ( dispatch ) => {
  return {
    dispatch,
    activeAdminFilter: (element) => {
      dispatch( Actions.activeAdminFilter(element) );
    }
  }
}
const ConnecteAdminMenu = connect(
  MapStateToProps,
  MapDispatchToProps
)(AdminMenu)

export default ConnecteAdminMenu;
