import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            {result.image ? 
            <Image style={styles.image} source={{ uri: result.image }} /> : 
            <Image style={styles.image} source={{ uri: 'https://wallpapercave.com/wp/wp10062336.png' }} />}
            <Text style={styles.name}>{result.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },  
    image: {
        width: 150,
        height: 270,
        borderRadius: 5,
        marginBottom: 5

    },
    name: {
        fontWeight: 'bold'
    }
})

export default ResultDetail
