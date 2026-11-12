import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
const videoSchema = new Schema(
    {
        videoFile:{
            type:String,
            required:true
        },
        owner:{
            type:Schema.type.objectId,
            ref:"Users"
        },
        thumbnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        isPublished:{
            type:Boolean,
            required:true
        },
        views:{
            type:Number,
            required:true,
            default:0
        },
        duration:{
            type:Number,
            required:true
        }


    },
    {
        timestamps:true
    }
)
export const Video = mongoose.model("Video",videoSchema)
