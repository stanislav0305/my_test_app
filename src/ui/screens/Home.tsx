import React, { Component } from 'react'
import NavButton from '@navigation/NavButton'
import ScreenWrapper from '@components/ScreenWrapper'
import TestList from '@ui/components/TestList'


export default class Home extends Component {
    render() {
        return (
            <ScreenWrapper title={'Главная'}>
                <TestList />
                <NavButton title='Counter' screenName='Counter' />
            </ScreenWrapper>
        )
    }
}