import { Text, View, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library'
import { Component, createContext } from 'react';


export const AudioContext = createContext();
export class AudioProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            audioFiles: []
        }
    }

    getPermission = async () => {
        permission = await MediaLibrary.getPermissionsAsync();
        while (!permission.granted) {
            permission = MediaLibrary.requestPermissionsAsync();
        }

        this.getAudioFiles()
    }

    getAlbum = async () => {
        album = await MediaLibrary.getAlbumAsync("Prantos");
        if (album == null) {
            album = await MediaLibrary.createAlbumAsync("Prantos");
        }

        return album
    }

    getAudioFiles = async () => {
        album = await this.getAlbum()

        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'photo',
            album: album
        })


        this.setState({ ...this.state, audioFiles: media.assets })
    }

    componentDidMount() {
        this.getPermission()
    }

    render() {
        return (
            <AudioContext.Provider value={{ audioFiles: this.state.audioFiles }}>
                {this.props.children}
            </AudioContext.Provider>
        )
    }
}