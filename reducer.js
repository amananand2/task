import UserActionTypes from "./types";


  const initialState = {
       FormData:[
        {
          firstname:"aman",
          lastname:"anand",
          dob:"02/12/1996"
        },
        {
          firstname:"prem",
          lastname:"kumar",
          dob:"02/12/1997"
        }
      ],
      loading: false,
      error: false,
      isAuthenticated:false,
    };
    const reducer = (state = initialState, action) => {
      console.log(action,"action");
      switch (action.type) {
        case UserActionTypes.FORM_SUBMIT_START:
          return {
            ...state,
            loading: true,
            isAuthenticated:false,
            error: false,
          };
          case UserActionTypes.FORM_SUBMIT_SUCCESS:
          return {
            ...state,
            FormData: [...FormData,action.payload],
            loading: false,
            isAuthenticated:true,
            error: false,
          };
        case UserActionTypes.FORM_SUBMIT_FAILED:
          return {
              ...state,
            url: '',
            loading: false,
            error: true,
          };
          default:
          return state;
      }
    };

    export default reducer;
