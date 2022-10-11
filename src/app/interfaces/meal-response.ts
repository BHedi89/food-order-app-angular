import { Meals } from "./meals";

export interface MealResponse {
    id: {
        name: string,
        description: string,
        price: number
    }
}
