export const portfolio = {
    balance: "12,724.33",
    changes: "+2.36%",
};

export const transactionHistory = [
    {
        id: 1,
        description: "Cafeteria",
        amount: -2.0034,
        currency: "ⓔ",
        type: "S",      // S - Sold, B - Bought
        date: "14:20 12 Apr"
    },
    {
        id: 2,
        description: "PhotoCopier",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 3,
        description: "Cafeteria",
        amount: -2.0034,
        currency: "ⓔ",
        type: "S",
        date: "14:20 12 Apr"
    },
    {
        id: 4,
        description: "Ahsan Ali Abbasi",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 5,
        description: "Shahzeb Malik",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },

    {
        id: 6,
        description: "Muhammad Sameed Ansari",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 7,
        description: "Ahsan Ali Abbasi",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 8,
        description: "Ahsan Ali Abbasi",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 9,
        description: "Ahsan Ali Abbasi",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 10,
        description: "Ahsan Ali Abbasi",
        amount: -2.0034,
        currency: "ⓔ",
        type: "S",      // S - Sold, B - Bought
        date: "14:20 12 Apr"
    },
    {
        id: 11,
        description: "Shahzeb Malik",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 12,
        description: "Charity",
        amount: -2.0034,
        currency: "ⓔ",
        type: "S",
        date: "14:20 12 Apr"
    },
    {
        id: 13,
        description: "Library",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 14,
        description: "Library",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },

    {
        id: 15,
        description: "Charity",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 16,
        description: "Charity",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 17,
        description: "Charity",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 18,
        description: "Muhammad Sameed Ansari",
        amount: 2.0034,
        currency: "ⓔ",
        type: "B",
        date: "14:20 12 Apr"
    },
];

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}

export const myCart = [
    {
        ...hamburger,
        qty: 1
    },
    {
        ...hotTacos,
        qty: 1
    },
    {
        ...vegBiryani,
        qty: 1
    }
]

const chartOptions = [
    {
        id: 1,
        label: "1 hr"
    },
    {
        id: 2,
        label: "3 Days"
    },
    {
        id: 3,
        label: "1 Week"
    },
    {
        id: 4,
        label: "1 Month"
    },
    {
        id: 5,
        label: "3 Months"
    }
]

const dummyData = { portfolio, transactionHistory, myCart, chartOptions };

export default dummyData;