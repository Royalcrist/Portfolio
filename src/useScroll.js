import React, { useState } from 'react'

export default function useScroll(initialValue) {
    const [ value, setValue] = useState(initialValue);

    function handleScroll(e) {
        setValue(Math.round((e.target.scrollTop / e.target.scrollHeight) * 100));
    }


    return {
        value,
        onScroll: handleScroll
    }
}