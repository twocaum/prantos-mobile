import { StyleSheet, View} from 'react-native';
import ImageLoader from './components/ImageLoader';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageLoader></ImageLoader>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#013684',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
