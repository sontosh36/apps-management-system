import axios from "axios";
import { useEffect, useState } from "react"

const useApps = () =>{
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setLoading(true)
        axios('/appsData.json')
        .then(app => setApps(app.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [])

    return { apps, loading, error}
}
export default useApps