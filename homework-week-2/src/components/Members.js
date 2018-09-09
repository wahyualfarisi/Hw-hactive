import React from 'react';
import members from '../img/members.png';


const Members = () => {
    return(
        <div className="container" >
        <h3 className="text-left header-title">Members</h3>
        <div className="jumbotron">
            <div className="col-md-12" >
                <div className="col-md-4" >
                  
                        <img src={members} alt="" className="img-member"/>
                    
                </div>
                <div className="col-md-8" >
                
                </div>
            </div>
        </div>
     </div>
    )
}

export default Members;