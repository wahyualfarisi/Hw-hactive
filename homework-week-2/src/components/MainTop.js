import React from 'react';
import meetup from '../img/meetup.png';
import bgimage from '../img/bgimage.png';
import members from '../img/members.png';


const sectionStyle = {
    width: "100%",
    height: "400%",
    backgroundImage: `url(${bgimage}) `
}



const MainTop = () => {
    return(
        <div>
            <div className="jumbotron" style={sectionStyle} >
                <div className="container">
                    <div className="row"  >
                        <div className="col-md-4" >
                            <div className="img-thumnail">
                            <img src={members} alt="" className="img-bulet" width="250px" />
                            </div>                           
                        </div>
                        <div className="col-md-8 space-padding">
                            <h1 className="text-left">Hacktive 8 Meetup </h1>

                            <div className="row space-padding" >
                                <div className="col-md-2" >
                                  <h5 className="text-left">Location  </h5>
                                </div>
                                <div className="col-md-6" >
                                  <h5 className="text-left">: Jakarta, Indonesia </h5>
                                 </div>                        
                            </div>

                            <div className="row space-padding" >
                                <div className="col-md-2" >
                                     <h5 className="text-left">Members  </h5>
                                </div>
                                <div className="col-md-6" >
                                    <h5 className="text-left">: 14045 </h5>
                                </div>                        
                            </div>

                            <div className="row space-padding" >
                                <div className="col-md-2" >
                                    <h5 className="text-left">Organizers  </h5>
                                </div>
                                <div className="col-md-6" >
                                    <h5 className="text-left">: Ardhi Wiranata </h5>
                                </div>                        
                            </div>

                            <div className="text-left">
                                 <a className="btn btn-primary btn-lg " href="#" role="button">JOIN US &raquo;</a>
                            </div>
                              
                        </div>
                        

                    </div>


                
                </div>
            </div>      
        </div>
    )
}

export default MainTop;