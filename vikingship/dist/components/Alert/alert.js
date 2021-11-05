var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import Transition from '../Transition/transition';
import classNames from "classnames";
import React, { useState } from "react";
import Icon from '../Icon/icon';
export var Alert = function (props) {
    var _a;
    var className = props.className, size = props.size, alertType = props.alertType, closeable = props.closeable, title = props.title, alertText = props.alertText, children = props.children, restProps = __rest(props, ["className", "size", "alertType", "closeable", "title", "alertText", "children"]);
    var _b = useState(true), visiable = _b[0], setVisiable = _b[1];
    var classes = classNames('alert', className, (_a = {},
        _a["alert-" + alertType] = alertType,
        _a["alert-" + size] = size,
        _a['closeable'] = closeable,
        _a));
    var handleClose = function () {
        //e.target.parentNode.style.display="none";
        setVisiable(false);
    };
    return (visiable ?
        React.createElement(Transition, { in: visiable, timeout: 300, animation: "zoom-in-top" },
            React.createElement("div", __assign({ className: classes }, restProps),
                title ?
                    React.createElement("span", { className: "alert-title" }, title) : null,
                closeable && React.createElement("span", { className: "icon-wrapper", onClick: handleClose },
                    React.createElement(Icon, { icon: "times" })),
                React.createElement("span", { className: "alert-innertext" }, alertText))) : null);
};
Alert.defaultProps = {
    closeable: false,
    alertType: 'default',
    alertText: 'default alert'
};
export default Alert;
