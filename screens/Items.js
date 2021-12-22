import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Modal
} from 'react-native'
import {
    Svg,
    Polygon
} from 'react-native-svg';
import { BlurView } from "@react-native-community/blur";

import { Header, IconButton, CartQuantityButton, StepperInput } from "../components";

import { images, icons, COLORS, FONTS, SIZES, dummyData } from '../constants';

const Items = ({ navigation }) => {

    const [showAddToBagModal, setShowAddToBagModal] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [selectedSize, setSelectedSize] = React.useState("")

    const [recentlyViewed, setRecentlyViewed] = React.useState([
        {
            id: 0,
            name: "Burger",
            img: require("../assets/dummyData/hamburger.png"),
            bgColor: "#414045",
            type: "FAST FOOD",
            price: "119 ⓔ"
        },
        {
            id: 1,
            name: "Loaded Fries",
            img: require("../assets/dummyData/hamburger.png"),
            bgColor: "#4EABA6",
            type: "FAST FOOD",
            price: "135 ⓔ"
        },
        {
            id: 2,
            name: "Roll Parhata",
            img: require("../assets/dummyData/hamburger.png"),
            bgColor: "#2B4660",
            type: "FAST FOOD",
            price: "124 ⓔ"
        },
        {
            id: 3,
            name: "Simple Fries",
            img: require("../assets/dummyData/hamburger.png"),
            bgColor: "#A69285",
            type: "FAST FOOD",
            price: "99 ⓔ"
        },
        {
            id: 4,
            name: "Samosa Chaat",
            img: require("../assets/dummyData/hamburger.png"),
            bgColor: "#A02E41",
            type: "FAST FOOD",
            price: "10 ⓔ"
        },
    ]);

    // Render

    function renderHeader() {
        return (
            <Header
                title="Cafe Items"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40 
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back1}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <CartQuantityButton
                        quantity={3}
                    />
                }
            />
        )
    }

    function renderButton() {
        return (
            <View style={{ margin: SIZES.padding * 3 }}>
                <TouchableOpacity
                    style={{
                        height: 60,
                        backgroundColor: COLORS.primary,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    onPress={() => navigation.navigate("Cart")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Go To Cart</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderTrendingShoes(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: SIZES.padding, }
        } else {
            trendingStyle = {}
        }

        return (
            <TouchableOpacity
                style={{ height: 240, width: 180, justifyContent: 'center', marginHorizontal: SIZES.base, ...trendingStyle }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>

                <View style={[{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginTop: SIZES.base,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    marginRight: SIZES.padding,
                    paddingLeft: SIZES.radius,
                    paddingRight: SIZES.padding,
                    paddingBottom: SIZES.radius,
                    backgroundColor: item.bgColor
                }, styles.trendingShadow]}>
                    <View style={{ height: '35%', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.price}</Text>
                    </View>
                </View>

                <View style={{ position: 'absolute', top: 27, right: 0, width: "95%", height: "100%" }}>
                    <Svg height="100%" width="100%">
                        <Polygon
                            points="0,0 160,0 160,80"
                            fill="white"
                        />
                    </Svg>
                </View>

                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 50,
                        right: 0,
                        width: "98%",
                        height: 80,
                        transform: [
                            { rotate: '-15deg' }
                        ]
                    }}
                />
            </TouchableOpacity>
        )
    }

    function renderRecentlyViewed(item, index) {
        return (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row' }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={item.img}
                        resizeMode="contain"
                        style={{
                            width: 130,
                            height: 100,
                        }}
                    />
                </View>
                <View style={{ flex: 1.5, marginLeft: SIZES.radius, justifyContent: "center" }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body2 }}>{item.name}</Text>
                    <Text style={{ ...FONTS.h4 }}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}

            <View
                style={[{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    padding: 30,
                    borderRadius: 30,
                    backgroundColor: COLORS.white
                }, styles.recentContainerShadow]}
            >
                <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentlyViewed}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
                    />
                </View>
            </View>

            {selectedItem &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showAddToBagModal}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <BlurView
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        blurType="light"
                        blurAmount={20}
                        reducedTransparencyFallbackColor="white"
                    >
                        {/* Button to close modal */}
                        <TouchableOpacity
                            style={styles.absolute}
                            onPress={() => {
                                setSelectedItem(null)
                                setSelectedSize("")
                                setShowAddToBagModal(false)
                            }}
                        >
                        </TouchableOpacity>

                        {/* Modal content */}
                        <View style={{ justifyContent: 'center', width: "85%", backgroundColor: selectedItem.bgColor }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -SIZES.padding * 2 }}>
                                <Image
                                    source={selectedItem.img}
                                    resizeMode="contain"
                                    style={{
                                        width: "90%",
                                        height: 170,
                                        transform: [
                                            { rotate: '-15deg' }
                                        ]
                                    }}
                                />
                            </View>
                            <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body2 }}>{selectedItem.name}</Text>
                            <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3 }}>{selectedItem.type}</Text>
                            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.h1 }}>{selectedItem.price}</Text>
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                                <StepperInput
                                    containerStyle={{
                                        height: 50,
                                        width: 125,
                                        backgroundColor: COLORS.white
                                    }}
                                    value='0'
                                    //onAdd={() => updateQuantityHandler(value+1, data.item.id)}
                                    //onMinus={() => {
                                      //  if (data.item.qty > 1) {
                                        //    updateQuantityHandler(data.item.qty-1, data.item.id)
                                        //}
                                    //}}
                                />
                            </View>

                            <TouchableOpacity
                                style={{ width: '100%', height: 70, marginTop: SIZES.base, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                onPress={() => {
                                    setSelectedItem(null)
                                    setSelectedSize("")
                                    setShowAddToBagModal(false)
                                }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Add to Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Modal>
            }
            {renderButton()}
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: COLORS.white
    },
    trendingShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    recentContainerShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})

export default Items;