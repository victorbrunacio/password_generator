import { View, Text, Pressable, Alert } from 'react-native'
import { useState, useContext } from 'react'
import { PasswordContext } from '../context/passwordContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Clipboard from 'expo-clipboard';
import ModalBase from "./ModalBase"
import useStorage from '../hooks/useStorage';

export default function ListPasswordItem({ password }) {
    const { setPasswords } = useContext(PasswordContext)

    const { deleteStorage } = useStorage()
    const [openModal, setOpenModal] = useState(false)

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(password);
        Alert.alert("Copied to clipboard");
    };

    async function deletePassword() {
        const newList = await deleteStorage("@passwords", password)
        setPasswords(newList)
        setOpenModal(false)
        Alert.alert("Password deleted")
    }

    return (
        <Pressable onLongPress={copyToClipboard} onPress={() => setOpenModal(true)}>
            <View className="p-2 bg-blue-500 rounded-sm border border-white justify-between flex-row items-end" >
                <Text className="text-white font-semibold text-lg">
                    {password}
                </Text>
                <View className="flex-row gap-1 items-center">
                    <Ionicons name="copy-outline" size={17} color="black" />
                    <Text>
                        Press to copy
                    </Text>
                </View>
            </View>
            <ModalBase modalVisible={openModal} setModalVisible={setOpenModal} titleText={"Delete password?"} btnName={"Delete"} functionBtn={() => deletePassword()} />
        </Pressable>
    )
}

