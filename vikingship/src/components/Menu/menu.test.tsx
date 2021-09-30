import React from "react";
import { render } from "@testing-library/react";

import Menu,{ MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps:MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
}

const NiceMenu = (props) => 

describe('test Menu and MenuItem component', () => {
    it('should render correct Menu and MenuItem based on default props', () => {

    })
    it('click items should change activate and call the right callback', () => {
        
    })
    it('should render vertical mode when mode is set to vertical', () => {
        
    })
})