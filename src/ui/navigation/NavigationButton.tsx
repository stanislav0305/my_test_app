import { Pressable, PressableStateCallbackType, StyleProp, Text, TextStyle, ViewStyle, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { type StackNavigation, type ScreenNames } from '@navigation/RootStack'
import { ITestOptionsViewModel } from '@viewModels/ITestOptionsViewModel'


export interface NavigationButtonProps {
    screenName: ScreenNames
    screenProps?: ITestOptionsViewModel | undefined
    title: string
    buttonStyle?: | StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>) | undefined
    buttonDisabledStyle?: | StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>) | undefined
    buttonDisabled?: boolean | null | undefined
    titleStyle?: StyleProp<TextStyle> | undefined
}

export default function NavigationButton(props: NavigationButtonProps) {
    const navigation = useNavigation<StackNavigation>();

    return (
        <Pressable
            style={props.buttonDisabled ? (props.buttonDisabledStyle ?? styles.navDisabled) : (props.buttonStyle ?? styles.navBtn)}
            //onPress={() => navigation.navigate({ screenName: props.screenName, params: props.screenProps })}
            onPress={() => navigation.navigate(props.screenName, { viewModel: props.screenProps })}
            disabled={props.buttonDisabled}
        >
            <Text style={props.titleStyle ?? styles.navTitle}>{props.title}</Text>
        </Pressable>
    )
}

const navBtn2: ViewStyle = {
    height: 50,
    justifyContent: 'center',
    padding: 5,
    margin: 5,
}

const styles = StyleSheet.create({
    navBtn: {
        ...navBtn2,
        backgroundColor: '#3498db',
    },
    navDisabled: {
        ...navBtn2,
        backgroundColor: '#cfcfcf',
    },
    navTitle: {
        fontSize: 20,
        fontFamily: 'AvenirNext-DemiBold',
        color: '#fff',
        textAlign: 'center',
    }
})