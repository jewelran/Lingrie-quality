import React from 'react'
import "./Widget.css"
import { FaInfo } from "react-icons/fa";
function Widget() {
    return (
        <div className="widget">
            <div className="widget__top">
                <div className="widget__header d-flex justify-content-between">
                    <h4>Lingerie Quality</h4>
                    <FaInfo/>
                </div>
                <div className="widget__body">
                    <ul className="widget__option">
                        <li>
                            <h4>Salary Job Search Fees</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                        <li>
                            <h4>Salary Job Search Fees</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                        <li>
                            <h4>Salary Job Search Fees</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                        <li>
                            <h4>Salary Job Search Fees</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                        <li>
                            <h4>Salary Job Search Fees</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                    </ul>
                </div>
            </div>
            <div className="widget__top">
            <div className="widget__header d-flex justify-content-between">
                    <h4>Today's top courses</h4>
                    <FaInfo/>
                </div>
                <div className="widget__body">
                    <ul className="widget__option">
                        <li>
                            <h4>Today's top courses</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                        <li>
                            <h4>Salary Job Search Fees</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                        <li>
                            <h4>Salary Job Search Fees</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                        <li>
                            <h4>Salary Job Search Fees</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                        <li>
                            <h4>Salary Job Search Fees</h4>
                            <p>5d ago * 4,45 reads</p>
                        </li>
                      
                    </ul>
                </div>
            </div>
           
        </div>
    )
}

export default Widget
