export type EventFunc = (e:React.ChangeEvent<HTMLFormElement>) => void;




export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    returnPolicy: string;
    minimumOrderQuantity: number;
    thumbnail: string;
    images: string[];
  }


  export interface Products {
    products: Product[];
    total:number;
    skip:number;
    limit:number;
}