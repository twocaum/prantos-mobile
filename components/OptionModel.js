import { useContext, useEffect } from "react"
import { View, Modal, StyleSheet, Text, StatusBar, TouchableWithoutFeedback } from "react-native"
import { AudioContext } from "../context/AudioProvider"
import { } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../misc/colors";
import { } from "react-native-gesture-handler";

export default function OptionModal({
    visible,
    currentItem,
    onClose,
    OnPlayPress
}) {

    return (
        <>
            <StatusBar hidden />
            <Modal transparent animation-type='slide' visible={visible}>
                <View style={styles.modal}>
                    <Text style={styles.title}>
                        {currentItem != null ? currentItem.filename : ''}
                    </Text>
                    <View style={styles.optionContainer}>
                        <TouchableWithoutFeedback onPress={OnPlayPress}>
                            <Text style={styles.option}>Play</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalBg}></View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: color.APP_BG,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1000,
    },
    optionContainer: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        paddingBottom: 0,
        color: color.FONT_MEDIUM,
    },
    option: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.FONT,
        paddingVertical: 10,
        letterSpacing: 1,
    },
    modalBg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: color.MODAL_BG,
    },
});