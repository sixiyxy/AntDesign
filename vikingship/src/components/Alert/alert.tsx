import  Transition  from '../Transition/transition';
import classNames from "classnames";
import React, { FC, useState } from "react";
import Icon from '../Icon/icon'

export type AlertSize = 'lg' | 'sm'
export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface AlertProps {
    className?: string;
    size?: AlertSize;
    alertType?: AlertType;
    closeable?: boolean;
    title?: string;
    alertText?: string;
}

export const Alert: FC<AlertProps> = (props) => {
    const {
        className,
        size,
        alertType,
        closeable,
        title,
        alertText,
        children,
        ...restProps
    } = props
    const [ visiable,setVisiable ] = useState(true);
    const classes = classNames('alert', className, {
        [`alert-${alertType}`]: alertType,
        [`alert-${size}`]: size,
        'closeable': closeable
    })
    const handleClose = () => {
        //e.target.parentNode.style.display="none";
        setVisiable(false);
    }
    return (
        visiable ?
        <Transition
            in = {visiable}
            timeout={300}
            animation="zoom-in-top"
        >
            <div
                className = {classes}
                {...restProps}
            >
                {title? 
                    <span
                        className="alert-title"            
                    >{title}</span> : null
                }
                {closeable && <span className="icon-wrapper" onClick={handleClose}><Icon icon="times" /></span>}
                <span className="alert-innertext">{alertText}</span>
            </div>  
        </Transition> : null 
    )
}

Alert.defaultProps = {
    closeable: false,
    alertType: 'default',
    alertText: 'default alert'
}
export default Alert;