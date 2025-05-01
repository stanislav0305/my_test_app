import React, { Component } from 'react'
import { View } from 'react-native'
import NavigationButton from '@navigation/NavigationButton'
import ScreenHeader from '@components/ScreenHeader'


export default class Home extends Component {
    render() {
        return (
            <>
                <ScreenHeader title={'Главная'} />
                <View>
                    <NavigationButton title='Тест' screenName='TestOptions' />
                </View>
            </>
        )
    }
}
