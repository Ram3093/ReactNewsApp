import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Body extends Component {
     render(){
        // console.log(window.location.url)
         const s=window.location.href.slice(21) ;
         console.log(s)
        return (
            <div className='container' style={{marginTop:"20px"}}>
              <div className='row' style={{marginBottom:"0"}}>
                   <div className='col l8'>
                     <h5 style={{fontWeight:"bolder"}}>World</h5>
                       <hr style={{fontWeight:"bolder"}}/>
                   </div>

                   <div className='col l4'>
                      <nav>
                          <ul>
                              <li><Link to={'/home/latest'}>Latest</Link></li>
                              <li><Link to='/home/top'>Top</Link></li>
                              <li><Link to='/home/feature'>Feature</Link></li>
                              
                          </ul>
                      </nav>

                   </div>

              </div>
                
            </div>
        )
    }
}

export default Body
