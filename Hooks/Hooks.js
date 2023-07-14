import { useEffect, useRef, useState } from 'react'

// 防抖 Hook
const useDebounce = (callback, delay = 500) => {
    const timerRef = useRef(null)
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            callback()
        }, delay)
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [callback, delay])
}
// 节流 Hook
const useThrottle = (callback, delay = 500) => {
    const timerRef = useRef(null)
    const leadingRef = useRef(true)
    useEffect(() => {
        if (!leadingRef.current) {
            return
        }
        leadingRef.current = false
        callback()
        const timer = setInterval(() => {
            leadingRef.current = true
            callback()
        }, delay)
        return () => {
            clearInterval(timer)
        }
    }, [callback, delay])
}
// 组件挂载 Hook
const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [callback])
}
// 组件卸载 Hook
const useUnmount = (callback) => {
    useEffect(() => {
        return () => {
            callback()
        }
    }, [callback])
}
//路由监听函数
function useRouter() {
    const [pathname, setPathname] = useState(window.location.pathname)
    useEffect(() => {
        const locationChange = () => {
            setPathname(window.location.pathname)
        }
        window.addEventListener('popstate', locationChange)
        return () => {
            window.removeEventListener('popstate', function useRouter() {
                const [pathname, setPathname] = useState(window.location.pathname)
                useEffect(() => {
                    const locationChange = () => {
                        setPathname(window.location.pathname)
                    }
                    window.addEventListener('popstate', locationChange)
                    return () => {
                        window.removeEventListener('popstate', locationChange)
                    }
                }, [])
                const push = (newPath) => {
                    window.history.pushState(null, null, newPath)
                    setPathname(newPath)
                }

                const replace = (newPath) => {
                    window.history.replaceState(null, null, newPath)
                    setPathname(newPath)
                }

                return { pathname, push, replace }
            }
            )
        }
    }, [])

    const push = (newPath) => {
        window.history.pushState(null, null, newPath)
        setPathname(newPath)
    }

    const replace = (newPath) => {
        window.history.replaceState(null, null, newPath)
        setPathname(newPath)
    }

    return { pathname, push, replace }
}
