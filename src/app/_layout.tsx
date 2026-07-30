import { Stack } from "expo-router"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth" />
      <Stack.Screen name="home" />
      <Stack.Screen name="explore" />
      <Stack.Screen name="train" />
      <Stack.Screen name="book-train" />
      <Stack.Screen name="flights" />
      <Stack.Screen name="trips" />
      <Stack.Screen name="budget" />
      <Stack.Screen name="profile" />
    </Stack>
  )
}
