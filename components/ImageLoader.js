import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View, Pressable, Text, Alert, Image } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppCamera from './AppCamera';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { postImage, getAudio } from '../api/Fetcher'

export default function ImageLoader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false)
  const [startCamera, setStartCamera] = useState(false);
  const logoImage = require('../assets/prantos-colored.png')

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
      setImageSelected(true);
    }
    else {
      setSelectedImage(null);
      setImageSelected(false)
    }
  };

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      setStartCamera(true)

    } else {
      Alert.alert("Access denied");
    }
  }

  const closeCamera = async () => {
    setStartCamera(false)
  }

  const convertImage = async () => {
    setSelectedImage(null);
    setImageSelected(false);

    postResponse = await postImage(selectedImage);
  }


  return startCamera ? (<AppCamera returnView={closeCamera}></AppCamera>) : (
    <View style={[styles.container]}>
      {/* <View style={[styles.buttonContainer]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#012233" }]}
          onPress={__startCamera}
        >
          <FontAwesome
            name="camera"
            size={18}
            color="#ECF0F1"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#ECF0F1" }]}>{"Take a picture"}</Text>
        </Pressable>
      </View> */}


      <Image
        source={logoImage}
        style={styles.imagePlaceholder} />
      <View style={[styles.buttonContainer]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#012233" }]}
          onPress={pickImageAsync}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#ECF0F1"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#ECF0F1" }]}>{"Choose a file from your gallery"}</Text>
        </Pressable>
      </View>

      <View style={[styles.buttonContainer]}>
        <Pressable
          style={[styles.button, {
            backgroundColor: "#23C4ED",
            opacity: imageSelected ? 1 : 0.3
          }]}
          onPress={convertImage}
          disabled={!imageSelected}>
          <AntDesign
            name="upload"
            size={18}
            color="#fff"
            style={styles.buttonIcon}
          />

          <Text style={[styles.buttonLabel, {
            color: "#fff"
          }]}>{
              "Musify your sheet!"
            }
          </Text>

        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    top: 60
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
  imagePlaceholder: {
  }
});