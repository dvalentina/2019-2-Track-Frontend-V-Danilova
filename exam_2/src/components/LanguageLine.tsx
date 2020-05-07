import React from 'react'
import LanguageBlock from './LanguageBlock'
import * as T from '../types/LanguageLine.types'

export default function LanguageLine(props: T.ILanguageLineProps) {
    let detectLanguage = null;
    let languages: Array<any> = []
    languages.push(<LanguageBlock name='ENGLISH' />)
    languages.push(<LanguageBlock name='РУССКИЙ' />)
    if (props.type === 'input') {
        detectLanguage = <LanguageBlock name='DETECT LANGUAGE' />
    }
    return (
        <div>
            {detectLanguage}
            {languages}
        </div>
    )
}