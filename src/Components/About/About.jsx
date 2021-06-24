import React, { Component,Fragment } from 'react'
import Style from "./About.module.css"
export default class About extends Component {
    render() {
        return (
            <Fragment>
                <div className={Style.about}>
                    <div className="container text-white my-2 py-5">
                        <h2 className={`${Style.main}  text-center my-4 py-3`}>ABOUT</h2>
                        {/* <i className={ `${Style.icon} fas fa-star pb-4`}></i> */}
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <p className="w-75 m-auto">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-md-4">
                                <p className="w-75 m-auto">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
