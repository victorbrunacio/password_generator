import AsyncStorage from '@react-native-async-storage/async-storage';
const useStorage = () => {
    async function saveStorage(key, value) {
        try {
            //primeiro epgar o que tem la para poder semrpe dar o push, se eu só enviar ele sempre vai subistituir e nunca acumular 
            //se for null o valor, n tiver data temos que pégar um valor vazio
            const data = await AsyncStorage.getItem(key).then(data => JSON.parse(data)) || []
            data.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.log("Error at saveStorage: ", error)
        }
    }
    async function getStorage(key) {
        try {
            const data = await AsyncStorage.getItem(key).then(data => JSON.parse(data))
            return data || []
        } catch (error) {
            console.log("Error at getStorage: ", error)
        }
    }
    async function deleteStorage(key, value) {
        try {
            const data = await getStorage(key)
            const newData = data.filter(item => item !== value)
            await AsyncStorage.setItem(key, JSON.stringify(newData))
            return newData
        } catch (error) {
            console.log("Error at deleteStorage: ", error)
        }
    }
    return { saveStorage, getStorage, deleteStorage }
}
export default useStorage