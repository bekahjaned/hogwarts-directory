import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const CharacterScreen = ({ navigation }) => {
    const item = navigation.getParam('id')

    const { species, name, image, house, wand, patronus, dateOfBirth, wizard } = item

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            {species === 'human' && !wizard ? <Text style={styles.text}>Muggle</Text> : null}
            {wizard ? <Text style={styles.text}>Wizard</Text> : null}
            {image ? 
            <Image style={styles.image} source={{ uri: image }} /> : 
            <Image style={styles.image} source={{ uri: 'https://wallpapercave.com/wp/wp10062336.png' }} /> }
            {house ? <Text style={styles.text}>House: {house}</Text> : null}
            {wand.wood ? <Text style={styles.text}>Wand: {wand.wood}, {wand.core}</Text>: null}
            {patronus ? <Text style={styles.text}>Patronus: {patronus}</Text> : null}
            {dateOfBirth ? <Text style={styles.text}>Date of birth: {dateOfBirth}</Text>: null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10
    },
    image: {
        width: 250,
        height: 350
    },
    text: {
        marginVertical: 5
    }
})

export default CharacterScreen