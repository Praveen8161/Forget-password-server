import { User } from "../schema/user.js";


export async function getUser(req) {
  return User.findOne({ email: req.body.email })
}

export async function getUserByToken(token){
  return User.findOne({ token: token })
}

export function newUser(user){
  return new User(user).save() ;
}