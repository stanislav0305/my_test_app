import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { AudioColorAnswerModel } from '@models/TestModel'
import AudioColorButton from '@components/AudioColorButton'
import { TestScreenProps } from '@ui/navigation/RootStackMTA'
import ScreenWrapper from '@components/ScreenWrapper'
import { ViewMTA } from '@ui/components/themedComponents/ViewMTA'
import TextMTA from '@ui/components/themedComponents/TextMTA'
import { loadTestThunkAction, selectAnswerThunkAction, startTestThunkAction } from '@dal/state/tests/currentTest.slice'
import { connect, ConnectedProps } from 'react-redux'
import { AppDispatch, RootState } from '@dal/state/store'


class Test extends Component<TestScreenProps & TestProps, {}> {
    constructor(props: TestScreenProps & TestProps) {
        super(props)
        const testOptionsVM = props.route.params.viewModel

        props.dispatch(loadTestThunkAction(testOptionsVM))
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.props.dispatch(startTestThunkAction())
        }, 2000)
    }

    componentDidUpdate(props: TestScreenProps & TestProps) {
        const { questionNum, questionCount } = this.props.currentTest

        if (questionNum >= questionCount) {
            console.log('test ended, start redirect...')
            this.props.navigation.navigate('TestResults', { viewModel: this.props.currentTest.testResults })
        }
    }

    selectAnswer = (answer: AudioColorAnswerModel) => {
        console.log('press')
        this.props.dispatch(selectAnswerThunkAction(answer))
    }

    render() {
        const { questionNum, questionCount, test, answersDisabled } = this.props.currentTest
        return (
            <ScreenWrapper title={'Тест'}>
                <ViewMTA>
                    {(questionNum === -1) && <TextMTA>Загрузка...</TextMTA>}
                    {((questionNum > -1) && (questionNum < questionCount)) && <TextMTA>{questionNum} / {questionCount}</TextMTA>}
                </ViewMTA>
                <ViewMTA style={styles.container}>
                    {((questionNum > -1) && (questionNum < questionCount)) && (
                        <>
                            {
                                test.questions[questionNum].answers.map((answer: AudioColorAnswerModel, index: number) => {
                                    return <AudioColorButton key={`audioColorBtn-${index}`}
                                        index={index}
                                        answer={answer}
                                        showText={false}
                                        disabled={answersDisabled}
                                        onPress={() => this.selectAnswer(answer)} />
                                })
                            }
                        </>
                    )}
                </ViewMTA>
            </ScreenWrapper >
        )
    }
}

function mapStateToProps(state: RootState) {
    return { currentTest: state.currentTest }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return { dispatch }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type TestProps = ConnectedProps<typeof connector>;

export default connect(mapStateToProps, mapDispatchToProps)(Test);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
})