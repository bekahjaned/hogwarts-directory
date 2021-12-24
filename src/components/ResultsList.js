import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ house, results, navigation }) => {
    return (
        <View style={styles.containter}>
            <Text style={styles.title}>{house}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.name}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Character', { id: item })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>  
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containter: {
        marginBottom: 15
    },  
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultsList)