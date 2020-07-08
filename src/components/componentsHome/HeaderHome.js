import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/demoActionCreator';
import './css/HeaderHome.css';

class HeaderHome extends Component {
  render() {
    const { nameSite, filters, activeFilter } = this.props;
    return (
      <div>
        <h1 className='headline'>{nameSite}</h1>
        <ul className='nav'>
          {
            filters.map((item,key)=>(
              <li className='nav-item' key={key} onClick={activeFilter} data-value={item}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const MapStateToProps = (state, ownProps) => {
  return {
    nameSite: state.headerData.nameSite,
    filters: state.headerData.filters
  }
}
const MapDispatchToProps = ( dispatch ) => {
  return {
    dispatch,
    activeFilter: (event) => {
      dispatch( Actions.activeFilter(event) );
    }
  }
}
const ConnectedHeaderHome = connect(
  MapStateToProps,
  MapDispatchToProps
)(HeaderHome)

export default ConnectedHeaderHome;
