import React, {useContext} from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Context} from '../store/appContext'
import { Link } from 'react-router-dom';
import brand from '../../img/brand.png'


const NavbarTop = (props) =>{
  const {store, actions} = useContext(Context);

    return (<Navbar bg="light" expand="lg">
    <Link to='/' className='navbar-brand'><img src={brand} alt='brand' width='90' height='40'/></Link>
      <Nav className="ml-auto relative">
        <NavDropdown title={`Favorites  ${store.favorites.length} `} id="dropdown-menu-align-left">
          {(store.favorites.length === 0)?
            <NavDropdown.Item><p>Empty</p></NavDropdown.Item>
            :
            store.favorites.map((element, index)=>{
                return (
                <NavDropdown.Item key={index} >{element.name}
                  <button className='btn' onClick={()=>{actions.deleteFavorite(store.favorites,element.name)}}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </button>
                </NavDropdown.Item>
                )
            })
        }
        </NavDropdown>
      </Nav>
  </Navbar>)
}

export default NavbarTop;