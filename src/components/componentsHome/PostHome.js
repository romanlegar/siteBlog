import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/demoActionCreator';
import { Link } from 'react-router-dom';
import './css/PostHome.css'

class PostHome extends Component {
  render() {
    let {arrPost, activeCategory} = this.props;
    return (
      <div>
        <ul className='postConteiner'>
          {
            arrPost.map((item, key)=>{
              if(activeCategory === item.category || activeCategory === 'all'){
                return(
                  <a className='post' href= {'/post/' + item.postLink} key={key}>
                    <img className='postImg' src={item.postImg}/>
                    <h2 className='postText'>{item.headline}</h2>
                  </a>
                )
              }
            })
          }
        </ul>
      </div>
    )
  }
}
const MapStateToProps = (state, ownProps) => {
  return {
    arrPost: state.PostData.arrPost,
    activeCategory: state.headerData.activeFilters
  }
}
const ConnectedPostHome = connect(
  MapStateToProps
)(PostHome)
export default ConnectedPostHome;
