import { Food } from "./app/food";
import { Tag } from "./app/Tag"

export const sample_foods: Food[] = [
    {
        id: '1',
        imageUrl: 'assets/rice/basmati_rice.jpg',
        name: 'basmati Rice',
        price: '160',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'rice']
    },
    {
        id: '2',
        imageUrl: 'assets/rice/Chicken-Biryani.jpg ',
        name: 'Chicken Biryani',
        price: '210',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Biryani', 'rice', 'Chicken']
    },
    {
        id: '3',
        imageUrl: 'assets/rice/hyderabadi Chicken-dum-biryani-.jpg ',
        name: 'hyderabadi Chicken biryani',
        price: '230',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Biryani', 'rice', 'Chicken']
    },
    {
        id: '4',
        imageUrl: 'assets/rice/Indian-lemon-rice_-14.jpg ',
        name: 'Indian lemon rice',
        price: '110',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'rice']
    },
    {
        id: '5',
        imageUrl: 'assets/rice/mutton biryani.jpg ',
        name: 'Mutton Biryani',
        price: '290',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'biryani', 'rice','mutton']
    },
    {
        id: '6',
        imageUrl: 'assets/rice/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg ',
        name: 'Jeera Rice',
        price: '130',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'rice']
    },
    {
        id: '7',
        imageUrl: 'assets/egg/Dim-Kosha.jpg ',
        name: 'Dim Kosha',
        price: '85',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'egg']
    },
    {
        id: '8',
        imageUrl: 'assets/egg/egg cheese sandwich.jpg ',
        name: 'egg cheese sandwich',
        price: '60',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['Breakfast', 'starter', 'egg']
    },
    {
        id: '9',
        imageUrl: 'assets/egg/egg roll.jpg',
        name: 'Egg Roll',
        price: '40',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['Breakfast', 'starter', 'egg']
    },
    {
        id: '10',
        imageUrl: 'assets/egg/Egg-Bhurji-.jpg ',
        name: 'Egg Bhurji',
        price: '95',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'egg']
    },
    {
        id: '11',
        imageUrl: 'assets/egg/egg-devil.jpg ',
        name: 'Egg Devil',
        price: '120',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['Breakfast', 'starter', 'egg']
    },
    {
        id: '12',
        imageUrl: 'assets/egg/Kolhapuri-egg-curry-.jpg ',
        name: 'Egg Curry',
        price: '210',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'egg']
    },
    {
        id: '13',
        imageUrl: 'assets/southindian/chicken chettinad.jpeg ',
        name: 'Chicken Chettinad',
        price: '100',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Chicken']
    },
    {
        id: '14',
        imageUrl: 'assets/southindian/coconut rice.jpeg ',
        name: 'coconut rice',
        price: '240',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'rice']
    },
    {
        id: '14',
        imageUrl: 'assets/southindian/idli.jpg ',
        name: 'Idli',
        price: '210',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Breakfast']
    },
    {
        id: '15',
        imageUrl: 'assets/southindian/Masala-Dosa.jpg ',
        name: 'Masala Dosa',
        price: '210',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Breakfast']
    },
    {
        id: '16',
        imageUrl: 'assets/southindian/pongal.jpeg',
        name: 'Pongal',
        price: '55',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['Breakfast']
    },
    {
        id: '17',
        imageUrl: 'assets/southindian/Upma.jpg ',
        name: 'Upma',
        price: '50',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['Breakfast']
    },
    {
        id: '18',
        imageUrl: 'assets/chicken/butter chicken.jpg ',
        name: 'butter chicken',
        price: '80',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Chicken']
    },
    {
        id: '19',
        imageUrl: 'assets/chicken/chicken chaap.jpg ',
        name: 'Chicken Chaap',
        price: '120',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Chicken']
    },
    {
        id: '20',
        imageUrl: 'assets/chicken/chicken rezala.jpg ',
        name: 'chicken rezala',
        price: '290',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Chicken']
    },
    {
        id: '21',
        imageUrl: 'assets/chicken/Chicken-Bharta-Recipe-500x500.jpg ',
        name: 'Chicken-Bharta',
        price: '310',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Chicken']
    },
    {
        id: '22',
        imageUrl: 'assets/chicken/dry chili chicken.jpg ',
        name: 'Chili Chicken',
        price: '140',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Chicken']
    },
    {
        id: '23',
        imageUrl: 'assets/chicken/indianstyle chicken curry.jpg ',
        name: 'Chicken Curry',
        price: '210',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'Chicken']
    },
    {
        id: '24',
        imageUrl: 'assets/chinese/Chicken-Chow-Mein-.jpg',
        name: 'Chicken ChowMein',
        price: '85',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['Chicken', 'Breakfast', 'starter']
    },
    {
        id: '25',
        imageUrl: 'assets/chinese/chopsuey.jpg ',
        name: 'Chopsuey',
        price: '99',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['egg', 'Breakfast', 'starter']
    },
    {
        id: '26',
        imageUrl: 'assets/chinese/dim-sum.jpg ',
        name: 'Momo',
        price: '90',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['Chicken', 'Breakfast', 'starter']
    },
    {
        id: '27',
        imageUrl: 'assets/chinese/Spicy-Chicken-Hakka-Noodle.jpg ',
        name: 'Spicy Chicken Hakka Noodle',
        price: '115',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['breakfast','Chicken']
    },
    {
        id: '28',
        imageUrl: 'assets/chinese/wonton-soup.jpg ',
        name: 'Momo combo',
        price: '110',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['breakfast','momo']
    },
    {
        id: '29',
        imageUrl: 'assets/chinese/Sweet-and-Sour-Pork.jpg ',
        name: 'Sweet and Sour Pork',
        price: '160',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['starter']
    },
    {
        id: '30',
        imageUrl: 'assets/mutton/hundi mutton.jpg ',
        name: 'hundi mutton',
        price: '430',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'mutton']
    },
    {
        id: '31',
        imageUrl: 'assets/mutton/mutton chap.jpg ',
        name: 'Mutton Chap',
        price: '410',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'mutton']
    },
    {
        id: '32',
        imageUrl: 'assets/mutton/mutton kosha.jpg',
        name: 'Mutton Kosha',
        price: '385',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'mutton']
    },
    {
        id: '33',
        imageUrl: 'assets/mutton/mutton-curry-.jpg ',
        name: 'Mutton Curry',
        price: '430',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'mutton']
    },
    {
        id: '34',
        imageUrl: 'assets/mutton/mutton-rogan-josh-.jpg ',
        name: 'Mutton Rogan Josh',
        price: '510',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'mutton']
    },
    {
        id: '35',
        imageUrl: 'assets/mutton/mutton-tikka-masala-1-1.jpg ',
        name: 'Mutton Tikka Masala',
        price: '450',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'mutton']
    },
    {
        id: '36',
        imageUrl: 'assets/veg/aloo-chana.jpg ',
        name: 'Aloo Chana',
        price: '40',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['breakfast','veg','starter']
    },
    {
        id: '37',
        imageUrl: 'assets/veg/Kadai-vegetables.jpg ',
        name: 'Kadai Vegetables',
        price: '69',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner','veg']
    },
    {
        id: '38',
        imageUrl: 'assets/veg/mix-veg.jpg ',
        name: 'Mix Veg',
        price: '80',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner','veg']
    },
    {
        id: '39',
        imageUrl: 'assets/veg/rajma-masala.jpg ',
        name: 'Rajma Masala',
        price: '85',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner','veg']
    },
    {
        id: '40',
        imageUrl: 'assets/veg/Vegetable_Makhanwala_Recipe_North_Indian_Punjabi_1.jpg',
        name: 'Vegetable Makhanwala',
        price: '120',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner','veg']
    },
    {
        id: '41',
        imageUrl: 'assets/veg/veg-kolhapuri.jpg ',
        name: 'Veg Kolhapuri',
        price: '45',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner','veg']
    },
    {
        id: '42',
        imageUrl: 'assets/paneer/butter-paneer-masala-.jpg ',
        name: 'Butter Paneer Masala',
        price: '250',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'paneer']
    },
    {
        id: '43',
        imageUrl: 'assets/paneer/Chilli-Paneer-Restaurant-Style.jpg ',
        name: 'Chilli Paneer',
        price: '230',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'paneer']
    },
    {
        id: '44',
        imageUrl: 'assets/paneer/kadai-paneer-recipe.jpg ',
        name: 'kadai Paneer',
        price: '360',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'paneer']
    },
    {
        id: '45',
        imageUrl: 'assets/paneer/palak-paneer-.jpg ',
        name: 'Palak Paneer',
        price: '190',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'paneer']
    },
    {
        id: '46',
        imageUrl: 'assets/paneer/Paneer-rezala-.jpg ',
        name: 'Paneer Rezala',
        price: '210',
        favorite: true,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'paneer']
    },
    {
        id: '47',
        imageUrl: 'assets/paneer/Shahi_Paneer_.jpg ',
        name: 'Shahi Paneer',
        price: '120',
        favorite: false,
        origins: ['kolkata', 'saltlake'],
        tags: ['lunch', 'dinner', 'paneer']
    }
]

export const sample_tags: Tag[] = [
    { name: 'All', count: 47 },
    { name: 'lunch', count: 36 },
    { name: 'dinner', count: 36 },
    { name: 'Breakfast', count: 13 },
    { name: 'Starter', count: 8 },
    { name: 'rice', count: 7 },
    { name: 'Biryani', count: 3 },
    { name: 'Chicken', count: 12 },
    { name: 'Egg', count: 7 },
    { name: 'Mutton', count: 7 },
]