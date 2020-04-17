export interface ITranslateParams {
    lang: string
    text: string
}

export interface ITranslateResponse {
    code: number
    lang: string
    text: string
  }

export interface ITranslateResponseError {
    code: number
    message: string
}

export type TTranslateResponse = ITranslateResponse | ITranslateResponseError
