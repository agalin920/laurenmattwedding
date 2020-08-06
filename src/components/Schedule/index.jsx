import React from "react";

import './schedule.css';

function Schedule() {
  return(
    <div className="section">
      <h2 className="scheduleHeader">Schedule</h2>
      <hr/>
      <div className='dayLinks'>
        <div className='dayLink'><a href='#friday'>Friday</a></div>
        <div>•</div>
        <div className='dayLink'><a href='#saturday'>Saturday</a></div>
        <div>•</div>
        <div className='dayLink'><a href='#sunday'>Sunday</a></div>
      </div>
      <div className="event" id="friday">
        <div className="left">
          <div>Friday</div>
          <div>November 6th 2020</div>
        </div>
        <div className="right">
          <div>Welcome Party</div>
          <div>7:30 p.m. Dinner & Cocktail</div>
          <div>ARCA</div>
        </div>
      </div>
      <div className="event" id="saturday">
        <div className="left">
          <div>Saturday</div>
          <div>November 7th 2020</div>
        </div>
        <div className="right">
          <div>4:00 p.m. Arrive at Hacienda Chekul</div>
          <div>4:30 p.m. Ceremony starts</div>
          <div>5:00 p.m. Cocktail and Reception</div>
          <div className="transportInfo">Transportation will be provided to and from the wedding venue departure will be between 3:45 P.M. and 4:15pm</div>
        </div>
      </div>
      <div className="event" id="sunday">
        <div className="left">
          <div>Sunday</div>
          <div>November 7th 2020</div>
        </div>
        <div className="right">
          <div>Beach day</div>
          <div className="details">Details regarding Sunday's event will be available on the website</div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
