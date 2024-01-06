import { View, Text, Modal, TouchableOpacity } from 'react-native'



export default function ModalBase({ modalVisible, setModalVisible, btnName, titleText, functionBtn }) {
  return (

    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
    >
      <View className="flex-1 items-center justify-center bg-black/30">
        <View className="bg-white p-10 rounded-3xl items-center justify-center">
          <Text className="font-bold text-2xl mb-10">{titleText}</Text>
          <View className="flex-row justify-center items-center gap-[30px] w-[90%]">
            <TouchableOpacity onPress={() => setModalVisible(false)} className="flex-1 p-3 items-center justify-center bg-blue-500 rounded">
              <Text className="text-white font-semibold text-lg ">Back</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 p-3 items-center justify-center bg-yellow-500 rounded"  onPress={functionBtn}>
              <Text className="font-semibold text-lg ">{btnName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
