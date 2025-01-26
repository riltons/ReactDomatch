import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Bem-vindo' }} />
      <Stack.Screen name="perfil" options={{ title: 'Meu Perfil' }} />
    </Stack>
  );
}
