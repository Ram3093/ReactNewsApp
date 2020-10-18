import React, { Component } from 'react'
// import moment from 'moment'

const badgeStyle={
    display:"inlineBlock",
    position:"absolute",
    top:"5px",
    right:"15px",
    backgroundColor:"red",
    color:"#fff",
    borderRadius:"15px",
    fontWeight:"bolder",
    wordSpacing:"1px"
}

 class travel extends Component {
    render() {
        return (
               
            <div style={{marginTop:"50px"}}>
               
                <div className='fluid-container #eceff1 blue-grey lighten-5' style={{height:"",padding:"30px 0 50px"}}>
                   <div className='container'>
                         <div className='row'>

                              <div className='col l3 m4 s6'>

                                  <div className="card">
                                        <div className="card-image">
                                                <img src="https://picsum.photos/200/300" height="150" width='100' alt='business-news-img' />
                                                <span className=' badge' style={ badgeStyle } >travel</span>
                                        </div>

                                        <div className="card-content">
                                          <p>Due to some reason can't get travel news.</p>
                                        </div>
                                   </div>

                              </div>
                              
                            </div>
                        </div>
                    </div>
             </div>
        )
    }
}

export default travel
