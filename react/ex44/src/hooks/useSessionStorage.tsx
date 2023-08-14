import useStorage from './useStorageHook';

const useSessionStorage = (key: string, initialValue: any) => {
    return useStorage(key, initialValue, sessionStorage);
};

export default useSessionStorage;
