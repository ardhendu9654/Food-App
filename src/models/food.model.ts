import { model, Schema } from 'mongoose';

export interface Food {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    favorite: boolean;
    origins: string[];
    tags?: string[];
}

export const FoodSchema = new Schema<Food>({
    imageUrl: { type: String, required: true },
    name: { type: String, require: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, default: false },
    origins: { type: [String], required: true },
    tags: { type: [String], required: true },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
}
);

export const FoodModel = model<Food>('Food',FoodSchema);