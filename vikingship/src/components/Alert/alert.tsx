import classNames from "classnames";
import React, { FC } from "react";
import Icon from '../Icon/icon'

export type AlertSize = 'lg' | 'sm'
export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface AlertProps {
    className?: string;
    size?: AlertSize;
    alertType?: AlertType;
    closeable?: boolean;
    title?: string;
    alertText: string;
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
    const classes = classNames('alert', className, {
        [`alert-${alertType}`]: alertType,
        [`alert-${size}`]: size,
        'closeable': closeable
    })
    const handleClose = () => {
        
    }
    return (
        <div
            className = {classes}
            {...restProps}
        >
            {title? 
                <div
                    className="alert-title"            
                >{title}</div> : null
        }
            <div className="alert-innertext">{alertText}</div>
            {closeable && <div className="icon-wrapper"><Icon icon="times" onClick={() => { handleClose() }}/></div>}
        </div>
    )
}

export default Alert;