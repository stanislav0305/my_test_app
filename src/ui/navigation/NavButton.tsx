import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames, type StackNavigation } from '@ui/navigation/RootStackMTA'
import { ITestOptionsViewModel } from '@viewModels/ITestOptionsViewModel'
import Icon from '@react-native-vector-icons/evil-icons'
import PressableMTA from '@ui/components/themedComponents/PressableMTA'
import TextMTA from '@ui/components/themedComponents/TextMTA'
import { useMaterialYouTheme } from '@ui/styles/Theme'



export interface NavButtonProps {
    screenName: ScreenNames
    screenProps?: ITestOptionsViewModel | undefined
    title: string
    disabled?: boolean | null | undefined
    mode?: 'button' | 'listItem'
}

export default function NavButton(props: NavButtonProps) {
    const navigation = useNavigation<StackNavigation>()
    const theme = useMaterialYouTheme()
    const mode = props.mode ?? 'button'

    return (
        <PressableMTA
            style={mode === 'listItem' ? styles.listItem : styles.navBtn}
            onPress={() => navigation.navigate(props.screenName, { viewModel: props.screenProps })}
            disabled={props.disabled}
        >
            <TextMTA
                style={mode === 'listItem' ? styles.listItemTitle : styles.navBtnTitle}
                mode={'buttonText'}
            >
                {props.title}
                {mode === 'listItem' &&
                    <Icon name="chevron-right" color={theme.textColored} size={18} />
                }
            </TextMTA>
        </PressableMTA>
    )
}

const styles = StyleSheet.create({
    navBtn: {
        borderRadius: 300,
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderWidth: 2,
        borderColor: 'transparent',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    navBtnTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listItem: {
    },
    listItemTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    }
})