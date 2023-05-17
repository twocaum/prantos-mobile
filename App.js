import { StyleSheet, View} from 'react-native';
import { useState } from 'react';
import {pickImageAsync} from './utils/ImageUtils';

import Button from './components/Button';

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <Button theme="camera" label="Take a photo"/>
        <Button theme="gallery" label="Choose from your gallery"  onPress={pickImageAsync} />
      </View>
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
