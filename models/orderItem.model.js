export default (connection, DataTypes) => {
    const OrderItem = connection.define(
        'OrderItem',
        {
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                /*references: {
                    model: 'Orders', // name of the target model
                    key: 'id' // key in the target model that this refers to
                }*/
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                /*references: {
                    model: 'Products', // name of the target model
                    key: 'id' // key in the target model that this refers to
                }*/
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        },
        { timestamps: true }
    );

    return OrderItem;
};
