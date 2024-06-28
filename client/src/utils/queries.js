// Imports the gql function from the Apollo Client package to define queries
import { gql } from "@apollo/client";

// Query to get all boards
export const GET_BOARDS = gql`
  query GetBoards {
    boards {
      _id
      title
      description
      userId
    }
  }
`;

// Query to get a single board by ID
export const GET_BOARD = gql`
  query GetBoard($id: ID!) {
    board(id: $id) {
      _id
      title
      description
      userId
      columns {
        _id
        title
        cards {
          _id
          title
          description
          position
        }
      }
    }
  }
`;

// Query to get all columns for a specific board
export const GET_COLUMNS = gql`
  query GetColumns($boardId: ID!) {
    columns(boardId: $boardId) {
      _id
      title
      boardId
      cards {
        _id
        title
        description
        position
      }
    }
  }
`;

// Query to get all cards for a specific column
export const GET_CARDS = gql`
  query GetCards($columnId: ID!) {
    cards(columnId: $columnId) {
      _id
      title
      description
      columnId
      position
    }
  }
`;

// Query to get a single card by ID
export const GET_CARD = gql`
  query GetCard($id: ID!) {
    card(id: $id) {
      _id
      title
      description
      position
      columnId
    }
  }
`;

// Query to get all  users
export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      username
      email
    }
  }
`;

// Query to get a single user by ID
export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;
