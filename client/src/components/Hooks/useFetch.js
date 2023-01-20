import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url)=>{
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    console.log(process.env.REACT_APP_API_URL + url)
    
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                setLoading(true)
                const res = await axios.get(process.env.REACT_APP_API_URL + url,
                {
                    headers:{
                        Authorization:"bearer " + process.env.REACT_APP_API_TOKEN
                    }
                }
                );
               
                setData(res.data.data)

            } catch (error) {
               setError(error)
            }
            setLoading(false)
        }
        fetchData()
    },[url])
    return {data,loading,error}
}
export default useFetch