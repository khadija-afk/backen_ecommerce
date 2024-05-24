export default (connection, DataTypes) => {
    const Order = connection.define(
        'Order',
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                // Foreign key
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false
            },
            total_amount: {
                type: DataTypes.FLOAT,
                allowNull: false,
                unique: true
            },
            shipping_address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            shipping_city: {
                type: DataTypes.STRING,
                allowNull: false
            },
            shipping_postal_code: {
                type: DataTypes.STRING,
                allowNull: false
            },
            shipping_country: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: true }
    );

    return Order;
};
