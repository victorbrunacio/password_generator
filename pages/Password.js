import {  FlatList } from 'react-native'
import useStorage from '../hooks/useStorage'
import { useEffect, useContext } from 'react';
import { useIsFocused } from "@react-navigation/native"
import ListPasswordItem from '../components/ListPasswordItem';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PasswordContext } from '../context/passwordContext';

export default function Password() {
  const focus = useIsFocused();
  const { getStorage } = useStorage()

  const { passwords, setPasswords } = useContext(PasswordContext)

  useEffect(() => {
    async function renderPassword() {
      const data = await getStorage('@passwords')
      setPasswords(data)
    }
    renderPassword()
    console.log(focus)
  }, [focus]);

  return (
    <SafeAreaView>
      <FlatList
        data={passwords}
        renderItem={({ item }) => <ListPasswordItem password={item} />}
        keyExtractor={item => String(item)}
      />
    </SafeAreaView>
  )
}