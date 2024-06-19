const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
}

type Auth {
    token: ID!
    user: User
}

type Board {
    _id: ID
    title: String!
    description: String
    user: User! 

}

type Column {
    _id: ID!
    title: String!
    board: Board!
}

type Card {
    _id: ID! 
    title: String!
    description: String
    column: Column! 
    position: Int! 

}

type Query {
   boards(userId: ID!): [Board]
   board(id:): Board
   columns(boardId: ID!): [Column]
   column(id: ID!): Column
   cards(columnId: ID!): [Card]
   card(id: ID!): Card
   users: [User]
   user(id: ID!): User
   me: User

}

type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBoard(title: String!, description: String, userId: ID!): Board
    addColumn(title: String!, boardId: ID!): Column
    addCard(title: String!, description: String, columnId: ID!, position: Int!): Card
    updateCardPosition(cardId: ID!, position: Int!): Card
    updateCard(cardId: ID!, title: String, description: String): Card
    UpdateColumnTitle(columnId: ID!, title: String!): Column
    updateBoardTitle(boardId: ID!, title: String!): Board
    deleteBoard(id: ID!): Boolean
    deleteColumn(id: ID!): Boolean
    deleteCard(id: ID!): Boolean
  
}
`;

module.exports = typeDefs;
