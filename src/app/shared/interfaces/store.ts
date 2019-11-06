export interface IGadget {
    title: string;
    imagePath: string;
    imageTabletPath: string;
    imagePhonePath: string;
    amount: string;
}

export interface ICard {
    discount: string;
    imagePath: string;
    imagePhonePath: string;
    caption: string;
    oldPrice: string;
    price: string;
}
