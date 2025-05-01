import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SoundService from '@services/SoundService'
import TestService from '@services/TestService'
import { AudioColorAnswerModel, TestModel } from '@models/TestModel'
import AudioColorButton from '@components/AudioColorButton'
import { TestScreenProps } from '@navigation/RootStack';
import { Mapper } from '@ui/Mapper'
import { ITestOptionsModel } from '@models/ITestOptionsModel'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
    }
})


interface IState {
    questionNum: number,
    questionCount: number,
    test: TestModel,
    answersDisabled: boolean,
}

export default class Test extends Component<TestScreenProps, IState> {

    constructor(props: TestScreenProps) {
        super(props)

        const vm = props.route.params.viewModel
        const testOptionModel: ITestOptionsModel = Mapper.toModel(vm)

        const testModel = TestService.getTest(testOptionModel)
        this.state = {
            questionNum: -1,
            questionCount: testModel.questions.length,
            test: testModel,
            answersDisabled: true,
        }

        console.log('start')
        console.log('props', props)
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.setState(prev => {
                return { ...prev, questionNum: 0 }
            })
        }, 2000)
    }

    componentDidUpdate(props: TestScreenProps, prevState: IState) {
        console.log('prevState.questionNum', prevState.questionNum)
        console.log('this.state.questionNum', this.state.questionNum)

        if (prevState.questionNum !== this.state.questionNum
            && this.state.questionNum >= 0) {
            this.playQuestionSound()
        }
    }

    playQuestionSound = () => {
        if (this.state.questionNum >= this.state.questionCount) return

        const q = this.state.test.questions[this.state.questionNum].question
        SoundService.playSound(q, this.resetQuestionState)
    }

    playSelectedSound = (answer: AudioColorAnswerModel) => {
        console.log('press')

        this.setState(prevData => ({
            ...prevData,
            answersDisabled: true
        }),
            () => {
                SoundService.playSound(answer.value, answer.isCorrect ? this.playSuccessResultSound : this.playBadResultSound)
            }
        )
    }

    playSuccessResultSound = () => {
        const additional = this.state.test.additional
        SoundService.playRandomSound(additional.correctPhrases, this.nextQuestionState)
    }

    playBadResultSound = () => {
        const additional = this.state.test.additional
        SoundService.playRandomSound(additional.incorrectPhrases, this.playQuestionSound)
    }

    nextQuestionState = () => {
        this.setState(prevData => ({
            ...prevData,
            questionNum: prevData.questionNum + 1,
        }))
    }

    resetQuestionState = () => {
        this.setState(prevData => ({
            ...prevData,
            answersDisabled: false
        }))
    }

    render() {
        const { questionNum, questionCount, test, answersDisabled } = this.state

        return (
            <>
                <View>
                    {(questionNum === -1) && <Text>Загрузка...</Text>}
                    {((questionNum > -1) && (questionNum < questionCount)) && <Text>{questionNum} / {questionCount}</Text>}
                    {(questionNum >= questionCount) && <Text>Конец</Text>}
                </View>
                <View style={styles.container}>
                    {((questionNum > -1) && (questionNum < questionCount)) && (
                        <>
                            {
                                test.questions[questionNum].answers.map((answer: AudioColorAnswerModel, index: number) => {
                                    return <AudioColorButton key={`audioColorBtn-${index}`}
                                        index={index}
                                        answer={answer}
                                        showText={false}
                                        disabled={answersDisabled}
                                        onPress={() => this.playSelectedSound(answer)} />
                                })
                            }
                        </>
                    )}
                </View>
            </>
        )
    }
}