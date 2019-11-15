export interface IResponse<T> {
    results: T;
}

export interface IGadget {
    title: string;
    imagePath: string;
    imageTabletPath: string;
    imagePhonePath: string;
    amount: string;
}

export interface ICard {
    id: number;
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
    quantity?: number;
}

export interface ICategory {
    title: string;
    text: string;
    price: number;
    background: string;
    img: string;
}

