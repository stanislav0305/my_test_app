import { useMaterialYouTheme } from '@ui/styles/Theme'
import React from 'react'
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native'


export default function PressableMTA({ style, disabled, ...props }: PressableProps) {
    const theme = useMaterialYouTheme()
    const newStyle = [{ backgroundColor: disabled ? theme.backgroundDisabled : theme.primary }, style as StyleProp<ViewStyle>]

    return (
        <Pressable
            style={newStyle}
            disabled={disabled}
            {...props}
        />
    )
}