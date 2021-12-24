import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const HomeScreen = () => {
    const [results] = useResults()

    const filterResultByHouse = (house) => {
        // house === 'Gryffindor' || 'Slytherin' || 'Ravenclaw' || 'Hufflepuff' || ''
        return results.filter(result => {
            return result.house === house
        })
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <ResultsList
                    house="Gryffindor"
                    results={filterResultByHouse('Gryffindor')}
                />
                <ResultsList 
                    house="Slytherin"
                    results={filterResultByHouse('Slytherin')}
                />
                <ResultsList 
                    house="Ravenclaw"
                    results={filterResultByHouse('Ravenclaw')}
                />
                <ResultsList 
                    house="Hufflepuff"
                    results={filterResultByHouse('Hufflepuff')}
                />
                <ResultsList 
                    house="Unknown"
                    results={filterResultByHouse('')}
                />
            </ScrollView>
            
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    }
})

export default HomeScreen