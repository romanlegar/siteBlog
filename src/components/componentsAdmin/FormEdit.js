import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/demoActionCreator';
import { Field, reduxForm } from 'redux-form';

const FormEdit = (props) => {
        return (
          <form className="formEdit" onSubmit={props.handleSubmit}>
            <p className="headlineForm">Sing In</p>
            <label htmlFor="siteName">siteName</label>
            <Field component={"input"} name={"name"}/>
            <Field component={"input"} name={"login"}/>
            <Field component={"input"} name={"password"}/>
            <button>Submit</button>
          </form>
        )
};

const ContactFormEdit = reduxForm({
  form: 'edit'
})(FormEdit)

export default ContactFormEdit;
