import { Date, model, Schema, Types } from "mongoose";

interface IComment {
    name: string;
    email: string;
    movie_id: { type: Types.ObjectId };
    text: string;
}


const commentSchema = new Schema<IComment>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        movie_id: { type: Types.ObjectId, ref: "movies", required: true },
        text: { type: String, required: true },
    }, { timestamps: true });

const Comment = model<IComment>("comments", commentSchema);

export default Comment;
