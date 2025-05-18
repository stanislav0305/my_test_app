import { NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import Home from '@screens/Home'
import AppSettings from '@screens/AppSettings'
import Test from '@screens/Test'
import TestOptions from '@screens/TestOptions'
import { ITestOptionsViewModel } from '@viewModels/ITestOptionsViewModel'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import { StyleSheet } from 'react-native'


export type ScreenNames = 'Home' | 'AppSettings' | 'Test' | 'TestOptions'

//export type RootStackParamList = Record<ScreenNames[number], undefined>
export type RootStackParamList = {
    Home: undefined
    AppSettings: undefined
    Test: { viewModel: ITestOptionsViewModel }
    TestOptions: undefined
}
export type TestScreenProps = NativeStackScreenProps<RootStackParamList, 'Test'>

export interface ScreenProps<T extends keyof RootStackParamList> { // T is one of Home|Test|TestOptions
    props: NativeStackNavigationProp<RootStackParamList, T>
}

export type StackNavigation = NavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>()


export default function RootStack() {
    const theme = useMaterialYouTheme()

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.background
                },
                headerTintColor: theme.text,
                headerTitleStyle: styles.headerTitleStyle
            }}>
            <Stack.Screen name='Home' component={Home} options={{ title: 'Главная', headerShown: false }} />
            <Stack.Screen name='AppSettings' component={AppSettings} options={{ title: 'Настройки', headerShown: false }} />
            <Stack.Screen name='Test' component={Test} options={{ title: 'Тест', headerShown: false }} />
            <Stack.Screen name='TestOptions' component={TestOptions} options={{ title: 'Настройки теста' }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 20
    }
})