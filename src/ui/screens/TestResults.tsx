import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ViewMTA } from '../components/themedComponents/ViewMTA';
import TextMTA from '../components/themedComponents/TextMTA';
import { TestResultsScreenProps } from '@ui/navigation/RootStackMTA';
import NavButton from '@ui/navigation/NavButton';
import ViewCardMTA from '@ui/components/themedComponents/ViewCardMTA copy';
import Spacer from '@ui/components/Spacer';

const COLORS = {
    green: '#008000',
    yellow: '#ffff00',
    red: '#ff0000'
}

export default class TestResults extends Component<TestResultsScreenProps, {}> {
    constructor(props: TestResultsScreenProps) {
        super(props)
    }

    render() {
        const { questionCount, rightAnswerCount } = this.props.route.params.viewModel
        const percentRightAnswer = Math.floor((rightAnswerCount / questionCount) * 100)
        const percentRightAnswerColor = (percentRightAnswer >= 90) ? COLORS.green :
            (percentRightAnswer >= 60) ? COLORS.yellow : COLORS.red

        return (
            <ViewCardMTA style={{ flex: 1 }}>
                <ViewMTA style={styles.page}>
                    <Spacer size={10} />
                    <ViewMTA style={styles.table}>
                        <ViewMTA style={styles.row}>
                            <TextMTA style={styles.rowText}>Правильных ответов:</TextMTA>
                        </ViewMTA>
                        <ViewMTA style={styles.row}>
                            <TextMTA style={styles.rowResultText}>{rightAnswerCount}</TextMTA>
                            <TextMTA style={styles.rowResultText}> из </TextMTA>
                            <TextMTA style={styles.rowResultText}>{questionCount}</TextMTA>
                        </ViewMTA>
                        <ViewMTA style={styles.row}>
                            <TextMTA style={[styles.percentRightAnswer, { color: percentRightAnswerColor }]}>{percentRightAnswer}%</TextMTA>
                        </ViewMTA>
                    </ViewMTA>
                    <ViewMTA style={styles.navButtonContainer}>
                        <NavButton title='На главную' screenName='Home' />
                        <Spacer size={10} />
                        <NavButton title='Пройти тест ещё раз' screenName='TestOptions' />
                    </ViewMTA>
                </ViewMTA>
            </ViewCardMTA>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
    },
    table: {
        top: 100,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowText: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    rowResultText: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    percentRightAnswer: {
        top: 50,
        fontSize: 80,
        fontWeight: 'bold',
    },
    navButtonContainer: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    }
})