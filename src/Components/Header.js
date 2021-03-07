import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu'
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    toggleDropdown = () => {
        this.setState({open: !this.state.open})
      }
    render() {
    return(
        <div>
            <header className='container-h1'>
                <h1>Band Social</h1>
             <section className='container'>   
            <div >
                <HamburgerMenu 
                isOpen = {this.state.open} 
                menuClicked = {this.toggleDropdown}
                width={25}
                height={22}
                color='#F1FAEE'/>
            </div>
            {this.state.open
          ? (
            <nav className = 'nav'>
                <Link to = '/' className='nav-links'>Home</Link>
                <Link to = '/events' className='nav-links'>Events</Link>
                <Link to = '/blog' className='nav-links'>Blog</Link>
                <Link to = '/add-post' className='nav-links'>Add Post</Link>
                <Link to = '/groups' className='nav-links'>Groups</Link>
                <Link to = '/chat/:id' className='nav-links'>Chat</Link>
                <Link to = '/profile' className='nav-links'>Profile</Link>
                <Link to = '/auth' className='nav-links'>Login</Link>
            </nav>
            )
            : null}
            </section>
            </header>
        </div>
        )
    }
}
export default withRouter(Header)