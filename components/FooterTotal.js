import React from "react";
import {
    View,
    Text,
    Platform
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { TextButton, LineDivider } from "../components";
import { FONTS, SIZES, COLORS } from "../constants";

const FooterTotal = ({ subTotal, serviceFee, total, onPress }) => {
    return (
        <View>
            {/* Shadow */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.transparent, COLORS.lightGray]}
                style={{
                    position: "absolute",
                    top: -15,
                    left: 0,
                    right: 0,
                    height: Platform.OS === "ios"? 200 : 50,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }}
            />

            {/* Order Details */}
            <View
                style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    marginBottom: 20,
                    padding: 25,
                    backgroundColor: COLORS.white
                }}
            >
                {/* Subtotal */}
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body4 }}>Subtotal</Text>
                    <Text style={{ ...FONTS.h4}}>${subTotal.toFixed(2)}</Text>
                </View>

                {/* Service Fee */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.base,
                        marginBottom: SIZES.padding
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body4 }}>Serive Fee</Text>
                    <Text style={{ ...FONTS.h4 }}>${serviceFee.toFixed(2)}</Text>
                </View>

                {/* Line */}
                <LineDivider/>

                {/* Total */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.h2}}>Total:</Text>
                    <Text style={{ ...FONTS.h2 }}>${total.toFixed(2)}</Text>
                </View>

                {/* Button */}
                <TextButton
                    buttonContainerStyle={{
                        height: 50,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label="Place Your Order"
                    onPress={onPress}
                />
            </View>

        </View>
    )
}

export default FooterTotal;