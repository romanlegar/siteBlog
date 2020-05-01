import React, { Component } from 'react';
import HeaderHome from './HeaderHome';
import PostHome from './PostHome';
import FooterHome from './FooterHome';


class Home extends Component {
  render() {
    return (
      <div>
        <HeaderHome/>
        <PostHome/>
        <FooterHome/>
      </div>
    )
  }
}

export default Home;
