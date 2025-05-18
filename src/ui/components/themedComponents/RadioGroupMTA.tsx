import React from 'react'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import RadioGroup, { RadioGroupProps } from 'react-native-radio-buttons-group'


export default function RadioGroupMTA({ containerStyle, labelStyle, ...props }: RadioGroupProps) {
    const theme = useMaterialYouTheme()
    const newLabelStyle = [{ color: theme.text }, labelStyle]
    const newContainerStyle = [{ backgroundColor: theme.card }, containerStyle]

    return (
        <RadioGroup
            labelStyle={newLabelStyle}
            containerStyle={newContainerStyle}
            {...props}
        />
    )
}