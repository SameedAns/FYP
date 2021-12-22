import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images, dummyData } from "../constants"

const Home = ({navigation}) => {

    const featuresData = [
        {
            id: 1,
            icon: icons.cafe,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Cafeteria"
        },
        {
            id: 2,
            icon: icons.photo_copier,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Photo Copier"
        },
        {
            id: 3,
            icon: icons.plus,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Request Coins"
        },
        {
            id: 4,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transfer"
            
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Fee"
        },
        {
            id: 6,
            icon: icons.library,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Library"
        },
        {
            id: 7,
            icon: icons.charity,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Charity"
        },
        {
            id: 8,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        }
    ]

    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: images.promoBanner,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: images.promoBanner,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it. Grab it now!"
        },
    ]

    const [features, setFeatures] = React.useState(featuresData)
    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData)

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h1 }}>Hello!</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.white }}>John Doe</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.lightGray
                        }}
                    >
                        <Image
                            source={icons.bell}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.secondary
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5
                            }}
                        >
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderBanner() {
        return (
            <View
                style={{
                    height: 120,
                    borderRadius: 20,
                    backgroundColor: COLORS.primary,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h5
                    }}
                >Your Balance</Text>
                <Text
                    style={{
                        marginTop: SIZES.base,
                        color: COLORS.white,
                        ...FONTS.h1
                    }}
                >{dummyData.portfolio.balance} ⓔ</Text>
            </View>
        )
    }

    function renderUpdatesBanner() {
        return (
            <View
                style={{
                    height: 120,
                    borderRadius: 20,
                    backgroundColor: COLORS.primary,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h5
                    }}
                >Update Details Here</Text>
            </View>
        )
    }

    function _onPress(item) {
        if (item.id === 1) {
            navigation.navigate("Items")
        } else if (item.id === 4) {
            navigation.navigate("Transfer")
        } 
    }

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h3 }}>Features</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
                onPress={() => _onPress(item)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'nowrap', ...FONTS.body4 }}>{item.description}</Text>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
            />
        )
    }

    function renderPromos() {

        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: SIZES.padding
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h3 }}>Latest Updates</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("View All")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}>View All</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#c1ccd0" }}>
            <View
                style={{
                    paddingHorizontal: SIZES.padding * 3
                }}
            >
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderPromos()}
                {renderUpdatesBanner()}
            </View>
        </SafeAreaView>
    )
}

export default Home;