import * as React from 'react'
import { GestureResponderEvent, Pressable, PressableProps, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native'
import { AudioColorAnswerModel } from '@models/TestModel'


export interface AudioColorButtonProps extends PressableProps {
    index: number,
    answer: AudioColorAnswerModel,
    showText: boolean,
    disabled?: boolean | null | undefined
    onPress: ((event: GestureResponderEvent) => void) | null | undefined
}

export default function AudioColorButton({ index, answer, showText, onPress, disabled, style, ...props }: AudioColorButtonProps) {
    const newStyle = [{
        ...(disabled === true ? styles.btnDisabled : styles.btn),
        backgroundColor: answer.color
    }, style as StyleProp<ViewStyle>]

    return (
        <Pressable key={`answer-${index}`} style={newStyle} onPress={onPress} disabled={disabled} {...props}>
            {showText === true && <Text key={`text-${index}`}>{index} {answer.color}</Text>}
        </Pressable>
    )
}

const btnBase = {
    flex: 1
}

const styles = StyleSheet.create({
    btn: {
        ...btnBase,
        opacity: 1
    },
    btnDisabled: {
        ...btnBase,
        opacity: 0.3
    }
})