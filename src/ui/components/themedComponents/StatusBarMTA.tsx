import React from 'react'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import { StatusBar } from 'react-native'


export default function StatusBarMTA() {
    const theme = useMaterialYouTheme()
    return (
        <StatusBar
            backgroundColor='transparent'
            barStyle={theme.isDark ? 'light-content' : 'dark-content'}
            translucent
        />
    )
}
