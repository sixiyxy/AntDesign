import React, {  ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react'
import classNames from 'classnames'

// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }

// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string;
    /**设置 Button的禁用 */
    disabled?: boolean;
    /**设置 Button的尺寸 */
    size?: ButtonSize;
    /**设置 Button的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps 
    } = props
    //btn, btn-lg, btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        //'disabled': (btnType === ButtonType.Link) && disabled
        'disabled': (btnType === 'link') && disabled
    })
    //if (btnType === ButtonType.Link && href ){
    if (btnType === 'link' && href ){
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    }else {
        return(
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }

}

Button.defaultProps = {
    disabled: false,
    //btnType: ButtonType.Default
    btnType: 'default'
}

export default Button;