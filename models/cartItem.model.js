export default (connection, DataTypes) => {
    const CartItem = connection.define(
        'CartItem',
        {
            cart_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                /*references: {
                    model: 'Cart', // Name of the target model
                    key: 'cart_id' // Key in the target model that this refers to
                }*/
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                /*references: {
                    model: 'Product', // Name of the target model
                    key: 'product_id' // Key in the target model that this refers to
                }*/
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        { timestamps: false }
    );

    return CartItem;
};
