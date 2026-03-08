
import mongoose from "mongoose";

const imagePostSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        }
    }, {timestamps: true}
);


export default mongoose.models.imagePost || mongoose.model("Image", imagePostSchema);




