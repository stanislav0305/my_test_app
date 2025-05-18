import React from 'react'
import { View, ViewProps } from 'react-native'
import { useMaterialYouTheme } from '@ui/styles/Theme'

type modeType = 'default' | 'primary'

interface ViewBaseMTAProps extends ViewProps {
    mode?: modeType
}

function ViewBaseMTA({ mode, style, ...props }: ViewBaseMTAProps) {
    const theme = useMaterialYouTheme()
    const newStyle = [{ backgroundColor: mode === 'primary' ? theme.primary : theme.background }, style]

    return (
        <View
            style={newStyle}
            {...props}
        />
    )
}

export function ViewMTA(props: ViewProps) {
    return (
        <ViewBaseMTA {...props} />
    )
}

export function ViewPrimaryMTA(props: ViewProps) {
    return (
        <ViewBaseMTA {...props} mode={'primary'} />
    )
}