import { Component } from 'react';
import { Text, TextInput, View } from 'react-native'
import NavigationButton from '@navigation/NavigationButton'
import RadioGroup from 'react-native-radio-buttons-group';
import ScreenHeader from '@components/ScreenHeader'
import { InputNumberType, passCountMax, questionCountInOnePassMax, type QuestionOrderType, TestPassModeType } from '@models/ITestOptionsModel'
import { questionOrderRadioBtns, ITestOptionsViewModel, testPassModeRadioBtns } from '@viewModels/ITestOptionsViewModel'
import { StyleSheet } from 'react-native';
import TestService from '@services/TestService'


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
            <>
                <ScreenHeader title={'Настройки теста'} />
                <View style={styles.mainView}>

                    <Text>Порядок вопросов в тесте</Text>
                    <RadioGroup
                        radioButtons={questionOrderRadioBtns}
                        onPress={this.questionOrderOnPress}
                        selectedId={questionOrder}
                        layout='row'
                    />
                    <Text>Режим прохождения теста</Text>
                    <RadioGroup
                        radioButtons={testPassModeRadioBtns}
                        onPress={this.testPassModeOnPress}
                        selectedId={testPassMode}
                        layout='row'
                    />
                    {
                        testPassMode === 'byParts' && (
                            <>
                                <Text>Количество вопросов в 1 проходе (макс. {questionCountInOnePassMax})</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={this.questionCountInOnePassOnChange}
                                    value={questionCountInOnePass.toString()}
                                    keyboardType="numeric"
                                />
                            </>
                        )
                    }
                    <Text>Количество проходов (макс. {passCountMax})</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.passCountOnChange}
                        value={passCount.toString()}
                        keyboardType="numeric"
                    />
                    <Text>И того количество вопросов в тесте: {totalQuestionCount}</Text>
                    <NavigationButton
                        title='Старт'
                        screenName='Test'
                        screenProps={{ ...this.state }}
                        buttonDisabled={totalQuestionCount === 0}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        padding: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})