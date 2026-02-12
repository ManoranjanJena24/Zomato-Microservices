import mongoose , {Document , Schema} from "mongoose";

// IUser hamm use karne walee hai isauth middleware mein  eslieyee lagee hath export bhee kar derraa huu
//joo mein extend karderra ahuuu document kooo jooo kee mongoose see milrra hai 


export interface IUser extends Document{
    name:string;
    email:string;
    image:string;
    role:string;

}


const schema: Schema<IUser> = new Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    image:{
        type:String,
        required:true,

    },
    role:{
        type:String,
        default:null

    }
},{
    timestamps:true
})

const User = mongoose.model<IUser>("User" , schema)
export default User;