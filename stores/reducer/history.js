const initialState = {
  isError: false,
  isLoading: false,
  data: {},
  msg: "",
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HISTORY_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_HISTORY_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case "GET_HISTORY_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default history;
