import { IAction } from "../types/commons.type";
import { FooterActionTypes } from "../actionTypes/footerActions";

const initialState = {
    linksToShow: [] as LinkProps[],
    showCopyright: false
}

export default function footerReducer(state = initialState, action: IAction) {
    debugger;
    switch(action.type) {
        case FooterActionTypes.UpdateLinks: {
            return {
                ...state,
                linksToShow: action.payload
            }
        }
        case FooterActionTypes.ToggleCopyrights: {
            return {
                ...state,
                showCopyright: !state.showCopyright
            }
        }
        default: {
            return state;
        }
    }
}