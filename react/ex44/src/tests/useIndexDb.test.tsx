import 'fake-indexeddb/auto'
import { act, renderHook } from '@testing-library/react'
import useIndexedDB from '../hooks/useIndexDB'

test('Should initialize with initial data', async () => {
    const initialData = { prop1: 42, prop2: 'Alice' }
    const { result } = renderHook(() => useIndexedDB('key', initialData))
    const [item] = result.current

    expect(item).toEqual(initialData)
})

test('Should modify data correctly', async () => {
    const initialData = { prop1: 42, prop2: 'Bob' }
    const { result } = renderHook(() => useIndexedDB('info', initialData))

    expect(result.current[0]).toEqual(initialData)

    const updatedData = { prop1: 42, prop2: 'Charlie' }
    act(() => {
        result.current[1](updatedData)
    })

    expect(result.current[0]).toEqual(updatedData)
})
