import React, { Component,Fragment } from 'react'
import Style from "./Footer.module.css"
export default class Footer extends Component {
    render() {
        return (
            <Fragment>
              <div className={Style.footerBg}>
                  <div className="container p-5  text-white text-center">
                      <div className="row">
                          <div className="col-md-4">
                              <h3>LOCATION</h3>
                              <p>2215 John Daniel Drive<br/>
                               Clark, MO 65243</p>
                          </div>

                          <div className="col-md-4">
                              <h3>AROUND THE WEB</h3>
                              <p>2215 John Daniel Drive<br/>
                               Clark, MO 65243</p>
                          </div>

                          <div className="col-md-4">
                              <h3>ABOUT FREELANCER</h3>
                              <p>Freelance is a free to use, MIT <br/>licensed Bootstrap theme created by .</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={Style.copy}>
                  <p className=" text-center text-white p-4">Copyright © Your Website 2021</p>
              </div>
            </Fragment>
        )
    }
}
