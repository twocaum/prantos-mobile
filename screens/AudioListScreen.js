import { useContext, useEffect, useState } from "react"
import { View, StyleSheet, Text, ScrollView } from "react-native"
import * as MediaLibrary from 'expo-media-library'
import { AudioContext } from "../context/AudioProvider"
import { SafeAreaView } from "react-native-safe-area-context"
import AudioListItem from "../components/AudioListItem"
import OptionModal from "../components/OptionModel"

export default function AudioList() {
    const context = useContext(AudioContext)
    const audio_list = context.audioFiles

    const [optionModalVisible, setOptionModalVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({})

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ paddingTop: 15 }}>
                {audio_list.map((item, idx) =>
                    <AudioListItem
                        key={idx}
                        title={item.filename}
                        duration={item.duration}
                        onOptionPress={() => {
                            setCurrentItem(item)
                            setOptionModalVisible(true)
                        }} />
                )}
            </ScrollView>
            <OptionModal
                visible={optionModalVisible}
                currentItem={currentItem}
                onClose={() => {
                    setOptionModalVisible(false)
                }}
                OnPlayPress={() => {
                    console.log("play")
                }} />
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