import React from 'react'
import Icon from '@react-native-vector-icons/evil-icons'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import { IconButton, IconButtonProps } from '@react-native-material/core'


export interface NavCloseIconButtonMTAProps extends IconButtonProps {
    revealed: boolean
}

export default function NavCloseIconButtonMTA({ revealed, ...props }: NavCloseIconButtonMTAProps) {
    const theme = useMaterialYouTheme()

    return (
        <IconButton
            icon={p => (
                <Icon
                    name={revealed ? 'close' : 'navicon'} {...p}
                    color={theme.textColored}
                />
            )}
            {...props}
        />
    )
}