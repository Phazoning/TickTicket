import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default new Storage({
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true
}) 