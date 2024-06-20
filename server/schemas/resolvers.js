const { signToken, AuthenticationError } = require("../utils/auth");
const { User, Board, Card, Column } = require("../models");


const resolvers = {
    Query: {
        boards: async (parent, { userId }) => {
            try {
                return await Board.find({ userId });
            } catch (err) {
                throw new Error('Error fetching boards');
            }
        },

        board: async (parent, { id }) => {
            try {
                return await Board.findById(id)
                    .populate({ 
                        path: 'columns',
                        populate: {
                            path: 'cards',
                            model: 'Card'
                        }
                    });
            } catch (err) {
                throw new Error('Error fetching this board')
            }
        },

        columns: async (parent, { boardId }) => {
            try {
                return await Column.find({ boardId });
            } catch (err) {
                throw new Error('Error fetching columns');
            }
        },

        column: async (parent, { id }) => {
            try {
                return await Column.findById(id);
            } catch (err) {
                throw new Error('Error fetching this column');
            }
        },

        cards: async (parent, { columnId }) => {
            try {
                return await Card.find({ columnId }).populate('column');
            } catch (err) {
                throw new Error('Error fetching cards');
            }
        },

        card: async (parent, { id }) => {
            try {
                return await Card.findById(id).populate('column');
            } catch (err) {
                throw new Error('Error fetching this card');
            }
        },

        users: async () => {
            try {
                return await User.find();
            } catch (err) {
                throw new Error('Error fetching users');
            }
        },

        user: async (parent, { id }) => {
            try {
                return await User.findById(id);
            } catch (err) {
                throw new Error('Error fetching this user');
            }
        },

        me: async (parent, args, context) => {
            if (context.user) {
                try {
                    return await User.findById(context.user._id);
                } catch (err) {
                    throw new Error('Error fetching user');
                }
            }
            throw new AuthenticationError('You are Not Logged In');
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            try {
                const user = await User.create({ username, email, password });
                const token = signToken(user);
                return { token, user };
            } catch (err) {
                throw new Error('Error adding user');
            }
        },

        
    }



























}


module.exports = resolvers;