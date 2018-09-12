import React from 'react';
import bgimage from '../img/bgimage.png';
import members from '../img/members.png';

const sectionStyle = {
    width: "100%",
    height: "400%",
    backgroundImage: `url(${bgimage}) `
}

class MainTop extends React.Component{
    constructor(props){
        super(props);
        this.handleJoin       = this.handleJoin.bind(this);
        this.handleFormCancel = this.handleFormCancel.bind(this);
        this.handleFormJoin   = this.handleFormJoin.bind(this);
        this.state = {
            join: false,
            error: undefined
        }
    }

    handleJoin(){
      this.setState({
          join: true
      })
    }

    handleFormJoin(e){
        e.preventDefault();
        const email = e.target.elements.join.value.trim();  
        const error = this.props.handleFormJoin(email);
        
        this.setState( () => {
            return {
                error: error
            }
        })
        
        if(!error){
            e.target.elements.join.value = ''
        }
    }

    handleFormCancel(){
        this.setState({
            join: false,
            error: undefined
        })
    }

    render(){
        console.log(this.state.join);
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
                                <h1 className="text-left">{this.props.title} </h1>
    
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
                                     <button className="btn btn-primary btn-lg" onClick={this.handleJoin} role="button">JOIN US &raquo;</button>
                                </div>
                                <br /> <br />
                                {
                                    this.state.error && (
                                        <div className="alert alert-warning">
                                             {this.state.error}
                                         </div>
                                    )
                                }
                                
                                <br /> <br />
                                {
                                    this.state.join && (
                                        <div>
                                            <form onSubmit={this.handleFormJoin}>
                                                <input className="form-control" type="text" name="join" />
                                                <button className="btn btn-info btn-danger">GO!</button>
                                                <button onClick={this.handleFormCancel} className="btn btn-info btn-warning">Cancel</button>
                                            </form>
                                        </div>
                                    )
                                }

                                                                 
                            </div>
                            
    
                        </div>
    
    
                    
                    </div>
                </div>      
            </div>
        )
    }
    
}

export default MainTop;