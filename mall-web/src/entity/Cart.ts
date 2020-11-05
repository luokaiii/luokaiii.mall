export declare interface Cart {
  totalPrice: number;
  goods: CartGoods[];
}

export declare interface CartGoods {
  name: string;
  cover: string;
  price: number;
  count: number;
  checked: boolean;
}
