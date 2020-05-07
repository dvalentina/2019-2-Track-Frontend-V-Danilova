import React from 'react'
import LanguageLine from './LanguageLine'
import SwapLanguageButton from './SwapLanguageButton'

export default function TranslateBlockHeader() {
    return (
        <div>
            <LanguageLine type='input' />
            <SwapLanguageButton />
            <LanguageLine type='result' />
        </div>
    )
}