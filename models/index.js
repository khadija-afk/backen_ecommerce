import { Sequelize } from "sequelize";
import userModel from '../models/user.model.js'
import articleModel from './article.model.js'
import categorieModel from './catégories.model.js'
import orderModel from './order.model.js'
import orderItemModel from './orderItem.model.js'
import reviewModel from './review.model.js'
import cartModel from './cart.model.js'
import cartItemModel from './cartItem.model.js'
import paymentDetailModel from './paymentDetail.model.js'

// Nouvelle connexion à la DB
const connection = new Sequelize(
    'e_commerce', // Nom de la base de donnée
    'root', // identifiant Mysql
    '', // Mot de passe Mysql
    {
        host: 'localhost', // URL de mySQL
        dialect: 'mysql'
    }
);

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

userModel(connection, Sequelize);
articleModel(connection, Sequelize);
categorieModel(connection, Sequelize);
orderModel(connection, Sequelize);
orderItemModel(connection, Sequelize);
reviewModel(connection, Sequelize);
cartModel(connection, Sequelize);
cartItemModel(connection, Sequelize);
paymentDetailModel(connection, Sequelize);


const {
    User,
    Article,
    Categorie,
    Order,
    OrderItem,
    Review,
    Cart,
    CartItem,
    PaymentDetail
   
   
} = connection.models;
User.hasMany(Article, { foreignKey: 'user_fk' });
Article.belongsTo(User, { foreignKey: 'user_fk' });

Categorie.hasMany(Article, { foreignKey: 'categorie_fk' });
Article.belongsTo(Categorie, { foreignKey: 'categorie_fk' });

await connection.sync(/*{alter: true}*/);
console.log('Synchro OK');


export {
  User,
  Article,
  Categorie,
  Order,
  OrderItem,
  Review,
  Cart,
  CartItem,
  PaymentDetail
  
  
}
