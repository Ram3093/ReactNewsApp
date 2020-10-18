import React, { Component } from 'react'
import './navbar.css'
import { NavLink,Link } from 'react-router-dom'

class Navbar extends Component {
   state={
       searchField:""
   }

    handleChange=(e)=>{
        //console.log(e.target.value)
        this.setState({
            searchField:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
      //  console.log(e)
    }

    render() {
       // console.log('/'+this.state.searchField)
        return (
            <div >
                <div className='fluid-container header'  >
                       <div className='container white-text' style={{padding:"7px"}}>
                         <Link to='/' style={{ textDecoration:"none",color:"#fff"}}>
                         <h5 style={{fontWeight:"bolder",letterSpacing:"1px"}} > ReactNewsApp </h5>
                          <p style={{marginTop:"5px"}}>Get the latest news</p>
                         </Link> 
                       </div>
                </div>
                <div className='container'>
                      <nav>
                            <ul  >
                                 <li><NavLink to='/'>HOME</NavLink></li>
                                 <li><NavLink to="/world">WORLD</NavLink></li>
                
                                 <li><NavLink to="/business">BUSINESS</NavLink></li>
                                 <li><NavLink to="/science">SCIENCE</NavLink></li>
                                 <li><NavLink to="/sports">SPORTS</NavLink></li>
                                 <li><NavLink to="/tech">TECH</NavLink></li>
                                
                                 <li><NavLink to="/health">HEALTH</NavLink></li>
                                                           
                            </ul>
                            <form className='right'>
                               <div className='row'>
                                   <form onSubmit={ this.handleSubmit }>
                                      <input type='text' className='col 10' style={{width:"75%",height:"2rem"}} onChange={ this.handleChange } />
                                      <Link to={ "/"+this.state.searchField } >
                                      <button type='submit' className='btn white' style={{padding:"0",lineHeight:"0",height:"25px",verticalAlign:"none"}}>
                                      <i className="material-icons col 2" style={{backgroundColor:"orange",cursor:"pointer",height:"29px",marginTop:"2px"}}>search</i>
                                       
                                      </button>
                                      </Link>                                     
                                  </form>
                               </div>
                                
                            </form>
                      </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
