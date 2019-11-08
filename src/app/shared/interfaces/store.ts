export interface IGadget {
    title: string;
    imagePath: string;
    imageTabletPath: string;
    imagePhonePath: string;
    amount: string;
}

export interface ICard {
    discount?: string;
    model: {
        category: {
            name: string;
        },
        photo: {
            img: string;
        }
    };
    memory: {
        name: string
    };
    name: string;
    color: {
        name: string;
    };
    oldPrice?: string;
    price: number;
}

export interface IResponse<T> {
    results: T;
}
