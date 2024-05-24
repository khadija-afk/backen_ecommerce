export default (connection, DataTypes) => {
    const Review = connection.define(
        'Review',
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                /*references: {
                    model: 'Users', // Name of the target model
                    key: 'id' // Key in the target model that this refers to
                }*/
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                /*references: {
                    model: 'Products', // Name of the target model
                    key: 'id' // Key in the target model that this refers to
                }*/
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        },
        {
            timestamps: false,
            tableName: 'reviews'
        }
    );

    return Review;
};
