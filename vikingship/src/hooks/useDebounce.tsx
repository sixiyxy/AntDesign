import React, { useState, useEffect } from "react";

function useDebounce(value: any, delay = 300){
    const [ debouncedValue, setDebouncesValue ] = useState(value)
    useEffect(() => {
        const handler = window.setTimeout(() => {
            setDebouncesValue(value)
        },delay)
        return () => {
            clearTimeout(handler)
        }
    },[value, delay])
    return debouncedValue
}

export default useDebounce;