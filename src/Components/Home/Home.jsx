import React, { Component,Fragment } from 'react'
import Style from "./Home.module.css" 
import homeImg from "../../img/asset 0.svg"
export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className={Style.home}>
                     <div className="container">
                    
                        <div className={Style.homeContent}>
                          <div className={Style.imgSize}>
                               <img src={homeImg}/>
                               </div> 
                            <h1 className={Style.text}>START REACT</h1>
                           
                            <i className={ `${Style.icon} fas fa-star`}></i>
                            <p className={Style.ptext}>Graphic Artist - Web Designer - Illustrator</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
