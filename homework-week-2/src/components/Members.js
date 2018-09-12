import React from 'react';

const Members = (props) => {
    return(
        <div className="container" >
        <h3 className="text-left header-title">Members</h3>
        <div className="jumbotron">
            <div className="col-md-12" >
               {
                   props.members.map( (member, index) => {
                       return (
                           <ul key={index} >
                                <li className="text-left" >{member}</li>
                           </ul>
                       )
                   })
               }
            </div>
        </div>
     </div>
    )
}
export default Members;