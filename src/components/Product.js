import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Product({ route }) {
    const productDetails = route.params.productDetails
    return (
        <View style={styles.container}>
            <View style={styles.productStyles}>
                <Text style={styles.category}>{productDetails.category}</Text>
                <Text style={styles.name}>{productDetails.name}</Text>
                <View style={{ marginTop: 15 }}>
                    <Text>PRICE</Text>
                    <Text style={styles.price}>${productDetails.price}</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text>SIZE</Text>
                    <Text style={styles.price}>${productDetails.size}</Text>
                </View>
            </View>
            <View style={styles.imagesStyles}>
                <Image source={require('../assets/images/bag.png')} />
                <View style={styles.favourite}>
                <Image source={require('../assets/images/heart.png')} />
                </View>
                <Image source={{ uri: productDetails.image }} style={{ height: 200, width: 200 }} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productStyles: {
        backgroundColor: '#9CE5CB',
        width: '90%',
        height: 350,
        margin: 10,
        padding: 20,
        borderRadius: 25
    },
    category: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '700',
        color: '#002140',
        margin: 10,
    },
    name: {
        fontFamily: 'Philosopher',
        fontSize: 35,
        fontWeight: '700',
        color: '#002140',
        margin: 10,
    },
    price: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '700',
        color: '#002140',
    },
    imagesStyles:{
        flex: 1, 
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-around', 
        alignItems: 'center' ,
        position:'absolute',
        top:250
    },
    favourite:{
        height:'25%',
        width:'10%',
        borderRadius:15,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center'
    }
}) 