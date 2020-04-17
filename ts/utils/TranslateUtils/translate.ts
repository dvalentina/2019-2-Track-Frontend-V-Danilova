import { YANDEX_TRANSLATE_URL, API_KEY } from './constants'
import * as T from './types'

const fetch = require('node-fetch')

export async function translateText(params: T.ITranslateParams): Promise<T.TTranslateResponse> {
    const apiURL: string = encodeURI(`${YANDEX_TRANSLATE_URL}?key=${API_KEY}&text=${params.text}&lang=${params.lang}`)
    const result = fetch(apiURL, { method: 'POST' })
        .then((response: any) => response.json())
        .then((data: T.ITranslateResponse) => {
            return data
        })
        .catch((err: T.ITranslateResponseError) => {
            return err
        })
    return result
}
