import React, { useMemo, useState } from 'react'
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

import type { MaterialYouPalette } from 'react-native-material-you-colors'
import { useMaterialYouTheme } from '@ui/styles/Theme'
import Spacer from '@ui/components/Spacer'

const accents: (keyof MaterialYouPalette)[] = [
    'system_accent1',
    'system_accent2',
    'system_accent3',
    'system_neutral1',
    'system_neutral2',
]

const shades = [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

export default function BrowseColors() {
    const theme = useMaterialYouTheme()
    const [visible, setVisible] = useState(false)

    const DATA = useMemo(() => {
        const palette = theme.palette
        const listData = []

        for (let a = 0; a < accents.length; a++) {
            const accent = accents[a]!

            for (let i = 0; i < shades.length; i++) {
                const shade = shades[i]!
                const color = palette[accent][i]!
                listData.push({ name: `${accent}_${shade}`, color, shade })
            }
        }

        return listData
    }, [visible])

    const renderList = ({ item }: { item: { name: string, color: string, shade: number } }) => {
        const newViewStyle = [{ backgroundColor: item.color }, styles.shade]
        const newTextStyle = [{ color: item.shade > 300 ? 'white' : 'black' }, styles.shadeTitle]

        return (
            <View style={newViewStyle}>
                <Text style={newTextStyle}>{item.name}</Text>
                <Spacer size={5} />
                <Text style={newTextStyle}>{item.color}</Text>
            </View>
        )
    }

    return (
        <>
            <Pressable
                style={[styles.showButton, { backgroundColor: theme.primary }]}
                onPress={() => setVisible(true)}
            >
                <Text style={[styles.buttonText, { color: theme.textColored, }]}>Посмотреть цвета</Text>
            </Pressable>

            <Modal
                onRequestClose={() => setVisible(false)}
                visible={visible}
                animationType='slide'
            >
                <View style={{ flex: 1, backgroundColor: theme.background }}>
                    <FlatList
                        style={styles.colorFlatList}
                        ListFooterComponentStyle={{ paddingBottom: 100 }}
                        data={DATA}
                        renderItem={renderList}
                        keyExtractor={(item, i) => item.name + i}
                        ListFooterComponent={<View />}
                    />
                    <Pressable
                        style={[styles.closeButton, { backgroundColor: theme.primary }]}
                        onPress={() => setVisible(false)}
                    >
                        <Text style={[styles.buttonText, { color: theme.textColored }]}>Закрыть</Text>
                    </Pressable>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    showButton: {
        alignSelf: 'center',
        width: 300,
        borderRadius: 300,
        paddingHorizontal: 5,
        paddingVertical: 16,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    colorFlatList: {
        width: '100%',
        maxWidth: 500,
        alignSelf: 'center'
    },
    closeButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        width: 300,
        borderRadius: 300,
        paddingHorizontal: 30,
        paddingVertical: 14,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    shade: {
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadeTitle: {
        fontWeight: 'bold',
        fontSize: 14,
    },
})