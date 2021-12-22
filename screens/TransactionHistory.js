import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';

import { COLORS, SIZES, FONTS, icons, dummyData } from "../constants";

const TransactionHistory = () => {

    const [transactionHistory, setTransactionHistory] = React.useState(dummyData.transactionHistory)

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: SIZES.base
            }}
            onPress={() => console.log(item)}
        >
            <Image
                source={icons.transaction}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: item.type == "B" ? COLORS.green : COLORS.red
                }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                <Text style={{ ...FONTS.h4 }}>{item.description}</Text>
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.date}</Text>
            </View>

            <View style={{ flexDirection: "row", height: "100%", alignItems: "center"}}>
                <Text 
                    style={{ 
                        color: item.type == "B" ? COLORS.green : COLORS.black,
                        ...FONTS.h5
                    }}
                >{item.amount} {item.currency}</Text>
                <Image
                    source={icons.right_arrow}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}    
                />
            </View>

        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#c1ccd0" }}>
        <View style={{ flex: 1, paddingBottom: 85 }}>
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 20,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                <Text style={{ ...FONTS.h2 }}>Transaction History</Text>
                
                <FlatList
                    contentContainerStyle={{ marginTop: SIZES.radius}}
                    scrollEnabled={true}
                    data={transactionHistory}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => {
                        return (
                            <View
                                style={{
                                    width: "100%", height: 1,
                                    backgroundColor: COLORS.yellow
                                }}
                            ></View>
                        )
                    }}
                />
            </View>

        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default TransactionHistory;