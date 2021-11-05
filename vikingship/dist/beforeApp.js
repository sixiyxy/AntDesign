import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition';
library.add(fas);
function App() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Icon, { icon: "coffee", theme: "primary", size: "10x" }),
            React.createElement(FontAwesomeIcon, { icon: "arrow-down" }),
            React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { alert(index); }, mode: "horizontal", defaultOpenSubMenus: ['2'] },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, { disabled: true }, "cool link2"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "dropdown 1"),
                    React.createElement(MenuItem, null, "dropdown 2")),
                React.createElement(MenuItem, null, "cool link3")),
            React.createElement(Button, { size: "lg", onClick: function () { setShow(!show); } }, " Toggle "),
            React.createElement(Transition, { in: show, timeout: 300, animation: 'zoom-in-left' },
                React.createElement("p", null,
                    "Edit ",
                    React.createElement("code", null, "src/App.tsx"),
                    " and save to reload.")),
            React.createElement(Transition, { in: show, timeout: 300, animation: 'zoom-in-left', wrapper: true },
                React.createElement(Button, { btnType: 'primary', size: 'lg' }, " Large Primary ")),
            React.createElement(Button, { autoFocus: true }, "Hello"),
            React.createElement(Button, { btnType: 'default', disabled: true }, " Disabled Button "),
            React.createElement(Button, { btnType: 'primary', size: 'lg' }, " Large Primary "),
            React.createElement(Button, { btnType: 'danger', size: 'sm' }, " Small Danger "),
            React.createElement(Button, { btnType: 'link', href: "http://www.baidu.com" }, " Baidu Link "),
            React.createElement(Button, { btnType: 'link', href: "http://www.baidu.com", disabled: true }, " Disabled Link "),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
export default App;
