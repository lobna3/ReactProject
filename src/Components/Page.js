import React from 'react';
import logo from './logo.svg';
import './App.css';



const Page = () => {
    return (
        <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h4>Upcoming Classes</h4>
                <ul class="timeline">
                    <li>
                        <a target="_blank" href="https://www.tsg.mx/SIECram">SIE 2-Day Cram Course</a>
                        <a href="#" class="float-right">February 23&24, 12p-8p Eastern</a>
                        <p>All the material needed for the SIE, jam packed into 2, 8-hour days over a weekend. Included are all replays, additional written posts, pictures/charts/graphics, and a video animation library of additional content to help make the material understandable.</p>
                        <p>Information and registration at <a href="http://www.TSG.mx/SIECram">www.TSG.mx/SIECram</a></p>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.tsg.mx/SIEStudy">SIE 6-Class Study Course</a>
                        <a href="#" class="float-right">Starts February 20th, 7p-10p Eastern</a>
                        <p>All the material needed for the SIE, spread out over 6 weeks to allow processing and understanding. Included are all replays, additional written posts, pictures/charts/graphics, and a video animation library of additional content to help make the material understandable.</p>
                        <p>Dates for the class: 2/20, 2/27, 3/6, 3/13, 3/20, and 3/27</p>
                        <p>Information and registration at <a href="http://www.TSG.mx/SIEStudy">www.TSG.mx/SIEStudy</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
      );
}


export default Page;