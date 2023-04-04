import { Date, model, Schema, Types } from "mongoose";

interface ITheater {
    theaterId: number;
    location: {
        address: {
            street1: string,
            city: string,
            state: string,
            zipcode: string,
        },
        geo: {
            type: string,
            coordinates: number[],
        }
    }
}


const theaterSchema = new Schema<ITheater>(
    {
        theaterId: { type: Number, required: true },
        location: {
            address: {
                street1: { type: String, required: true },
                city: { type: String, required: true },
                state: { type: String, required: true },
                zipcode: { type: String, required: true },
            },
            geo: {
                type: { type: String, required: true },
                coordinates: { type: [Number], required: true },
            }
        }
    }, { timestamps: true });

const Theater = model<ITheater>("theaters", theaterSchema);

export default Theater;
