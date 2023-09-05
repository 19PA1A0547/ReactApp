import "./Pricingcard.css"

import React from 'react';
import {Link} from 'react-router-dom';

const Pricingcard = () => {
  return (
    <div className="Pricing">
     <div className="card-container">
      <div className="card">
        <h3>Basic</h3>
        <soan className="bar"></soan>
        <p className="btc">$100</p>
        <p>- 3 days -</p>
        <p>-3 Pages -</p>
        <p>-Featured -</p>
        <p>-Responsive Design -</p>
        <Link to="/Contact" className="btn">Purchase Now</Link>
      </div>  
      <div className="card">
        <h3>Premium</h3>
        <soan className="bar"></soan>
        <p className="btc">$ 200</p>
        <p>- 2 days -</p>
        <p>-5 Pages -</p>
        <p>-Featured -</p>
        <p>-Responsive Design -</p>
        <Link to="/Contact" className="btn">Purchase Now</Link>
      </div>  
      <div className="card">
        <h3>Business</h3>
        <soan className="bar"></soan>
        <p className="btc">$ 300</p>
        <p>- 5 days -</p>
        <p>-8 Pages -</p>
        <p>-Featured -</p>
        <p>-Responsive Design -</p>
        <Link to="/Contact" className="btn">Purchase Now</Link>
      </div>  
     </div>
    </div>
  );
}

export default Pricingcard;
