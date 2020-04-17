import TranslateUtils from '../TranslateUtils/index'
import { ITranslateParams } from '../TranslateUtils/types'

const case1: ITranslateParams = {
    lang: 'en',
    text: 'Привет, мир',
}

const case2: ITranslateParams = {
    lang: 'ru-en',
    text: 'Привет, мир',
}

async function testTranslateUtils() {
    const translatedTextFromDetectLangToEng = await TranslateUtils.translateText(case1)
    console.log('From some language to English. Should return 200, ru-en and Hello world')
    console.log(translatedTextFromDetectLangToEng)

    const translatedTextFromRuToEng = await TranslateUtils.translateText(case2)
    console.log('From Russian to English. Should return 200, ru-en and Hello world')
    console.log(translatedTextFromRuToEng)
}

testTranslateUtils()