import React, { PropsWithChildren, useState } from 'react'
import { BackdropProps } from '@react-native-material/core'
import { displayName, version } from '../../../package.json'
import NavButton from '@navigation/NavButton'
import { ViewPrimaryMTA } from '@ui/components/themedComponents/ViewMTA'
import DividerMTA from '@ui/components/themedComponents/DividerMTA'
import StatusBarMTA from '@ui/components/themedComponents/StatusBarMTA'
import AppBarMTA from '@ui/components/themedComponents/AppBarMTA'
import NavCloseIconButtonMTA from '@components/NavCloseIconButtonMTA'
import BackdropSubheaderMTA from './themedComponents/BackdropSubheaderMTA'
import { ViewMTA } from '@ui/components/themedComponents/ViewMTA'
import { StyleSheet } from 'react-native'
import BackdropMTA from '@ui/components/themedComponents/BackdropMTA'


interface ScreenHeaderProps extends PropsWithChildren<BackdropProps> {
    title: string
}

export default function ScreenWrapper(props: PropsWithChildren<ScreenHeaderProps>) {
    const [revealed, setRevealed] = useState(false)

    return (
        <>
            <StatusBarMTA />
            <BackdropMTA
                revealed={revealed}
                header={
                    <AppBarMTA
                        title={`${displayName} ${version}`}
                        transparent
                        leading={(props) => (
                            <NavCloseIconButtonMTA
                                revealed={revealed}
                                onPress={() => setRevealed(prevState => !prevState)}
                                {...props}
                            />
                        )}
                    />
                }
                backLayer={
                    <ViewPrimaryMTA style={{ padding: 10 }}>
                        <NavButton title='Главная' screenName='Home' mode='listItem' />
                        <DividerMTA style={{ margin: 5 }} />
                        <NavButton title='Настройки' screenName='AppSettings' mode='listItem' />
                    </ViewPrimaryMTA>
                }
            >
                <BackdropSubheaderMTA title={props.title} />
                <ViewMTA style={styles.page}>
                    {props.children}
                </ViewMTA>
            </BackdropMTA>
        </>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        margin: 5
    }
})