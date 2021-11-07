const {  gql } = require('apollo-server-express');
const tpyeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
},

type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
},
type Auth {
    token: ID!
    user: User
},

input BookInput {
    authors: [String]
    description: String
    image: String
    bookId: String
    link: String
    title: String
},
type Query {
    me: Use
},
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String! ): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
}

`

module.exports = tpyeDefs;