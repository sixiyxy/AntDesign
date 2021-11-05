import { useState, useEffect } from "react";
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(value), debouncedValue = _a[0], setDebouncesValue = _a[1];
    useEffect(function () {
        var handler = window.setTimeout(function () {
            setDebouncesValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
export default useDebounce;
