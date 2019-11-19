import React, { Component } from 'react';
import Staff from '../Staff/Staff'
import SideBar from "../layout/SideBar"
 
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
         <div className="row">
           <div className="col-md-10" >
                <Staff/>
           </div>
            <div className="col-md-2">
                <SideBar/>  
                          </div>
        </div>
         );
    }
}
 
export default Dashboard;