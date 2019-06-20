import { FooterActionTypes } from "../actionTypes/footerActions";
import { IAction } from "../types/commons.type";

export function appendLinks(link: LinkProps): IAction {
    return {
        type: FooterActionTypes.UpdateLinks,
        payload: link
    }
}

export function toggleCopyright(): IAction {
    return {
        type: FooterActionTypes.ToggleCopyrights
    }
}