import React, { useEffect } from 'react';

import './VegStarters.css'
function VegStarters() {


    
    return (
      
      <div >
        <div className="explore-menu-section pt-5 pb-5" id="VegStartersMenuSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="menu-section-heading">Veg Starters Menu</h1>
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/9QcyryPv/manchuria.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Veg Manchuria</p>
                        <h1 className="wcu-section-heading">300</h1>
                        </div>
                      
                    </div>
                   
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/g248RrNr/paneer-tikka.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Paneer Tikka</p>
                        <h1 className="wcu-section-heading">400</h1>
                        </div>
                      
                    </div>
                   
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/fTncQGVW/veg-lollipopjpg.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Veg Lolli Pop</p>
                        <h1 className="wcu-section-heading">300</h1>
                        </div>
                      
                    </div>
                   
                </div>
                
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/RVzByxHL/Butter-Garlic-Mushrooms.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Chilli Mushroom</p>
                        <h1 className="wcu-section-heading">300</h1>
                        </div>
                      
                    </div>
                   
                </div>
            </div>
        </div>
    </div>

      </div>
    );
  }
  
  export default VegStarters;