import React from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

import { Header, IconButton } from "../components";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../constants";

const Transfer = ({navigation}) => {

    function renderHeader() {
        return (
            <Header
                title="Transfer Coins"
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
            />
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
                    justifyContent: "center",
                    marginRight: 20,
                    marginLeft: 20,
                    marginTop: 20
                    
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

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 3
                }}
            >

                {/* Email Address */}
                <View style={{ marginTop: SIZES.padding * 3 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3 }}>Address</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Enter Receiving Address"
                        placeholderTextColor={COLORS.black}
                        selectionColor={COLORS.black}
                    />
                </View>

                <View style={{ marginTop: SIZES.padding * 3 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3 }}>Amount</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Enter Amount"
                        placeholderTextColor={COLORS.black}
                        selectionColor={COLORS.black}
                    />
                </View>

                

            </View>
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
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Send</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white

            }}
        >
            {/* Header */}
            {renderHeader()}

            {renderBanner()}

            {renderForm()}

            {renderButton()}


            
        </View>
    )
}

export default Transfer;