
exports.Product = {
    category: (parent, _, {db}) => {
        const categoryId = parent.categoryId
        return db.categories.find(category => category.id === categoryId)
    },
   reviews: (parent,_, {db}) => {
       const {id: productId} = parent
       return db.reviews.filter((review) => review.productId === productId)
   }
} 