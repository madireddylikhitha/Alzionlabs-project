import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home({ navigation }) {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        getProductsList()
    }, [])

    const getProductsList = () => {
        console.log('in products');
        axios.get('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q')
            .then((res) => {
                if (res) {
                    setProductsList(res.data)
                }
            })
    }

    const getNavigatedToProduct = (item) => {
        navigation.navigate('product', { productDetails: item })
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => getNavigatedToProduct(item)} key={item.id}>
                <View style={styles.productCard}>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.priceView}>
                        <Text style={styles.price}>${item.price}</Text>
                        <Image source={require('../assets/images/heart.png')} />
                    </View>
                </View>
                <View style={{ position: 'absolute', left: 150, top: 10 }}>
                    <Image source={{ uri: item.image }} style={{ height: 180, width: 150 }} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={productsList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productCard: {
        width: '70%',
        height: 200,
        backgroundColor: '#9CE5CB',
        borderRadius: 10,
        marginTop: 80,
        marginLeft: 20,
        marginBottom: 20,
        padding: 20
    },
    category: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        color: '#002140',
        margin: 10,
        marginBottom: 0
    },
    name: {
        fontFamily: 'Philosopher',
        fontSize: 25,
        fontWeight: '700',
        color: '#002140',
        margin: 10,
        marginTop: 0
    },
    price: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        color: '#002140',
        margin: 10
    },
    priceView: {
        flex: 1,
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})