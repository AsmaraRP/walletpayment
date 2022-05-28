const initialState = {
  isError: false,
  isLoading: false,
  data: {},
  msg: "",
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case "POST_TRANSFER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "POST_TRANSFER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "POST_TRANSFER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default transaction;
