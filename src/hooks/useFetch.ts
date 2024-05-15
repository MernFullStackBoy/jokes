import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null!)

    function getData() {
        fetch(url)
            .then(req => req.json())
            .then(res => {

                setData(res)
            }).catch(() => {

            }).finally(() => {
            })
    }

    useEffect(() => {
        getData()
    }, [url])

    return { data }
}