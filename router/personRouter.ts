import express from "express"
import { getUsers } from "../controllers/personController"

const userRouter = express.Router()

userRouter.get("/users", getUsers)

export default userRouter
