import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Alert from './alert'

const defaultAlert = () => (
    <Alert/>
)

const alertWithSize = () => (
    <>
        <Alert size="lg" alertText="Large alert"/>
        <Alert size="sm" alertText="Small alert"/>
    </>
)

const alertWithType = () => (
    <>
        <Alert alertType="danger" alertText="Danger"/>
        <Alert alertType="success" alertText="Success"/>
        <Alert alertType="default" alertText="Default"/>
        <Alert alertType="warning" alertText="Warning"/>
    </>
)

const otherAlert = () => (
    <>
        <Alert alertType="default"  alertText="This is a alert with close button" closeable/>
        <Alert alertType="default"  title="This is a title" alertText="This is a alert with title" closeable/>
    </>
)

storiesOf('Alert Component', module)
    .add('Alert', defaultAlert)
    .add('不同尺寸的 alert', alertWithSize)
    .add('不同类型的 alert', alertWithType)
    .add('可配置的 Alert', otherAlert)