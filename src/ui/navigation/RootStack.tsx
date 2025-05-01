import { NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import Home from '@screens/Home'
import Test from '@screens/Test'
import TestOptions from '@screens/TestOptions'
import { ITestOptionsViewModel } from '@viewModels/ITestOptionsViewModel'


export type ScreenNames = 'Home' | 'Test' | 'TestOptions'
//export type RootStackParamList = Record<ScreenNames[number], undefined>
export type RootStackParamList = {
    Home: undefined
    Test: { viewModel: ITestOptionsViewModel }
    TestOptions: undefined
}
export type TestScreenProps = NativeStackScreenProps<RootStackParamList, 'Test'>;

export interface ScreenProps<T extends keyof RootStackParamList> { // T is one of Home|Test|TestOptions
    props: NativeStackNavigationProp<RootStackParamList, T>;
}

export type StackNavigation = NavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>()


export default function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Test' component={Test} />
            <Stack.Screen name='TestOptions' component={TestOptions} />
        </Stack.Navigator>
    );
}