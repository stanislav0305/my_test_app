import React from 'react'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import { TextInput, TextInputProps } from 'react-native'


export default function TextInputMTA({ style, ...props }: TextInputProps) {
    const theme = useMaterialYouTheme()
    const newStyle = [{
        color: theme.text,
        backgroundColor: theme.card,
        borderColor: theme.primary
    }, style]

    return (
        <TextInput
            style={newStyle}
            {...props}
        />
    )
}