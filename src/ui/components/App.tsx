import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from '@ui/navigation/RootStackMTA'
import { ThemeProvider } from '@ui/styles/Theme'


export default function App() {
  return (
    <ThemeProvider seedColor='auto' colorScheme='auto' fallbackColor='#1b6ef3' generationStyle='TONAL_SPOT'>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  )
}