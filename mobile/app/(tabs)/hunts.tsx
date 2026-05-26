import { StyleSheet } from 'react-native';
import { ThemedView } from '@components/themed';
import { GraphQLHuntsFeed } from '@components/GraphQLHuntsFeed';

export default function HuntsScreen() {
  return (
    <ThemedView style={styles.container}>
      <GraphQLHuntsFeed />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
