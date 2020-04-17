import { YANDEX_TRANSLATE_URL, API_KEY } from './constants'
import { saveCache, checkCache } from './cache'
import * as T from './types'

const fetch = require('node-fetch')

export async function translateText(params: T.ITranslateParams): Promise<T.TTranslateResponse> {
    const checkedCache: T.TTranslateResponse = await checkCache(params)
    if (checkedCache.code === 200) {
        console.log('next is from cache')
        return checkedCache
    }
    
    const apiURL: string = encodeURI(`${YANDEX_TRANSLATE_URL}?key=${API_KEY}&text=${params.text}&lang=${params.lang}`)
    const result = fetch(apiURL, { method: 'POST' })
        .then((response: any) => response.json())
        .then((data: T.ITranslateResponse) => {
            return data
        })
        .catch((err: T.ITranslateResponseError) => {
            return err
        })
    saveCache(params, result)
    return result
}
