import express from "express"
import cors from "cors"
import personRouter from "./router/personRouter"

const app = express()

app.use(express.json())

const corsOptions = {
  origin: ["http://localhost:5173", "*/*"]
}

app.use(cors(corsOptions))

app.use("/api", personRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`)
})

export default app
