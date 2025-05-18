import React, { Component } from 'react'
import NavButton from '@navigation/NavButton'
import ScreenWrapper from '@components/ScreenWrapper'


export default class Home extends Component {
    render() {
        return (
            <ScreenWrapper title={'Главная'}>
                <NavButton title='Тест' screenName='TestOptions' />
            </ScreenWrapper>
        )
    }
}
