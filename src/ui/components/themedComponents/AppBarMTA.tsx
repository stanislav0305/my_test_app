import React from 'react'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import { AppBar, AppBarProps } from '@react-native-material/core'


export default function AppBarMTA({ style, ...props }: AppBarProps) {
    const theme = useMaterialYouTheme()
    const newStyle = [{ backgroundColor: theme.primary }, style]

    return (
        <AppBar
            tintColor={theme.textColored}
            style={newStyle}
            {...props}
        />
    )
}