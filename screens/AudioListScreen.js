import { useContext, useEffect, useState } from "react"
import { View, StyleSheet, Text, ScrollView } from "react-native"
import * as MediaLibrary from 'expo-media-library'
import { AudioContext } from "../context/AudioProvider"
import { SafeAreaView } from "react-native-safe-area-context"
import AudioListItem from "../components/AudioListItem"
import OptionModal from "../components/OptionModel"
import { Audio } from 'expo-av'

export default function AudioList() {
    const context = useContext(AudioContext)
    const audio_list = context.audioFiles

    const [optionModalVisible, setOptionModalVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({})
    const [sound, setSound] = useState();

    convertLocalIdentifierToAssetLibrary = (localIdentifier, ext) => {
        const hash = localIdentifier.split('/')[0];
        return `assets-library://asset/asset.${ext}?id=${hash}&ext=${ext}`;
    };

    const handleAudioPress = async (audio) => {
        // TO-DO: mudar essa gambiarra
        let uri = convertLocalIdentifierToAssetLibrary(audio.id, 'mp4')
        const { soundPlaying } = await Audio.Sound.createAsync(
            { uri: uri },
            { shouldPlay: true }
        );

        setSound(soundPlaying)

        await sound.playAsync()
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ paddingTop: 40 }}>
                {audio_list.map((item, idx) =>
                    <AudioListItem
                        key={idx}
                        title={item.filename}
                        duration={item.duration}
                        onOptionPress={() => {
                            setCurrentItem(item)
                            setOptionModalVisible(true)
                        }}
                        onAudioPress={() => handleAudioPress(item)} />
                )}
            </ScrollView>
            {/* <OptionModal
                visible={optionModalVisible}
                currentItem={currentItem}
                onClose={() => {
                    setOptionModalVisible(false)
                }}
                OnPlayPress={() => {
                    console.log("play")
                }} /> */}
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F1',
        alignItems: 'center',
        justifyContent: 'center',

    },
});