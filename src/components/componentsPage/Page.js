import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Page.css';
class Page extends Component {
  render() {
    let {match, data} = this.props;
    console.log(match.params.name);
    return (
      <div>
        {
          data.map((item, key)=>{
            if(item.postLink === match.params.name){
              return(
                <div>
                  <header className='header'>
                    <h1>{item.headline}</h1>
                  </header>
                  <p className='pageContent'>{item.content.text}</p>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}
const MapStateToProps = (state, ownProps) => {
  return {
    data: state.PostData.arrPost

  }
}
const ConnectedPage = connect(
  MapStateToProps
)(Page)

export default ConnectedPage;
