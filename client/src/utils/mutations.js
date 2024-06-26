// Imports the gql function from the Apollo Client package, which is used to define GraphQL queries and mutations.
import { gql } from "@apollo/client";

export const ADD_BOARD = gql`
  mutation AddBoard($title: String!, $description: String, $userId: ID!) {
    addBoard(title: $title, description: $description, userId: $userId) {
      _id
      title
      description
      userId
    }
  }
`;

// Mutation to add a new column
export const ADD_COLUMN = gql`
  mutation AddColumn($title: String!, $boardId: ID!) {
    addColumn(title: $title, boardId: $boardId) {
      _id
      title
      boardId
    }
  }
`;

// Mutation to add a new card
export const ADD_CARD = gql`
  mutation AddCard($title: String!, $description: String, $columnId: ID!, $position: Int!) {
    addCard(title: $title, description: $description, columnId: $columnId, position: $position) {
      _id
      title
      description
      columnId
      position
    }
  }
`;

// Mutation to update the position of a card
export const UPDATE_CARD_POSITION = gql`
  mutation UpdateCardPosition($cardId: ID!, $position: Int!) {
    updateCardPosition(cardId: $cardId, position: $position) {
      _id
      position
    }
  }
`;


// Mutation to update the title and/or description of a card
export const UPDATE_CARD = gql`
  mutation UpdateCard($cardId: ID!, $title: String, $description: String) {
    updateCard(cardId: $cardId, title: $title, description: $description) {
      _id
      title
      description
    }
  }
`;

// Mutation to update the title of a column
export const UPDATE_COLUMN_TITLE = gql`
  mutation UpdateColumnTitle($columnId: ID!, $title: String!) {
    updateColumnTitle(columnId: $columnId, title: $title) {
      _id
      title
    }
  }
`;


// Mutation to delete a board
export const DELETE_BOARD = gql`
  mutation DeleteBoard($id: ID!) {
    deleteBoard(id: $id)
  }
`;

// Mutation to delete a column
export const DELETE_COLUMN = gql`
  mutation DeleteColumn($id: ID!) {
    deleteColumn(id: $id)
  }
`;

// Mutation to delete a card
export const DELETE_CARD = gql`
  mutation DeleteCard($id: ID!) {
    deleteCard(id: $id)
  }
`;


// Mutation to add a new user
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Mutation to log in a user
export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;