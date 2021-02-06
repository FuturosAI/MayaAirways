import React from 'react'
import { Menu ,Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <Menu stackable secondary>
              <Menu.Item>
                <Image src={'/images/logoblanco.png'} size="medium" className='app-logo' alt='logo' />
              </Menu.Item>
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/projects">Projects</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/conctact">Contact us</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
