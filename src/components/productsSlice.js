import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        name: "Hemmon Vase",
        description:
          "This vase is crafted using a textured clay giving it a terracotta feel. Great for dried posies or singular stems.",
        price: 3200,
        gallery: [
          {
            img: "../assets/imgs/Hemmon_Vase_960x.jpeg",
            alt: "Image of the vase",
          },
          {
            img: "../assets/imgs/hemmon_Land_2560x.jpeg",
            alt: "Image of the vase",
          },
        ],
        material: "ceramic",
        tags: ["ceramic", "vase", "minimalist", "brown"],
        hasCrossProduct: false,
      },
      {
        id: 2,
        name: "Ceramic Pour Over & Pinch Cup",
        description:
          "The Coffee Pour Over + Pinch Cup is an easy and pleasant way of making your morning coffee. Hand made, the ceramic conducts heat during the brewing process, while the textured design inside works to direct the water into the ground beans, to ensure an even and delicious filter coffee.",
        price: 4555,
        gallery: [
          {
            img: "../assets/imgs/Metallic_PourOver_960x.jpeg",
            alt: "Image of the vase",
          },
          {
            img: "../assets/imgs/products1.jpeg",
            alt: "Image of the vase",
            hasCrossProduct: true,
          },
          {
            img: "../assets/imgs/Pourover_Landscape_2560x.jpeg",
            alt: "Image of the vase",
          },
        ],
        material: "ceramic",
        tags: ["ceramic", "cup", "minimalist"],
        crossProductImage: "../assets/imgs/products1.jpeg",
        crossProductPosition: {
          left: "25vw",
          top: "39vw",
        },
        crossProductId: 3,
      },
      {
        id: 8,
        name: "Mountain Hut Knife",
        description:
          "This specially crafted knife was made by 62 year old, Yoshifumi Otsuka, a third generation blacksmith in Chizu Town, Tottori Prefecture. Made from Japanese iron sand, a valuable and sought-after material, and a cherry tree handle. Only a limited number of professionals nationwide are capable of this type of hand forging.",
        price: 29000,
        gallery: [
          {
            img: "../assets/imgs/Mountainhut1_960x.jpeg",
            alt: "Knife",
          },
          {
            img: "../assets/imgs/Mountainhut2_960x.jpeg",
            alt: "Knife",
          },
          {
            img: "../assets/imgs/Mountainhut3_960x.jpeg",
            alt: "Knife",
          },
        ],
        material: "wood",
        tags: ["wood", "knife"],
        hasCrossProduct: false,
      },
      {
        id: 3,
        name: "Stoneware Candle – White",
        description:
          "Made for those who appreciate timeless design and sustainability, the Stoneware Candle features a white, glossy glaze and a more rustic shape, making it not only the perfect candle but a vessel to hold your coffee in after.",
        price: 4555,
        gallery: [
          {
            img: "../assets/imgs/Stoneware-white_960x.jpeg",
            alt: "Image of the vase",
          },
          {
            img: "../assets/imgs/products1.jpeg",
            alt: "Image of the vase",
            hasCrossProduct: true,
          },
        ],
        material: "ceramic",
        tags: ["ceramic", "candle", "minimalist"],
        crossProductImage: "../assets/imgs/products1.jpeg",
        crossProductPosition: {
          left: "11vw",
          top: "37vw",
        },
        crossProductId: 2,
      },
      {
        id: 4,
        name: "Matcha",
        description:
          "Made in Japan, this bowl is the perfect shape for whisking your matcha. Featuring a brown, natural glaze and a deep design, it's a practical and classic bowl to add to your kitchen.",
        price: 6722,
        gallery: [
          {
            img: "../assets/imgs/Matcha_Bowl_960x.jpeg",
            alt: "Image of the vase",
          },
          {
            img: "../assets/imgs/matcha-and-juicer.jpeg",
            alt: "Image of the vase",
            hasCrossProduct: true,
          },
        ],
        material: "ceramic",
        tags: ["ceramic", "bowl", "minimalist", "brown"],
        crossProductImage: "../assets/imgs/matcha-and-juicer.jpeg",
        crossProductPosition: {
          left: "34vw",
          top: "49vw",
        },
        crossProductId: 5,
      },
      {
        id: 5,
        name: "Ceramic Lemon Juicer",
        description:
          "Made in Japan, this bowl is the perfect shape for whisking your matcha. Featuring a brown, natural glaze and a deep design, it's a practical and classic bowl to add to your kitchen.",
        price: 4555,
        gallery: [
          {
            img: "../assets/imgs/juicer_960x.jpeg",
            alt: "Image of the vase",
          },
          {
            img: "../assets/imgs/matcha-and-juicer.jpeg",
            alt: "Image of the vase",
            hasCrossProduct: true,
          },
        ],
        material: "ceramic",
        tags: ["ceramic", "juicer", "minimalist", "grey", "juiceLover"],
        crossProductImage: "../assets/imgs/matcha-and-juicer.jpeg",
        crossProductPosition: {
          left: "26vw",
          top: "21vw",
        },
        crossProductId: 4,
      },
      {
        id: 6,
        name: "Chips Stacking Mug – Speckled White",
        description:
          "This mug was made for both function and appeal. Designed to be stackable and easy to hold, it was made in the Mino Province by CHIPS, who produce tableware to blend into everyday life.",
        price: 5750,
        gallery: [
          {
            img: "../assets/imgs/Chips_Mug_White_Speckled_960x.jpeg",
            alt: "Image of the vase",
          },
        ],
        material: "ceramic",
        tags: ["ceramic", "cup", "minimalist", "colorfull", "juiceLover"],
        hasCrossProduct: false,
      },
      {
        id: 7,
        name: "Medium Universal Knife – Wild Cherry Wood",
        description:
          "This specially crafted knife was made by 62 year old, Yoshifumi Otsuka, a third generation blacksmith in Chizu Town, Tottori Prefecture. Made from Japanese iron sand, a valuable and sought-after material, and a cherry tree handle. Only a limited number of professionals nationwide are capable of this type of hand forging. This knife is perfect for cheeses, spreading jams and slicing meats.",
        price: 31000,
        gallery: [
          {
            img: "../assets/imgs/Universal-knife-Middle-cherry1_960x.jpeg",
            alt: "Knife",
          },
          {
            img: "../assets/imgs/Universal-knife-Middle-cherry3_960x.jpeg",
            alt: "Knife",
          },
          {
            img: "../assets/imgs/kniveslandscape_2560x.jpeg",
            alt: "Knife",
          },
        ],
        material: "wood",
        tags: ["wood", "knife"],
        hasCrossProduct: false,
      },
      {
        id: 9,
        name: "Three Tone Tote – Grey",
        description:
          "This tote bag was made using a thick cotton canvas in three colour ways. Featuring two handles for easy holding, this bag is perfect for your laptop and daily necessities.",
        price: 17999,
        gallery: [
          {
            img: "../assets/imgs/Grey_Tote_960x.jpeg",
            alt: "Bag",
          },
          {
            img: "../assets/imgs/Tote_SIde_Grey_960x.jpeg",
            alt: "Bag",
          },
        ],
        material: "texture",
        tags: ["bag"],
        hasCrossProduct: false,
      },
      {
        id: 10,
        name: "Worktones x Provider Store Tote",
        description:
          "For Everyday Happiness. We've collaborated with our friends at Worktones to create a nifty 'don't leave home without me' kind of bag.",
        price: 8000,
        gallery: [
          {
            img: "../assets/imgs/20200915_WORKTONES2035_960x.jpeg",
            alt: "Bag",
          },
        ],
        material: "texture",
        tags: ["bag"],
        hasCrossProduct: false,
      },
    ],
    filters: [
      {
        img: "../assets/imgs/products1.jpeg",
        tags: ["ceramic", "brown", "minimal"],
      },
      {
        img: "../assets/imgs/matcha-and-juicer.jpeg",
        tags: ["juiceLover"],
      },
      {
        img: "../assets/imgs/filter.jpeg",
        tags: ["ceramic", "brown", "minimal"],
      },
      {
        img: "../assets/imgs/filter2.jpeg",
        tags: ["bag"],
      },
      {
        img: "../assets/imgs/knife.jpeg",
        tags: ["wood", "knife"],
      },
    ],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  productsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = (state) => state.products.products;
export const selectFilters = (state) => state.products.filters;

export default productsSlice.reducer;
