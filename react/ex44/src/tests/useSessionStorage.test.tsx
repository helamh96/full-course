import useSessionStorage from '../hooks/useSessionStorage'
import { act, renderHook } from '@testing-library/react'

beforeEach(() => {
    sessionStorage.clear()
})

test("Setting and updating data in the session storage", () => {
    const someConfig = {
        username: 'Alice',
        lang: 'en',
    }

    const { result } = renderHook(() => useSessionStorage('test', someConfig))

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
