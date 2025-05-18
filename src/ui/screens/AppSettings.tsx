import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native'
import ScreenWrapper from '@ui/components/ScreenWrapper'
import PaletteButton from '@ui/components/appSettings/PaletteButton'
import BrowseColors from '@ui/components/appSettings/BrowseColors'
import StyleButton from '@ui/components/appSettings/StyleButton'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import Icon from '@react-native-vector-icons/material-icons'
import Spacer from '@ui/components/Spacer'


export default function AppSettings() {
    const theme = useMaterialYouTheme()

    return (
        <ScreenWrapper title={'Настройки'}>
            <View style={styles.page}>
                <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 5, paddingBottom: 5 }}>
                    <Text style={[styles.title, { color: theme.text }]}>Цветовая схема</Text>
                    <Spacer size={5} />
                    <View style={styles.schemeContainer}>
                        <Pressable
                            style={styles.schemeButton}
                            android_ripple={{ color: theme.primary, radius: 30 }}
                            onPress={() => theme.setColorScheme('dark')}
                        >
                            <Icon
                                name='dark-mode'
                                style={{ color: theme.text, fontSize: 48 }}
                            />
                            <Text style={[styles.schemeButtonText, { color: theme.text }]}>Темный режим</Text>
                        </Pressable>
                        <Pressable
                            style={styles.schemeButton}
                            android_ripple={{ color: theme.primary, radius: 30 }}
                            onPress={() => theme.setColorScheme('light')}
                        >
                            <Icon
                                name='light-mode'
                                style={{ color: theme.text, fontSize: 48 }}
                            />
                            <Text style={[styles.schemeButtonText, { color: theme.text }]}>Светлый режим</Text>
                        </Pressable>
                        <Pressable
                            style={styles.schemeButton}
                            android_ripple={{ color: theme.primary, radius: 30 }}
                            onPress={() => theme.setColorScheme('auto')}
                        >
                            <Icon
                                name='auto-mode'
                                style={{ color: theme.text, fontSize: 48 }}
                            />
                            <Text style={[styles.schemeButtonText, { color: theme.text }]}>Режим системы</Text>
                        </Pressable>
                    </View>
                    <Spacer size={30} />
                    {/* Generate from a preset */}
                    <Text style={[styles.title, { color: theme.text }]}>Сгенерировать из предустановки</Text>
                    <Spacer size={5} />
                    <View style={styles.paletteContainer}>
                        <PaletteButton targetColor='#ff0000' colors={['#ac6156', '#ffb4a8']} />
                        <PaletteButton targetColor='#ff8000' colors={['#a76639', '#ffb787']} />
                        <PaletteButton targetColor='#ffff00' colors={['#7a792e', '#cbcb76']} />
                        <PaletteButton targetColor='#80ff00' colors={['#5e7f45', '#acd28e']} />
                        <PaletteButton targetColor='#00ff00' colors={['#57804b', '#a5d395']} />
                    </View>
                    <Spacer size={10} />
                    <View style={styles.paletteContainer}>
                        <PaletteButton targetColor='#00ff80' colors={['#4b8256', '#99d4a2']} />
                        <PaletteButton targetColor='#00ffff' colors={['#258282', '#80d5d4']} />
                        <PaletteButton targetColor='#0080ff' colors={['#5a76aa', '#abc7ff']} />
                        <PaletteButton targetColor='#0000ff' colors={['#6d71ab', '#bec2ff']} />
                        <PaletteButton targetColor='#8000ff' colors={['#826ba6', '#d5bbfc']} />
                    </View>
                    <Spacer size={10} />
                    <View style={styles.paletteContainer}>
                        <PaletteButton targetColor='#ff00ff' colors={['#9a6492', '#f1b3e6']} />
                        <PaletteButton targetColor='#ff0080' colors={['#a86175', '#ffb1c5']} />
                        <PaletteButton targetColor='#964B00' colors={['#a66737', '#ffb784']} />
                        <PaletteButton targetColor='#000000' colors={['#a76178', '#ffb1c8']} />
                        <PaletteButton targetColor='#ffffff' colors={['#27818d', '#82d3e0']} />
                    </View>
                    <Spacer size={30} />
                    {/* Palette generation style */}
                    <Text style={[styles.title, { color: theme.text }]}>Стиль генерации палитры</Text>
                    <Spacer size={5} />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                        <StyleButton styleName='CONTENT' />
                        <StyleButton styleName='EXPRESSIVE' />
                        <StyleButton styleName='FRUIT_SALAD' />
                        <StyleButton styleName='MONOCHROMATIC' />
                        <StyleButton styleName='RAINBOW' />
                        <StyleButton styleName='SPRITZ' />
                        <StyleButton styleName='TONAL_SPOT' />
                        <StyleButton styleName='VIBRANT' />
                    </View>
                    <Spacer size={30} />
                    {/* View all the palette colors */}
                    <Text style={[styles.title, { color: theme.text }]}>Посмотреть все цвета палитры</Text>
                    <Spacer size={5} />
                    <BrowseColors />
                </ScrollView>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        maxWidth: 500,
        width: '100%',
        alignSelf: 'center',
    },
    title: {
        fontSize: 20
    },
    paletteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 20
    },
    schemeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    schemeButton: {
        alignItems: 'center',
        gap: 10,
    },
    schemeButtonText: {
        fontWeight: 'bold',
    }
})