const {v4: uuid} = require("uuid")
const date = require('date-and-time')

const now = new Date()

exports.Mutation = { 
    addCategory: (_, {input}, {db}) => {
        const {name} = input
        const newCategory = {
            id: uuid(),
            name
        }
        db.categories.push(newCategory)
        return newCategory
    },

    addProduct: (_, {input}, {db}) => {
        const {
            name,
            description,
            image,
            quantity,
            price,
            onSale
        } = input

        const newProduct = {
            id: uuid(),
            name,
            description,
            image,
            quantity,
            price,
            onSale
        }
        db.products.push(newProduct)
        return newProduct
    },
    addReview: (_,{input}, {db}) => {
        const {
            date,
            title,
            comment,
            rating,
            productId} = input

        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }
        db.reviews.push(newReview)
        return newReview
    },
    deleteCategory: (_, {id}, {db}) => {
        db.categories = db.categories.filter((category) => category.id !== id )
        db.products = db.products.map(product => {
            if (product.categoryId === id){
                return {
                    ...product, 
                    categoryId: null
                }
            }
            return product
        })
        return true
    },
    deleteProduct: (_,{id},{db}) => {
        db.products = db.products.filter((product) => product.id !== id)
        db.reviews = db.reviews.filter(review => review.productId !== id)
        return true
    },
    deleteReview: (_,{id}, {db}) => {
        db.reviews = db.reviews.filter((review) => review.id !== id)
        return true
    },
    updateCategory:(parent,{id, input},{db}) => {
        const index = db.categories.findIndex(category => category.id === id)
        if (index === -1) return null
        db.categories[index] = {
            ...db.categories[index],
            ...input
        };
        return db.categories[index]
    },
    updateProduct: (parent, {id, input}, {db}) => {
        const index = db.products.findIndex(product => product.id === id)
        if (index === -1) return null
        db.products[index] = {
            ...db.products[index], 
            ...input
        };
        return db.products[index]
    },
    updateReview: (parent, {id, input}, {db}) => {
        const index = db.reviews.findIndex(review => review.id === id)
        if (index === -1 ) return null
        db.reviews[index] = {
            ...db.reviews[index],
            ...input
        };
        return db.reviews[index]
    }
}




