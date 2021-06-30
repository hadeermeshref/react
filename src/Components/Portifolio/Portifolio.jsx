import React, { Component,Fragment } from 'react'
import Style from "./Portifolio.module.css"
import img1 from "../../img/asset 1.png"
import img2 from "../../img/asset 2.png"
import img3 from "../../img/asset 3.png"
import img4 from "../../img/asset 4.png"
import img5 from "../../img/asset 5.png"
import img6 from "../../img/asset 6.png"
export default class Portifolio extends Component {
    render() {
        return (
            <Fragment>
                <div className="portifolio">
                    <div className="container text-center">
                       <h2 className={`${Style.main } mt-5`}>PORTFOLIO</h2>
                       <i className={ `${Style.icon} fas fa-star pb-4`}></i>
                        <div className="row my-4">
                            <div className="col-md-4 mb-3 ">
                                <img className="w-100 rounded" src={img1} alt=""/>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img className="w-100 rounded" src={img2} alt=""/>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img className="w-100 rounded" src={img3} alt=""/>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100 rounded" src={img4} alt=""/>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100 rounded" src={img5} alt=""/>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100 rounded" src={img6} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
