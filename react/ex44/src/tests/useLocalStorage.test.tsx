import useLocalStorage from '../hooks/useLocalStorage'
import { act, renderHook } from '@testing-library/react'

beforeEach(() => {
    localStorage.clear()
})

test('Setting a new data to store and changing something else', () => {
    const someConfig = {
        username: 'Alice',
        lang: 'en',
    }

    const { result } = renderHook(() => useLocalStorage('test', someConfig))
    
    act(() => {
        result.current[1]({
            username: 'Alice',
            lang: 'es',
        })
    })

    expect(result.current[0]).toStrictEqual({
        username: 'Alice',
        lang: 'es',
    })
})
