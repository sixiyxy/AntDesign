import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button'
import { withInfo } from '@storybook/addon-info'

const defaultButton = () => (
    <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
    <>
        <Button size="lg">Large button</Button>
        <Button size="sm">Small button</Button>
    </>
)

const buttonWithType = () => (
    <>
        <Button btnType="primary">primary button</Button>
        <Button btnType="danger">danger button</Button>
        <Button btnType="link" href="https://baidu.com">link button</Button>
    </>
)
storiesOf('Button Component', module)
    .addDecorator(withInfo)
    .addParameters({
        info: {
            text: 'this is a very nice component',
            inline: true
        }
    })
    .add('默认 Button', defaultButton)
    .add('不同尺寸的Button', buttonWithSize,{info: {inline: false}})
    .add('不同类型的Button',buttonWithType)