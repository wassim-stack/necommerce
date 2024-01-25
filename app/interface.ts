export interface simplifiedProduct {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
}

export interface fullProduct {
  _id: string;
  name: string;
  iamges: any;
  price: number;
  slug: string;
  categoryName: string;
  description: string;
  price_id: string;
}
