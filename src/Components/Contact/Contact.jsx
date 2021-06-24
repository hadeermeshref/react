import React, { Component,Fragment } from 'react'
import Style from "./Contact.module.css"
export default class Contact extends Component {
    render() {
        return (
            <Fragment>
               <div className="container  ">
                   <div className=" text-center ">
                   <h2 className={`${Style.main}  text-center my-4 py-3`}>CONTACT ME</h2>
                   <i className={ `${Style.icon} fas fa-star pb-4 `}></i>
                   </div>
               <form>
  <div className="form-group">
    
    <input type="text" className={`${Style.formBorder} my-3  form-control`} id="formGroupExampleInput" placeholder="Name"/>
  </div>
  <div className="form-group">
 
    <input type="email" className={`${Style.formBorder} my-3  form-control`} id="formGroupExampleInput2" placeholder="Email address"/>
  </div>
  <div className="form-group">
  <input type="text" className={`${Style.formBorder} my-3  form-control`} id="formGroupExampleInput" placeholder="Phone Number"/>
  </div>
  <div className="form-group">
 <textarea name="message" className={`${Style.formBorder} my-3  form-control`} cols="30" rows="10" placeholder="Message"></textarea>
  
  </div>
  <button type="submit" className="p-3 my-3 btn btn-info ">Send</button>
</form>
               </div>
            </Fragment>
        )
    }
}
