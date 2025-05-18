import { useMaterialYouTheme } from '@ui/styles/Theme'
import React from 'react'
import { Text, TextProps, } from 'react-native'

export interface TextMTAProps extends TextProps {
    mode?: 'buttonText' | 'text'
}

export default function TextMTA({ mode, style, ...props }: TextMTAProps) {
    const theme = useMaterialYouTheme()
    const newStyle = [{ color: mode === 'buttonText' ? theme.textColored : theme.text }, style]

    return (
        <Text
            style={newStyle}
            {...props}
        />
    )
}