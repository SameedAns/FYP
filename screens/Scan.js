import React from "react"
import {
    View,
    Text,
    Image,
    SafeAreaView
} from "react-native";
import { COLORS, images } from "../constants"

const Scan = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#c1ccd0" }}>
            <View>
                <Image
                    source={images.qr_code}
                    style={{
                        marginTop: 150,
                        width: 400,
                        height: 400,
                        tintColor: COLORS.secondary
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Scan;