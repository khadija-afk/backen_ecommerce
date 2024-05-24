export default (connection, DataTypes) => {
    const Cart = connection.define(
        'Cart',
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                /*references: {
                    model: 'Users', // Name of the target model
                    key: 'id' // Key in the target model that this refers to
                }*/
            },
            total_amount: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            }
        },
        { timestamps: false }
    );

    return Cart;
};
