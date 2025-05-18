import React from 'react'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import { Divider, DividerProps } from '@react-native-material/core'


export default function DividerMTA(props: DividerProps) {
    const theme = useMaterialYouTheme()

    return (
        <Divider
            color={theme.textColored}
            {...props}
        />
    )
}