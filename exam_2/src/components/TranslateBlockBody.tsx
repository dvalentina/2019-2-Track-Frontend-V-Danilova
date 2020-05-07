import React, { useState } from 'react'
import InputBlock from './InputBlock'
import ResultBlock from './ResultBlock'

export default function TranslateBlockBody() {
    const [value, setValue] = useState('')

    function handleChange(event: any) {
        setValue(event.target.value)
    }

    return(
        <div>
            <InputBlock handleChange={handleChange} value={value} />
            <ResultBlock value={value} />
        </div>
    )
}