import React from 'react'
import * as T from '../types/LanguageBlock.types'

export default function LanguageBlock(props: T.ILanguageBlockProps) {
    return (
        <button>
            {props.name}
        </button>
    )
}