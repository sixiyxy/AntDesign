import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition'


library.add( fas )

function App() {
  const [ show, setShow ] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="primary" size="10x"/>
        <FontAwesomeIcon icon="arrow-down"/>
        <Menu defaultIndex={'0'} onSelect={(index) => {alert(index)}} mode="horizontal" defaultOpenSubMenus = {['2']} >
          <MenuItem >
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem >
              dropdown 1
            </MenuItem>
            <MenuItem >
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link3
          </MenuItem>
      </Menu>
        <Button size="lg" onClick={() => { setShow(!show)}}> Toggle </Button>
        <Transition
          in={show}
          timeout={300}
          animation = 'zoom-in-left'
        >
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation = 'zoom-in-left'
          wrapper
        >
          <Button btnType={'primary'} size={'lg'}> Large Primary </Button>
        </Transition>
        <Button autoFocus>Hello</Button>
        <Button btnType={'default'} disabled> Disabled Button </Button>
        <Button btnType={'primary'} size={'lg'}> Large Primary </Button>
        <Button btnType={'danger'} size={'sm'}> Small Danger </Button>
        <Button btnType={'link'} href="http://www.baidu.com"> Baidu Link </Button>
        <Button btnType={'link'} href="http://www.baidu.com" disabled> Disabled Link </Button>
        <p> 
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
