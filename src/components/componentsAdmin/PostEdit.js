import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/demoActionCreator';
import { Field, reduxForm } from 'redux-form';
import './CSS/PostEdit.css';

const PostEdit = (props) => {
        return (
          <form className="PostEdit" onSubmit={props.handleSubmit}>
            <label htmlFor="PostName">Post Name</label>
            <Field className="PostEditInput" component={"input"} name={"headline"}/>
            <label htmlFor="PostText">Text</label>
            <Field className="PostEditInput" component={"textarea"} name={"category"}/>
            <label htmlFor="PostImg">Img</label>
            <Field className="PostEditInput" component={"input"} name={"postImg"}/>
            <button>Submit</button>
          </form>
        )

};

const ContactPostEdit = reduxForm({
  form: 'postedit'
})(PostEdit)

export default ContactPostEdit;
