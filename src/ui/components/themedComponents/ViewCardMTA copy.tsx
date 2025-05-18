import React from 'react'
import { View, ViewProps } from 'react-native'
import { useMaterialYouTheme } from '@ui/styles/Theme'


export default function ViewCardMTA({ style, ...props }: ViewProps) {
    const theme = useMaterialYouTheme()
    const newStyle = [{ backgroundColor: theme.card }, style]

    return (
        <View
            style={newStyle}
            {...props}
        />
    )
}