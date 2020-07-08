import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/demoActionCreator';
import { Field, reduxForm } from 'redux-form'

const ContactForm = (props) => {
        return (
          <form className="formAdmin" onSubmit={props.handleSubmit}>
            <p className="headlineForm">Sing In</p>
            <Field component={"input"} name={"login"}/>
            <Field component={"input"} name={"password"}/>
            <button>Submit</button>
          </form>
        )

};

const ContactReduxForm = reduxForm({

  form: 'contact'
})(ContactForm)

export default ContactReduxForm;
