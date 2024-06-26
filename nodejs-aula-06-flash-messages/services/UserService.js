import mongoose from "mongoose"
import user from "../models/User.js"

const User = mongoose.model("User", user)

class UserService {
    Create(email, password){
        const newUser = new User({
            email: email,
            password: password
        })

        newUser.save()
    }

    SelectOne(email){
        const user = User.findOne({email: email})
        return user
    }
}

export default new UserService()