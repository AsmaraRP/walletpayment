const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "REGISTER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case "REGISTER_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: [],
        msg: action.payload.response.data.msg,
      };
    }
    case "LOGOUT_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "LOGOUT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: {},
        msg: "",
      };
    }
    case "LOGOUT_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        msg: action.payload.response.data.msg,
      };
    }
    case "UPDATEPIN_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "UPDATEPIN_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case "UPDATEPIN_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: [],
        msg: action.payload.response.data.msg,
      };
    }
    case "CONFIRMPIN_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "CONFIRMPIN_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case "CONFIRMPIN_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: [],
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
