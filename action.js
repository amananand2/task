import actionTypes from "./types";

export const formSubmitSuccess = (data) => ({
    type: actionTypes.FORM_SUBMIT_SUCCESS, payload: data 
});

export const formSubmitStart = (payload) => ({
    type: actionTypes.FORM_SUBMIT_START,
    payload
});

export const formSubmitFailed = () => ({
    type: actionTypes.FORM_SUBMIT_FAILED
});

