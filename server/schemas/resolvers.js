const { signToken, AuthenticationError } = require("../utils/auth");
const { User, Board, Card, Column } = require("../models");

const resolvers = {
    Query: {
        // Fetch all boards for a specific user
        boards: async (parent, { userId }) => {
            try {
                return await Board.find({ userId }); // Find boards where userId matches
            } catch (err) {
                throw new Error('Error fetching boards'); // Handle errors
            }
        },

        // Fetch a specific board by its ID, including its columns and cards
        board: async (parent, { id }) => {
            try {
                return await Board.findById(id)
                    .populate({ // Populate columns
                        path: 'columns',
                        populate: { // Populate cards within each column
                            path: 'cards',
                            model: 'Card'
                        }
                    });
            } catch (err) {
                throw new Error('Error fetching this board'); // Handle errors
            }
        },

        // Fetch all columns for a specific board
        columns: async (parent, { boardId }) => {
            try {
                return await Column.find({ boardId }); // Find columns where boardId matches
            } catch (err) {
                throw new Error('Error fetching columns'); // Handle errors
            }
        },

        // Fetch a specific column by its ID
        column: async (parent, { id }) => {
            try {
                return await Column.findById(id); // Find column by its ID
            } catch (err) {
                throw new Error('Error fetching this column'); // Handle errors
            }
        },

        // Fetch all cards for a specific column
        cards: async (parent, { columnId }) => {
            try {
                return await Card.find({ columnId }).populate('column'); // Find cards where columnId matches and populate column field
            } catch (err) {
                throw new Error('Error fetching cards'); // Handle errors
            }
        },

        // Fetch a specific card by its ID
        card: async (parent, { id }) => {
            try {
                return await Card.findById(id).populate('column'); // Find card by its ID and populate column field
            } catch (err) {
                throw new Error('Error fetching this card'); // Handle errors
            }
        },

        // Fetch all users
        users: async () => {
            try {
                return await User.find(); // Find all users
            } catch (err) {
                throw new Error('Error fetching users'); // Handle errors
            }
        },

        // Fetch a specific user by their ID
        user: async (parent, { id }) => {
            try {
                return await User.findById(id); // Find user by their ID
            } catch (err) {
                throw new Error('Error fetching this user'); // Handle errors
            }
        },

        // Fetch the currently logged-in user
        me: async (parent, args, context) => {
            if (context.user) {
                try {
                    return await User.findById(context.user._id); // Find user by their ID from context
                } catch (err) {
                    throw new Error('Error fetching user'); // Handle errors
                }
            }
            throw new AuthenticationError('You are Not Logged In'); // Handle unauthenticated access
        },
    },
    Mutation: {
        // Add a new user and return the user and a token
        addUser: async (parent, { username, email, password }) => {
            try {
                const user = await User.create({ username, email, password }); // Create a new user
                const token = signToken(user); // Generate a token for the user
                return { token, user }; // Return the token and user
            } catch (err) {
                throw new Error('Error adding user'); // Handle errors
            }
        },

        // Login a user and return the user and a token
        login: async (parent, { username, password }) => {
            try {
                const user = await User.findOne({ username }); // Find user by username

                if (!user) {
                    throw new AuthenticationError('Incorrect credentials'); // Handle incorrect username
                }

                const correctPw = await user.isCorrectPassword(password); // Check password

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect credentials'); // Handle incorrect password
                }

                const token = signToken(user); // Generate a token for the user
                return { token, user }; // Return the token and user
            } catch (err) {
                throw new Error('Error logging in'); // Handle errors
            }
        },

        // Add a new board for a specific user
        addBoard: async (parent, { title, description, userId }, context) => {
            if (context.user) {
                try {
                    return await Board.create({ title, description, userId }); // Create a new board
                } catch (err) {
                    throw new Error('Error adding board'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },

        // Add a new column to a specific board
        addColumn: async (parent, { title, boardId }, context) => {
            if (context.user) {
                try {
                    return await Column.create({ title, boardId }); // Create a new column
                } catch (err) {
                    throw new Error('Error adding column'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },

        // Add a new card to a specific column
        addCard: async (parent, { title, description, columnId, position }, context) => {
            if (context.user) {
                try {
                    return await Card.create({ title, description, columnId, position }); // Create a new card
                } catch (err) {
                    throw new Error('Error adding card'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },

        // Update the position of a card
        updateCardPosition: async (parent, { cardId, position }, context) => {
            if (context.user) {
                try {
                    return await Card.findByIdAndUpdate(cardId, { position }, { new: true }); // Update card position
                } catch (err) {
                    throw new Error('Error updating card position'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },

        // Update the title and/or description of a card
        updateCard: async (parent, { cardId, title, description }, context) => {
            if (context.user) {
                try {
                    const updateData = {};
                    if (title !== undefined) updateData.title = title; // Add title to updateData if provided
                    if (description !== undefined) updateData.description = description; // Add description to updateData if provided
                    return await Card.findByIdAndUpdate(cardId, updateData, { new: true }); // Update card with new data
                } catch (err) {
                    throw new Error('Error updating card'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },

        // Update the title of a column
        updateColumnTitle: async (parent, { columnId, title }, context) => {
            if (context.user) {
                try {
                    return await Column.findByIdAndUpdate(columnId, { title }, { new: true }); // Update column title
                } catch (err) {
                    throw new Error('Error updating column title'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },

        // Update the title of a board
        updateBoardTitle: async (parent, { boardId, title }, context) => {
            if (context.user) {
                try {
                    return await Board.findByIdAndUpdate(boardId, { title }, { new: true }); // Update board title
                } catch (err) {
                    throw new Error('Error updating board title'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },

        // Delete a board
        deleteBoard: async (parent, { id }, context) => {
            if (context.user) {
                try {
                    await Board.findByIdAndDelete(id); // Delete board by its ID
                    return true;
                } catch (err) {
                    throw new Error('Error deleting board'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },

        // Delete a column
        deleteColumn: async (parent, { id }, context) => {
            if (context.user) {
                try {
                    await Column.findByIdAndDelete(id); // Delete column by its ID
                    return true;
                } catch (err) {
                    throw new Error('Error deleting column'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },

        // Delete a card
        deleteCard: async (parent, { id }, context) => {
            if (context.user) {
                try {
                    await Card.findByIdAndDelete(id); // Delete card by its ID
                    return true;
                } catch (err) {
                    throw new Error('Error deleting card'); // Handle errors
                }
            }
            throw new AuthenticationError('Not logged in'); // Handle unauthenticated access
        },
    },
};

module.exports = resolvers;
