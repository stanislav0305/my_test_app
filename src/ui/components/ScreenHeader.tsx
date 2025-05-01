import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'


interface ScreenHeaderProps {
    title: string
}

export default function ScreenHeader(props: ScreenHeaderProps) {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#3498db',
        height: 116,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 71,
        marginBottom: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        elevation: 6,
        shadowRadius: 4.65,
        position: 'relative'
    },
    headerText: {
        fontSize: 28,
        fontFamily: 'AvenirNext-DemiBold',
        color: '#fff',
    }
})