import React from 'react';



const PastMeetUp = (props) => {
    return(
        <div className="container">
            <div className="row">
            {
                props.prevMeetUp.map( (meet, index) => {
                    return (
                             <div key={index} className="col-md-4 text-center" >
                                <div className="card text-white border-dark mb-3 card-meet ">
                                    <div className="card-header text-dark">{meet.date}</div>
                                    <div className="card-body text-dark">
                                        <h5 className="card-title">{meet.theme}</h5>
                                        <p className="card-text">{meet.went}</p>
                                    </div>
                                </div>
                            </div>  
                    )
                })
            }
                              

            </div>


          
        </div>
    )
}

export default PastMeetUp;