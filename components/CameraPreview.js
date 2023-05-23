import {ImageBackground, View} from 'react-native';
import ReturnMenu from './ReturnMenu';
export default function CameraPreview({photo, returnView}) {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={{
            flex: 1
          }}>
          <ReturnMenu onPress={returnView}></ReturnMenu>
        
        </ImageBackground>
      </View>
    )
  }