import React, { useEffect } from 'react';


function Soups() {


    
    return (
      
      <div >
        <div className="explore-menu-section pt-5 pb-5" id="VegStartersMenuSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="menu-section-heading">Soups</h1>
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/nhmT5r63/Homemade-Vegetable-Soup-Recipe-2-1200.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Vegetable Soup</p>
                        <h1 className="wcu-section-heading">150</h1>
                        </div>
                      
                    </div>
                   
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/W468NKpr/vegan-potato-soup-22-sq-1.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Potato Soup</p>
                        <h1 className="wcu-section-heading">120</h1>
                        </div>
                      
                    </div>
                   
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/qMSjjyZt/images.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Paya</p>
                        <h1 className="wcu-section-heading">250</h1>
                        </div>
                      
                    </div>
                   
                </div>
                
                <div className="col-12 col-md-6 col-lg-3  ">
                    
                    <div className="shadow menu-item-card p-3 mb-3 " style={{display:'flex',flexDirection:'row',padding:50}}>
                        <img src="https://i.postimg.cc/FKQGQmvN/13paya-soup.jpg" className="menu-item-image wcu-card-image w-50" />
                        <div style={{marginLeft:60}}>
                        <p>Chicken Soup</p>
                        <h1 className="wcu-section-heading">200</h1>
                        </div>
                      
                    </div>
                   
                </div>
            </div>
        </div>
    </div>

      </div>
    );
  }
  
  export default Soups;