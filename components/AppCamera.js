import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera'
import { useState } from 'react';
import ReturnMenu from './ReturnMenu';
import CameraPreview from './CameraPreview';


export default function AppCamera({returnView}) {
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)

    const __takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
        console.log(photo)
        setPreviewVisible(true)
        setCapturedImage(photo)
    };

    const retakePicture = async () => {
        setCapturedImage(null)
        setPreviewVisible(false)
      }

    return previewVisible && capturedImage ? (
        <CameraPreview photo={capturedImage} retakePicture={retakePicture}> 
        </CameraPreview>
        ) : (
            <Camera
                style={{
                    flex: 1,
                    width:"100%",
                }}
                ref={(r) => {
                camera = r
                }}
            >
                <ReturnMenu onPress={returnView}></ReturnMenu>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        flex: 1,
                        width: '100%',
                        padding: 20,
                        justifyContent: 'space-between'
                    }}
                >
                    <View
                        style={{
                            alignSelf: 'center',
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >

                        <TouchableOpacity
                            onPress={__takePicture}
                            style={{
                                width: 70,
                                height: 70,
                                bottom: 0,
                                borderRadius: 50,
                                backgroundColor: '#fff'
                            }}
                        />
                    </View>
                </View>
            </Camera>   
    )

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    }
  });