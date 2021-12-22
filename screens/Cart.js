import React from "react"
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import { Header, IconButton, CartQuantityButton, StepperInput, FooterTotal } from "../components";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../constants";

const Cart = ({ navigation }) => {

    const [cartList, setCartList] = React.useState(dummyData.myCart)

    // Handler

    function updateQuantityHandler(newQty, id) {
        const newCartList = cartList.map(cl => (
            cl.id === id ? { ...cl, qty: newQty } : cl
        )) 
        setCartList(newCartList)
    }

    function removeCartHandler(id) {
        const newCartList = [...cartList]

        const index = newCartList.findIndex(cart => cart.id === id)

        newCartList.splice(index, 1)
        setCartList(newCartList)
    }

    // Render

    function renderHeader() {
        return (
            <Header
                title="Cafe Cart"
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
                            borderColor: COLORS.black
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

    function renderCartList() {
        return (
            <SwipeListView
                data={cartList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        style={{
                            height: 100,
                            backgroundColor: COLORS.lightGray,
                            ...styles.cartItemContainer
                        }}
                    >
                        {/* Food Image*/}
                        <View
                            style={{
                                width: 90,
                                height: 100,
                                marginLeft: -10
                            }}
                        >
                            <Image
                                source={data.item.image}
                                resizeMode="contain"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    top: 10
                                }}
                            />
                        </View>

                        {/* Food Info*/}
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text style={{ ...FONTS.body3 }}>{data.item.name}</Text>
                            <Text style={{ color: COLORS.primary, ...FONTS.h5}}>${data.item.price}</Text>
                        </View>

                        {/* Quantity */}
                        <StepperInput
                            containerStyle={{
                                height: 50,
                                width: 125,
                                backgroundColor: COLORS.white
                            }}
                            value={data.item.qty}
                            onAdd={() => updateQuantityHandler(data.item.qty+1, data.item.id)}
                            onMinus={() => {
                                if (data.item.qty > 1) {
                                    updateQuantityHandler(data.item.qty-1, data.item.id)
                                }
                            }}
                        />
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton
                        containerStyle={{
                            flex: 1,
                            justifyContent: "flex-end",
                            backgroundColor: COLORS.red,
                            ...styles.cartItemContainer
                        }}
                        icon={icons.delete_icon}
                        iconStyle={{
                            marginRight: 10
                        }}
                        onPress={() => removeCartHandler(data.item.id)}
                    />
                )}
            />
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#c1ccd0"

            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Cart List */}
            {renderCartList()}

            {/* Footer */}
            <FooterTotal
                subTotal={37.97}
                serviceFee={0.00}
                total={37.97}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})

export default Cart;