import { Component } from 'react'
import NavButton from '@ui/navigation/NavButton'
import { InputNumberType, passCountMax, questionCountInOnePassMax, type QuestionOrderType, TestPassModeType } from '@models/ITestOptionsModel'
import { questionOrderRadioBtns, ITestOptionsViewModel, testPassModeRadioBtns } from '@viewModels/ITestOptionsViewModel'
import { StyleSheet } from 'react-native'
import TestService from '@services/TestService'
import TextMTA from '@ui/components/themedComponents/TextMTA'
import { ViewMTA } from '@ui/components/themedComponents/ViewMTA'
import Spacer from '@ui/components/Spacer'
import ViewCardMTA from '@ui/components/themedComponents/ViewCardMTA copy'
import RadioGroupMTA from '@ui/components/themedComponents/RadioGroupMTA'
import TextInputMTA from '@ui/components/themedComponents/TextInputMTA'


export default class TestOptions extends Component<{}, ITestOptionsViewModel> {
    constructor(props: {}) {
        super(props)

        const questionCount = TestService.getTestQuestionCount()
        this.state = {
            questionCountInTest: questionCount,
            questionOrder: 'series',
            testPassMode: 'byParts',
            questionCountInOnePass: 3,
            passCount: 1,
            totalQuestionCount: 3
        }
    }

    recalculateTotalQuestionCount = (newState: ITestOptionsViewModel) => {
        const { questionCountInTest, testPassMode, questionCountInOnePass, passCount } = newState
        const passCountNum: number = this.inputNumberToNumber(passCount, 0)
        const questionCountInOnePassNum: number = this.inputNumberToNumber(questionCountInOnePass, 0)

        const totalCount = testPassMode === 'full'
            ? questionCountInTest * passCountNum
            : questionCountInOnePassNum * passCountNum

        newState.totalQuestionCount = totalCount

        console.log('newState', newState)

        return newState
    }

    questionOrderOnPress = (selectedId: string) => {
        console.log('questionOrder', selectedId)

        this.setState(prevData => ({
            ...prevData,
            questionOrder: selectedId as QuestionOrderType
        }))
    }

    testPassModeOnPress = (selectedId: string) => {
        this.setState((prevData) => {
            return this.recalculateTotalQuestionCount({
                ...prevData,
                testPassMode: selectedId as TestPassModeType,
            })
        })
    }

    questionCountInOnePassOnChange = (text: string) => {
        const value: InputNumberType = this.inputTextToNumberOrEmpty(text, questionCountInOnePassMax)

        this.setState((prevData) => {
            return this.recalculateTotalQuestionCount({
                ...prevData,
                questionCountInOnePass: value
            })
        })
    }

    passCountOnChange = (text: string) => {
        const value: InputNumberType = this.inputTextToNumberOrEmpty(text, passCountMax)

        this.setState((prevData) => {
            return this.recalculateTotalQuestionCount({
                ...prevData,
                passCount: value
            })
        })

    }

    inputTextToNumberOrEmpty = (text: string, max: number): InputNumberType => {
        if (!!text && !isNaN(parseInt(text))) {
            const value = parseInt(text)

            return value > max ? max : value
        }

        return ''
    }

    inputNumberToNumber = (value: InputNumberType, defaultValue: number): number => {
        return value === '' ? defaultValue : value
    }

    render() {
        const { questionOrder, testPassMode, questionCountInOnePass, passCount, totalQuestionCount } = this.state
        return (
            <ViewCardMTA style={{ flex: 1 }}>
                <ViewMTA style={styles.page}>
                    <Spacer size={10} />
                    <TextMTA>Порядок вопросов в тесте</TextMTA>
                    <RadioGroupMTA
                        radioButtons={questionOrderRadioBtns}
                        onPress={this.questionOrderOnPress}
                        selectedId={questionOrder}
                        layout='row'
                    />
                    <Spacer size={10} />
                    <TextMTA>Режим прохождения теста</TextMTA>
                    <RadioGroupMTA
                        radioButtons={testPassModeRadioBtns}
                        onPress={this.testPassModeOnPress}
                        selectedId={testPassMode}
                        layout='row'
                    />
                    {
                        testPassMode === 'byParts' && (
                            <>
                                <Spacer size={10} />
                                <TextMTA>Количество вопросов в 1 проходе (макс. {questionCountInOnePassMax})</TextMTA>
                                <TextInputMTA
                                    style={styles.input}
                                    onChangeText={this.questionCountInOnePassOnChange}
                                    value={questionCountInOnePass.toString()}
                                    keyboardType="numeric"
                                />
                            </>
                        )
                    }
                    <Spacer size={10} />
                    <TextMTA>Количество проходов (макс. {passCountMax})</TextMTA>
                    <TextInputMTA
                        style={styles.input}
                        onChangeText={this.passCountOnChange}
                        value={passCount.toString()}
                        keyboardType="numeric"
                    />
                    <Spacer size={10} />
                    <TextMTA>И того количество вопросов в тесте: {totalQuestionCount}</TextMTA>
                    <Spacer size={20} />
                    <NavButton
                        title='Старт'
                        screenName='Test'
                        screenProps={{ ...this.state }}
                        disabled={totalQuestionCount === 0}
                    />
                </ViewMTA>
            </ViewCardMTA>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10
    },
    page: {
        flex: 1,
        padding: 10
    }
})