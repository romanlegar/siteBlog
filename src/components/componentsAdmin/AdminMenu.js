import React, { Component } from 'react';
import Actions from '../../actions/demoActionCreator';
import { connect } from 'react-redux';
import './adminpanel.css';
import FormEdit from './FormEdit';
import PostEdit from './PostEdit';
import ActivFormMenu from './ActivFormMenu';
import { Link } from 'react-router-dom';

class AdminMenu extends Component {

  render() {
    let {activeAdminFilter, filters, createNewPost} = this.props;

    return (
      <div>
        <ul>
          <li onClick={activeAdminFilter} data-id="0">Setting</li>
          <li onClick={activeAdminFilter} data-id="1">NewPost</li>
          <a className="navbar-brand" href='/'>
            Exit
          </a>
        </ul>
        <div>
          <ActivFormMenu counter = {filters}>
            <FormEdit/>
            <PostEdit onSubmit={createNewPost}/>
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
    },
    createNewPost: (value) => {
      dispatch( Actions.createNewPost(value) );
    }

  }
}
const ConnecteAdminMenu = connect(
  MapStateToProps,
  MapDispatchToProps
)(AdminMenu)

export default ConnecteAdminMenu;
