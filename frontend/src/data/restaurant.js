export const RESTAURANT = {
  name: "Muthuraj Naati Mane",
  tagline: "Family Dining at Its Best",
  phone: "+91 91102 31750",
  phoneRaw: "+919110231750",
  rating: "4.4",
  reviews: "625",
  footfall: "570",
  category: "Multicuisine Family Restaurant",
  addressLine1: "Ground Floor, 46, 200/1, Kudlu Main Rd",
  addressLine2: "Kudlu Gate, Bengaluru, Karnataka 560068",
  mapsQuery: "Muthuraj Naati Mane, Kudlu Main Rd, Kudlu Gate, Bengaluru, Karnataka",
};

export const MENU = [
  {
    id: "north-indian",
    label: "North Indian Specialties",
    blurb: "Rich, slow-cooked gravies and tandoor classics from the north.",
    image: "https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    items: [
      { name: "Paneer Butter Masala", desc: "Cottage cheese in a velvety tomato-cashew gravy", price: "₹260" },
      { name: "Butter Chicken", desc: "Tandoori chicken simmered in creamy makhani sauce", price: "₹320" },
      { name: "Dal Makhani", desc: "Black lentils slow-cooked overnight with butter & cream", price: "₹230" },
      { name: "Kadai Mushroom", desc: "Mushrooms tossed with bell peppers & freshly ground spices", price: "₹250" },
      { name: "Mutton Rogan Josh", desc: "Tender mutton in an aromatic Kashmiri gravy", price: "₹390" },
    ],
  },
  {
    id: "south-indian",
    label: "South Indian Favourites",
    blurb: "Crisp dosas, fluffy idlis and authentic Naati Mane classics.",
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    items: [
      { name: "Masala Dosa", desc: "Crispy rice crepe with spiced potato, sambar & chutney", price: "₹120" },
      { name: "Idli Vada Combo", desc: "Steamed idlis & crisp medu vada with coconut chutney", price: "₹110" },
      { name: "Naati Chicken Curry", desc: "Country-style chicken in a fiery local masala", price: "₹300" },
      { name: "Ghee Podi Idli", desc: "Mini idlis tossed in ghee & house podi", price: "₹140" },
      { name: "Filter Coffee", desc: "Authentic South Indian degree coffee", price: "₹50" },
    ],
  },
  {
    id: "fusion",
    label: "Multicuisine Fusion",
    blurb: "Where global flavours meet Indian soul — crowd favourites for all.",
    image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    items: [
      { name: "Paneer Tikka Pizza", desc: "Wood-fired base topped with spiced paneer tikka", price: "₹290" },
      { name: "Schezwan Hakka Noodles", desc: "Indo-Chinese noodles wok-tossed in schezwan sauce", price: "₹210" },
      { name: "Chilli Chicken", desc: "Crispy chicken glazed in a sweet-spicy chilli sauce", price: "₹280" },
      { name: "Peri Peri Fries", desc: "Golden fries dusted with tangy peri peri", price: "₹150" },
      { name: "Grilled Veg Sandwich", desc: "Loaded veggies & cheese on grilled multigrain", price: "₹160" },
    ],
  },
  {
    id: "breads-rice",
    label: "Breads & Rice",
    blurb: "Tandoor-fresh breads and fragrant biryanis to complete the meal.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    items: [
      { name: "Hyderabadi Chicken Biryani", desc: "Long-grain basmati layered with spiced chicken", price: "₹280" },
      { name: "Veg Dum Biryani", desc: "Aromatic rice with garden vegetables & saffron", price: "₹220" },
      { name: "Butter Naan", desc: "Soft tandoor naan brushed with butter", price: "₹45" },
      { name: "Laccha Paratha", desc: "Flaky layered whole-wheat paratha", price: "₹50" },
      { name: "Jeera Rice", desc: "Basmati tempered with roasted cumin", price: "₹150" },
    ],
  },
  {
    id: "beverages",
    label: "Beverages & Desserts",
    blurb: "Cooling sips and sweet endings the whole family will love.",
    image: "https://images.unsplash.com/photo-1683533698664-12ee473e8c9d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    items: [
      { name: "Sweet / Salted Lassi", desc: "Thick churned yogurt served chilled", price: "₹80" },
      { name: "Masala Chai", desc: "Spiced tea brewed the traditional way", price: "₹40" },
      { name: "Fresh Lime Soda", desc: "Sweet, salt or mixed — your call", price: "₹70" },
      { name: "Gulab Jamun", desc: "Warm milk dumplings soaked in rose syrup", price: "₹90" },
      { name: "Gajar Ka Halwa", desc: "Slow-cooked carrot pudding with nuts", price: "₹120" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Raghavan",
    role: "Regular since 2021",
    quote: "Our go-to spot for family dinners. The Naati chicken curry is unbeatable and the staff always makes the kids feel at home.",
  },
  {
    name: "Arjun Mehta",
    role: "Local guide",
    quote: "Great value for money. Portions are generous, food is consistently fresh, and they speak Kannada, Hindi & Tamil — so easy for everyone.",
  },
  {
    name: "Fatima S.",
    role: "Weekend diner",
    quote: "The biryani here rivals bigger names in Bengaluru. Warm, welcoming and clean — exactly what a family restaurant should be.",
  },
  {
    name: "Kiran Kumar",
    role: "Office lunch crowd",
    quote: "Been coming for years. Reasonable prices, quick service and something for every palate. 4.4 stars well earned!",
  },
];

export const PROMOTIONS = [
  {
    title: "Weekend Biryani Feast",
    days: "Sat & Sun",
    desc: "Family bucket of Hyderabadi biryani for 4 with raita, salan & dessert.",
    price: "₹899",
    tag: "Family Pack",
  },
  {
    title: "North Indian Night",
    days: "Every Friday",
    desc: "Unlimited butter naan with any two signature gravies for two.",
    price: "₹649",
    tag: "For Two",
  },
  {
    title: "South Special Breakfast",
    days: "Daily till 11 AM",
    desc: "Dosa, idli-vada combo & filter coffee — a hearty morning start.",
    price: "₹199",
    tag: "Morning Deal",
  },
];
