

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        requered: true
    },
    image:{
        type: String
    }
},
    {timestamps: true});

export default mongoose.models.Book || mongoose.model("Book", bookSchema);




