import * as T from './types'

let translateCache: T.ICache = {}

function makeIndexFromParams(params: T.ITranslateParams): string {
    return `lang: ${params.lang.slice(-2)}, text: ${params.text}`
}

export function saveCache(params: T.ITranslateParams, response: T.TTranslateResponse): void {
    const index: string = makeIndexFromParams(params)
    translateCache[index] = response
}

export function checkCache(params: T.ITranslateParams): T.TTranslateResponse {
    const index: string = makeIndexFromParams(params)
    const response: T.TTranslateResponse = translateCache[index]
    if (response) {
        return response
    }
    const empty: T.ITranslateResponse = {
        lang: '',
        text: '',
        code: 404,
    }
    return empty
}
