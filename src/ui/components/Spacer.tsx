import React from 'react';
import { View, ViewProps } from 'react-native';


export interface SpacerProps extends ViewProps {
    horizontal?: boolean
    size: number
}

export default function Spacer({ horizontal = false, size, ...props }: SpacerProps) {
    const defaultValue = 'auto'

    return (
        <View
            style={{
                width: horizontal ? size : defaultValue,
                height: !horizontal ? size : defaultValue,
            }}
            {...props}
        />
    )
}