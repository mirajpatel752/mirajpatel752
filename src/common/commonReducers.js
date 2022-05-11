import {
  USER_DETAILS,
} from './commonActions';

export const userDetails = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS: {
      return action.payload;
    }
   
    default: {
      return state;
    }
  }
};

