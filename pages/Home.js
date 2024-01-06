import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Slider from '@react-native-community/slider';
import ModalBase from '../components/ModalBase';
import useStorage from '../hooks/useStorage';


export default function Home() {
    const [numberPassword, setNumberPassword] = useState(5)

    const [modalVisible, setModalVisible] = useState(false)

    const { saveStorage } = useStorage()
    const [passwords, setPasswords] = useState("")

    function randomPassword() {
        let randomic = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let passwordFunction = ""
        for (i = 0; i < numberPassword; i++) {
            passwordFunction += randomic.charAt(Math.random() * randomic.length)
        }
        setPasswords(passwordFunction)
        setModalVisible(true)
        return
    }
    
    async function savePasswordStorage() {
        await saveStorage("@passwords", passwords)
        setModalVisible(false)
        alert("saved")
    }
    return (
        <View className="flex-1 items-center justify-center gap-10">
            <Image source={require('../assets/logo.png')} />
            <View className="gap-3 w-full items-center justify-center">
                <Text className="text-black text-3xl">Password {numberPassword} caracters</Text>
                <View className=" bg-white rounded-3xl h-[50px] justify-center w-[80%]">
                    <Slider
                        className="bg-black h-20"
                        minimumValue={5}
                        maximumValue={20}
                        minimumTrackTintColor="blue"
                        maximumTrackTintColor="#000000"
                        onValueChange={(value) => setNumberPassword(value.toFixed(0))}
                    />
                </View>
                <TouchableOpacity onPress={randomPassword}>
                    <Text className="text-3xl font-semibold bg-blue-700 py-3 px-2 rounded-md mt-5 text-white">
                        Generate
                    </Text>
                </TouchableOpacity>
                <ModalBase functionBtn={savePasswordStorage} titleText={passwords} modalVisible={modalVisible} setModalVisible={setModalVisible} btnName={"Save"} />
            </View>
        </View>
    )
}