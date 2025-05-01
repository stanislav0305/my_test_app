export type InputNumberType = number | ''
export type QuestionOrderType = 'series' | 'random'
export type TestPassModeType = 'full' | 'byParts'


export interface ITestOptionsModel {
    questionCountInTest: number
    questionOrder: QuestionOrderType
    testPassMode: TestPassModeType
    questionCountInOnePass: number
    passCount: number,
}

export const modelDefault: ITestOptionsModel = {
    questionCountInTest: 10,
    questionOrder: 'series',
    testPassMode: 'full',
    questionCountInOnePass: 10,
    passCount: 1,
}

export const questionCountInOnePassMax = 10
export const passCountMax = 10