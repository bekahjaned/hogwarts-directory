import { useState, useEffect } from 'react'
import hogwarts from '../api/hogwarts'

export default () => {
    const [results, setResults] = useState([])

    const getPeople = async () => {
        const response = await hogwarts.get()
        setResults(response.data)
    }

    useEffect(() => {
        getPeople()
    }, [])

    return [results]
}