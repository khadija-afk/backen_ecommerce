import express from 'express'
import { env } from './config.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// Connexion MySQL
import './models/index.js'

// // ROUTES
import routerUser from './routes/user.js'
import routerArticle from './routes/article.js'
import routerCategorie from './routes/categorie.js'
import routerOrder from './routes/order.js'
import routerOrderItem from './routes/orderItem.js'
import routerReview from './routes/review.js'
import routerCart from './routes/cart.js'
import routerCartItem from './routes/cartItem.js'



const app = express()

// PORT
const PORT = env.port || 8080
import dotenv from 'dotenv';

dotenv.config();


// MIDDLEWARE
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// MIDDLEWARE TO ROUTE
app.use("/api/user", routerUser)
app.use("/api/article", routerArticle)
app.use("/api/categorie", routerCategorie)
app.use("/api/order", routerOrder)
app.use("/api/orderItem", routerOrderItem)
app.use("/api/review", routerReview)
app.use("/api/cart", routerCart)
app.use("/api/cartItem", routerCartItem)


// LISTEN
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})