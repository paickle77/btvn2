import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

const players = [
  { name: 'Messi', goals: 30 },
  undefined,
  { name: 'Ronaldo', goals: 28 },
  { name: 'Neymar', goals: 22 },
  { goals: 2 },
  { name: 'Mbappé', goals: 25 },
  { name: 'Pele', goals: null },
];

// Định nghĩa kiểu cho cầu thủ
type Player = {
  name?: string;
  goals?: number | null;
};

// Hàm kiểm tra hợp lệ (chỉ nhận cầu thủ có tên và số bàn thắng hợp lệ)
const validRule = (player: Player): player is Required<Player> => {
  return !!player.name && typeof player.goals === 'number';
};

// Lọc danh sách cầu thủ hợp lệ (loại bỏ undefined và những cầu thủ không hợp lệ)
const validPlayers = players.filter(
  (player): player is { name: string; goals: number } => {
    return player !== undefined && !!player.name && typeof player.goals === 'number';
  }
);

// Tìm cầu thủ ghi bàn nhiều nhất (giải quyết vấn đề `null` bằng cách kiểm tra trước)
const topScorer = validPlayers.reduce(
  (max, player) => (player.goals > max.goals ? player : max),
  { name: '', goals: 0 }
);

console.log('Danh sách cầu thủ hợp lệ:', validPlayers);
console.log('Cầu thủ ghi nhiều bàn thắng nhất:', topScorer);
  