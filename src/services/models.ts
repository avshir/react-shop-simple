export interface IGood {
  mainId: string;
  displayName: string;
  displayDescription: string;
  displayType: string;
  mainType: string;
  offerId: string;
  devName: string;
  webURL: string;
  offerDates: {
    in: string;
    out: string;
  };
  colors: {
    color1: string;
    color2: string;
    color3: null;
    textBackgroundColor: string;
  };
  displayAssets: Array<{
    displayAsset: string;
    materialInstance: string;
    primaryMode: string;
    productTag: string;
    url: string;
    flipbook: null;
    background_texture: null;
    background: string;
    full_background: string;
  }>;
  firstReleaseDate: string;
  previousReleaseDate: string;
  giftAllowed: boolean;
  buyAllowed: boolean;
  price: {
    regularPrice: number;
    finalPrice: number;
    floorPrice: number;
  };
  rarity: {
    id: string;
    name: string;
  };
  series: null;
  banner: null;
  offerTag: null;
  granted: Array<{
    id: string;
    type: {
      id: string;
      name: string;
    };
    name: string;
    description: string;
    rarity: {
      id: string;
      name: string;
    };
    series: null;
    images: {
      icon: string;
      featured: null;
      background: string;
      icon_background: string;
      full_background: string;
    };
    juno: {
      icon: string;
    };
    beans: {
      icon: null;
    };
    video: null;
    audio: null;
    gameplayTags: Array<string>;
    set: {
      id: string;
      name: string;
      partOf: string;
    };
  }>;
  priority: number;
  section: {
    id: string;
    name: string;
    category: string;
    landingPriority: number;
    metadata: null;
  };
  groupIndex: number;
  storeName: string;
  tileSize: string;
  categories: Array<string>;
}

export interface ICartItem {
  mainId: string;
  displayName: string;
  price: {
    regularPrice: number;
    finalPrice: number;
    floorPrice: number;
  };
  quantity: number;
}
