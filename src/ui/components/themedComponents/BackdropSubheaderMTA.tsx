import React from 'react'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import { BackdropSubheader, BackdropSubheaderProps } from '@react-native-material/core'


export default function BackdropSubheaderMTA(props: BackdropSubheaderProps) {
    const theme = useMaterialYouTheme()

    return (
        <BackdropSubheader
            color={theme.text}
            {...props}
        />
    )
}