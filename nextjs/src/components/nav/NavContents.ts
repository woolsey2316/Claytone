export const MobNavData = {
  Home: null,
  Shop: {
    'Handmade Pottery': {
      Creamer: null,
      Pitcher: null,
      'Sake Shot Glass': null,
    },
    'Khurja Pottery': {
      'Casserole Dish': null,
      'Garlic Keeper': null,
      'Toothbrush Holder': null,
    },
    Porcelain: {
      'Prep Bowl': null,
      'Terracotta Pots': null,
      Tumbler: null,
    },
    Stoneware: { Canister: null, 'Coaster Set': null, 'Wine Chiller': null },
    Earthenware: { 'Coffee Mug': null, 'Water Pot': null, 'Handi Pot': null },
  },
  'Ceramic Pots': { 'Football Cermaic Pot': null, 'Railing Planters': null },
  Pottery: {
    'Illuminated Vase': {
      'Golfer Coffee Mug': null,
      'Wall Pocket': null,
    },
  },
  Bricks: null,
  Tiles: null,
  'Earthen Wear': null,
  Products: {
    Accesories: null,
    'Bacon Cooker': null,
    'Bouquet Vase': null,
    'Julia Vase': null,
    'Sake Tray': null,
    'Square Baker': null,
    'Tea Bag Holder': null,
    'Tea Pot': null,
  },
  Blogs: null,
};

export const DesktopNavData: Record<
  string,
  string[] | Record<string, string[]> | null
> = {
  Home: null,
  Shop: {
    'Handmade Pottery': ['Creamer', 'Pitcher', 'Sake Shot Glass'],
    'Khurja Pottery': ['Casserole Dish', 'Garlic Keeper', 'Toothbrush Holder'],
    Porcelain: ['Prep Bowl', 'Terracotta Pots', 'Tumbler'],
    Stoneware: ['Canister', 'Coaster Set', 'Wine Chiller'],
    Earthenware: ['Coffee Mug', 'Water Pot', 'Handi Pot'],
  },
  'Ceramic Pots': ['Football Cermaic Pot', 'Railing Planters'],
  More: ['Pottery', 'Bricks', 'Tiles', 'Earthen Wear', 'Products'],
  Blogs: null,
};
