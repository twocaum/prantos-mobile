import { StyleSheet, View} from 'react-native';
import ImageLoader from '../components/ImageLoader';

export default function Home() {
    return (
      <View style={styles.container}>
        <ImageLoader></ImageLoader>
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ECF0F1',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });