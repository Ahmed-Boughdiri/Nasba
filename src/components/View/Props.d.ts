import { History } from "history";

export interface ViewProps {
    type: "DELIVERY-SUCCESS" | "DELIVERY-ERROR",
    history: History
}
