import { InputNumberType, QuestionOrderType, TestPassModeType } from '@models/ITestOptionsModel'
import { RadioButtonProps } from 'react-native-radio-buttons-group'


export const questionOrderRadioBtns: RadioButtonProps[] =
    [
        {
            id: 'series',
            label: 'по порядку',
            value: 'series'
        },
        {
            id: 'random',
            label: 'случайно',
            value: 'random'
        }
    ]

export const testPassModeRadioBtns: RadioButtonProps[] =
    [
        {
            id: 'full',
            label: 'весь тест',
            value: 'full'
        },
        {
            id: 'byParts',
            label: 'часть теста',
            value: 'byParts'
        }
    ]

export interface ITestOptionsViewModel {
    questionCountInTest: number
    questionOrder: QuestionOrderType
    testPassMode: TestPassModeType
    questionCountInOnePass: InputNumberType
    passCount: InputNumberType,
    totalQuestionCount: number
}

export const viewModelDefault: ITestOptionsViewModel = {
    questionCountInTest: 10,
    questionOrder: 'series',
    testPassMode: 'full',
    questionCountInOnePass: '',
    passCount: '',
    totalQuestionCount: 0
}