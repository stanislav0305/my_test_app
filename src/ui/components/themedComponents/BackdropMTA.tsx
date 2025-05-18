import React, { PropsWithChildren } from 'react'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import { Backdrop, BackdropProps } from '@react-native-material/core'


export default function BackdropMTA({ children, frontLayerContainerStyle, style, ...props }: PropsWithChildren<BackdropProps>) {
    const theme = useMaterialYouTheme()
    const newFontLayerStyle = [{ backgroundColor: theme.card }, frontLayerContainerStyle]
    const newStyle = [{ backgroundColor: theme.primary }, style]

    return (
        <Backdrop
            frontLayerContainerStyle={newFontLayerStyle}
            style={newStyle}
            {...props}
        >
            {children}
        </Backdrop>
    )
}