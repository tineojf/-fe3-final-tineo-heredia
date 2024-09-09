export const initialState = { theme: "light", data: [], favs: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGETHEME": {
      return {};
    }
    case "LOAD-DATA": {
      return { ...state, data: action.payload };
    }

    case "ADD-FAV": {
      const idSet = new Set(state.favs.map((item) => item.id));
      if (idSet.has(action.payload.id)) {
        // console.log("El favorito ya existe.");
        alert("Ya está agregado a favoritos")
        return state;
      }

      return {
        ...state,
        favs: [...state.favs, action.payload]
      };
    }

    case "CLEAN-FAVS": {
      return {
        ...state, favs: []
      }
    }

    default:
      throw new Error("Action not allowed");
  }
};
