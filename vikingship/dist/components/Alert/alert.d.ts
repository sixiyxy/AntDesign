import { FC } from "react";
export declare type AlertSize = 'lg' | 'sm';
export declare type AlertType = 'success' | 'default' | 'danger' | 'warning';
interface AlertProps {
    className?: string;
    size?: AlertSize;
    alertType?: AlertType;
    closeable?: boolean;
    title?: string;
    alertText?: string;
}
export declare const Alert: FC<AlertProps>;
export default Alert;
