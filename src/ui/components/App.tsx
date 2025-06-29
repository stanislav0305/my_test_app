import * as React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { store } from '@dal/state/store'
import RootStack from '@ui/navigation/RootStackMTA'
import { ThemeProvider } from '@ui/styles/Theme'


export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider seedColor='auto' colorScheme='auto' fallbackColor='#1b6ef3' generationStyle='TONAL_SPOT'>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}