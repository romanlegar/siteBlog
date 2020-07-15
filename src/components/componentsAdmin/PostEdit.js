import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/demoActionCreator';
import { Field, reduxForm } from 'redux-form';


const PostEdit = (props) => {
        return (
          <form className="PostEdit" onSubmit={props.handleSubmit}>
            <p className="headlineForm">Sing In</p>
            <label htmlFor="siteName">siteName</label>
            <Field component={"name"} name={"name"}/>
            <Field component={"text"} name={"text"}/>
            <Field component={"text"} name={"img"}/>
            <button>Submit</button>
          </form>
        )

};

const ContactPostEdit = reduxForm({
  form: 'postedit'
})(PostEdit)

export default ContactPostEdit;
