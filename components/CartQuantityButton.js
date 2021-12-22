import React from "react";
import {
    View, 
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

import { COLORS, FONTS, SIZES, icons } from "../constants";

const CartQuantityButton = ({ containerStyle, iconStyle, quantity, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGreen,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={icons.cart}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>
    )
}

export default CartQuantityButton;