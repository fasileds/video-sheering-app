import mongoose from "mongoose"

const commentSchma = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    videoId:{
        type: String,
        required: true,
    },
    describtion:{
        type: String,
        required: true,
    },

},
{timestamps:true}
)
export default mongoose.model("Video",commentSchma);