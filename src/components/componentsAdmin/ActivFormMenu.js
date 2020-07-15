import React, { Component } from 'react';

const ActivFormMenu = ({counter ,children})=>(
  <div className="ActivFormMenu">
    {children[counter]}
  </div>
);

export default ActivFormMenu;
