import {useNavigate} from "react-router-dom";
import {useCallback, useEffect, useRef} from "react";

export function useNav() {
    const navigate = useNavigate()
    const navigateRef = useRef({ navigate })
    useEffect(() => {
        navigateRef.current.navigate = navigate
    }, [navigate])
    return useCallback((location) => {
        navigateRef.current.navigate(location)
    }, [])
}
