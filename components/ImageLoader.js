import {Camera} from 'expo-camera'
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppCamera from './AppCamera';
import { useState } from 'react';

export default function ImageLoader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [startCamera,setStartCamera] = useState(false);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          quality: 1,
        });
    
        if (!result.canceled) {
          setSelectedImage(result.assets[0].uri);
        } 
    };

    const __startCamera = async () => {
      const {status} = await Camera.requestCameraPermissionsAsync()
      if(status === 'granted'){
        setStartCamera(true)
     
      }else{
        Alert.alert("Access denied");
      }
    }

    const closeCamera = async () => {
      setStartCamera(false)
    }


    return startCamera ? (<AppCamera returnView={closeCamera}></AppCamera>) : (
        <View>
            <View style={[styles.buttonContainer]}>
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
            </View>
            
            <View style={[styles.buttonContainer]}>
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={pickImageAsync}
                >
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                />
                <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{"Choose from your gallery"}</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
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
  });