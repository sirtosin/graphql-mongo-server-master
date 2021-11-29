import { Cat } from "./models/Cat";

export const resolvers = {
  Query: {
    hello: () => "hi",
    cats: () => Cat.find(),
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
    updateCat: async (_, { id, name }) => {
      const kitty = await Cat.findByIdAndUpdate(id, { name });
      return kitty;
    },
    deleteCat: async (_, { id }) => {
      const kitty = await Cat.findByIdAndDelete(id);
      return "successfully deleted";
    },
  },
};
