import React, { useEffect } from 'react';


function NonVegStarters() {


    
    return (
      
      <div >
        <div className="explore-menu-section pt-5 pb-5" id="VegStartersMenuSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="menu-section-heading">Non-Veg Starters Menu</h1>
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/4dsJtCQ5/chilli-chicken.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Chilli Chicken</p>
                        <h1 className="wcu-section-heading">350</h1>
                        </div>
                      
                    </div>
                   
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/V6LxmzF3/chicken-tikka.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Chicken Tikka</p>
                        <h1 className="wcu-section-heading">420</h1>
                        </div>
                      
                    </div>
                   
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/VN4h73c4/fishjpg.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Apollo Fish</p>
                        <h1 className="wcu-section-heading">400</h1>
                        </div>
                      
                    </div>
                   
                </div>
                
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/9fB66Dyd/prawns.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Schezwan Prawns</p>
                        <h1 className="wcu-section-heading">450</h1>
                        </div>
                      
                    </div>
                   
                </div>
            </div>
        </div>
    </div>

      </div>
    );
  }
  
  export default NonVegStarters;