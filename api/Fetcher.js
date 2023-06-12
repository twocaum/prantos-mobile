import axios from 'axios';
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'
import { Alert } from 'react-native';

export const postImage = async (image, filename, tempo = 100) => {
    const header = 'data:image/png;base64';
    const data = header.concat(',', image.base64)

    axios.post("https://4c08-157-159-39-17.ngrok-free.app/photo", {
        photo: data,
        tempo: tempo
    })
        .then(() => {
            console.log('post deu bao')
            axios.get('https://4c08-157-159-39-17.ngrok-free.app/getMid')
                .then(async (response) => {

                    let blob = new Blob([response.data], { type: "audio/wav" });
                    const fr = new FileReader();
                    const fileUri = `${FileSystem.documentDirectory}/${filename}.wav`;

                    fr.onload = async () => {
                        console.log("URI: ", fileUri);
                        await FileSystem.writeAsStringAsync(fileUri, fr.result.split(',')[1], { encoding: FileSystem.EncodingType.Base64 });
                    };
                    fr.readAsDataURL(blob);
                    // asset = await MediaLibrary.createAssetAsync(fileUri);
                    // album = await MediaLibrary.getAlbumAsync("Prantos");

                    // MediaLibrary.addAssetsToAlbumAsync([asset], album);
                    Alert.alert("Success");
                    return fileUri;
                }
                )
        })
        .catch(error => {
            console.log(error);
            return null
        });
}

export const getAudio = async (filename) => {
}   
