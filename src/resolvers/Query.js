
exports.Query =  {
    products: (_,{filter},{db}) => {
        let filteredProducts = db.products
        
        if(filter){
            const { onSale, avgRating } = filter
            if (onSale){
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale
                })
            }
            if([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0
                    let numberOfReviews = 0
                    db.reviews.forEach(review => {
                        if(review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    })
                    const avgProductRating = sumRating / numberOfReviews;
                    return avgProductRating >= avgRating;
                })
            }
        }
        return filteredProducts;
    },
    product: (_,{id},{db}) => {
        return product = db.products.find((product) => product.id === id)
    },
    categories: (_,__,{db}) =>  db.categories,
    category:(_,{id},{db}) => {
        return category = db.categories.find((category) => category.id === id)
    },
    reviews:(_, __, {db}) => db.reviews,
    review: (_,{id},{db}) => {
        return review = db.reviews.find((review) => review.id === id)
    }
}