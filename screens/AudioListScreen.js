import { useContext, useEffect } from "react"
import { View, StyleSheet, Text, ScrollView } from "react-native"
import * as MediaLibrary from 'expo-media-library'
import { AudioContext } from "../context/AudioProvider"
import { SafeAreaView } from "react-native-safe-area-context"

export default function AudioList() {
    const context = useContext(AudioContext)
    const audio_list = context.audioFiles
    return (
        <SafeAreaView>
            <ScrollView>
                {audio_list.map((item, idx) =>
                    <Text
                        style={{
                            padding: 10,
                            borderBottomColor: '#FFFFFF',
                            borderBottomWidth: 2
                        }}
                        key={idx}>{item.filename}
                    </Text>
                )}
            </ScrollView>
        </SafeAreaView>
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