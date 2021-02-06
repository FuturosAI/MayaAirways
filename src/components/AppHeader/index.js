import React from 'react'
import { Menu ,Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './AppHeader.css'
const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <Menu stackable secondary>
              <Menu.Item>
                <Link to="/" ><Image src={'/images/logonegro.png'} size="medium" className='app-logo' alt='logo' /></Link>
              </Menu.Item>
              <Menu.Item as={Link} name={'Pagina principal'} to='/' style={{color:'#ffff'}}/>
              <Menu.Item as={Link} name={'¿Quienes somos?'} to='/about' style={{color:'#ffff'}}/>
              <Menu.Item as={Link} name={'Proyectos'} to='/projects' style={{color:'#ffff'}}/>
              <Menu.Item as={Link} name={'Contacto'} to='/conctact' style={{color:'#ffff'}}/>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
