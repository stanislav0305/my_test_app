import * as React from 'react'
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native'
import { AudioColorAnswerModel } from '@models/TestModel'


const styles = StyleSheet.create({
    btn: {
        flex: 1,
        backgroundColor: '#3498db',
        opacity: 1
    },
    btnDisabled: {
        flex: 1,
        backgroundColor: '#3498db',
        opacity: 0.3
    }
})

interface TProps {
    index: number,
    answer: AudioColorAnswerModel,
    showText: boolean,
    disabled?: boolean | null | undefined
    onPress: ((event: GestureResponderEvent) => void) | null | undefined
}

export default function AudioColorButton(props: TProps) {
    const { index, answer, showText, onPress } = props
    const mainStyle = props.disabled === true ? styles.btnDisabled : styles.btn
    const style = { ...mainStyle, backgroundColor: answer.color }

    return (
        <Pressable key={`answer-${index}`} style={style} onPress={onPress} disabled={props.disabled}>
            {showText === true && <Text key={`text-${index}`}>{index} {answer.color}</Text>}
        </Pressable>
    )
}