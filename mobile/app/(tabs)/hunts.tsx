import { StyleSheet } from 'react-native';
import { ThemedView } from '@components/themed';
import { HuntsList } from '@components/HuntsList';

export default function HuntsScreen() {
  return (
    <ThemedView style={styles.container}>
      <HuntsList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
