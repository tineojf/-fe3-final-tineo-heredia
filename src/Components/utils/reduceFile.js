export const initialState = { theme: "light", data: [], favs: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGETHEME": {
      return {};
    }
    case "LOADDATA": {
      return {};
    }

    case "ADDFAV": {
      return {};
    }

    default:
      throw new Error("Action not allowed");
  }
};
