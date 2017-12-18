import {
  CHANGE_AUTH
} from '../actions/types';

export default function(state = false, action) {
  switch(action.type) {
    case CHANGE_AUTH:
      return action.payload;
  }
  return state;
}


//State is default as the user is not defauled to be logged in
  //Boolean: If the user is logged in log them in otherwise now
