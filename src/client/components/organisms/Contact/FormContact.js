import React, {  Fragment,  } from 'react'

import LoaderSuccess   from '../../../components/atoms/Loader/LoaderSuccess';

import { connect } from "react-redux";
import { submitFormToFirebase } from '../../../../backend/dux/actions/appActions';

import { Formik, Form, Field } from 'formik'


const FormContact = ({ dispatchSendEmailFirebase }) => {
  return (
    <Fragment>
    <Formik
            initialValues={{
              name:"",
             email:"",
             message:"",
           }}
           onSubmit={( values, { resetForm } ) => {
             const { name, email,  message } = values
             dispatchSendEmailFirebase(name, email, message)
             resetForm()
           }}
    > 
   
   
     <Form className="contact100-form validate-form">
       <span className="contact100-form-title">
         Send Us A Message
       </span>
       <LoaderSuccess />

       <label className="label-input100" htmlFor="email">Enter your name *</label>
       <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
         <Field id="email" className="input100" type="text" name="name" placeholder="Eg. Full Name"
         required
           />
         <span className="focus-input100"></span>
       </div>

       <label className="label-input100" htmlFor="email">Enter your Email *</label>
       <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
         <Field id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com"
         required
         />
         <span className="focus-input100"></span>
       </div>

       <label className="label-input100" htmlFor="message">Message *</label>
       <div className="wrap-input100 validate-input" data-validate = "Message is required">
         <Field id="message" className="input100" name="message" placeholder="Write us a message"
         required type="textarea" />
         <span className="focus-input100"></span>
       </div>

       <div className="container-contact100-form-btn">
         <button type="submit" className="contact100-form-btn" >
           Send Message
         </button>
       </div>
   </Form>
   </Formik>
   </Fragment>
  )
}


const mapDispatchToProps  = {
    dispatchSendEmailFirebase: (name, email, message) => submitFormToFirebase(name, email, message)
}

const mapStateToProps = state => ({
    app: state.app
})

const Forms = connect(mapStateToProps, mapDispatchToProps)(FormContact)
export default Forms

