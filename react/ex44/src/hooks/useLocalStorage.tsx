import useStorage from './useStorageHook';

const useLocalStorage = (key: string, initialValue: any) => {
    return useStorage(key, initialValue, localStorage);
};

export default useLocalStorage;
