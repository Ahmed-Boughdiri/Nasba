
export default interface ProductProps {
    id: String,
    name: String,
    label: String,
    price: Number,
    discountPrice?: Number,
    size: String,
    genre: String,
    thumbnail: String[],
    status: "AVAILABLE" | "NOT AVAILABLE"
}
