const { gql } = require ('apollo-server');

exports.typeDefs = gql `
type Query {
    products(filter:ProductsFilterInput): [Product!]!
    "Return all the products based on an Id"
    product(id:ID!): Product
    "Return all Catgories"
    categories: [Category!]!
    "Return a category based on the Id"
    category(id:ID!):Category
    "Return all Reviews"
    reviews: [Review!]!
    review: Review
}

type Mutation {
    addCategory(input:addCategoryInput!): addCategoryResponse!
    addProduct(input:addProductInput!): addProductResponse!
    addReview(input:addReviewInput!): addReviewResponse!
    deleteCategory(id:ID!): Boolean!
    deleteProduct(id:ID!): Boolean!
    deleteReview(id:ID!):Boolean!
    updateCategory(id:ID!,input:updateCategoryInput!):Category
    updateProduct(id:ID!, input:updateProductInput!):Product
    updateReview(id:ID!, input:updateReviewInput!):Review
}

type Product {
    id: ID!
    "The name of the Product"
    name: String!
    "Full Text description of the Product"
    description: String!
    "The image of the product"
    image: String!
    "Count of how many of the particular Product this is"
    quantity: Int!
    "The Price of the Product"
    price: Float!
    "If the item is on sale or not"
    onSale: Boolean!
    "Return the category the product belongs to"
    category: Category
    "Return Reviews for each Product"
    reviews: [Review!]!
}

type addProductResponse {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
}

type Category {
    "This is the Id of a Category"
    id: ID!
    "The name of the Category"
    name: String!
    "Get the Products associated with the a category"
    products(filter:ProductsFilterInput): [Product!]!
}

type addCategoryResponse {
    name: String
}

type Review {
    "This is the Id of the review"
    id:ID!
    "The date the review was posted"
    date: String!
    "The title of the review posted"
    title: String!
    "the comment for the Review"
    comment: String!
    "the rating of the product"
    rating: Int
    "The id of the product"
    productId: String!
}

type addReviewResponse {
    id: ID!
    name: String!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
}

input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
}

input addCategoryInput {
    name: String!
}

input updateCategoryInput {
    name: String!
}


input addProductInput {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: String!
}

input updateProductInput {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: String
}

input addReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String

}

input updateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!

}
`

