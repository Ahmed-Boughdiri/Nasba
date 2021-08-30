
export interface CardProps {
    thumbnail: String | undefined,
    name: String,
    price: Number,
    discountPirce: Number | undefined,
    genre: String,
    size: String,
    onClick: () => void
}

