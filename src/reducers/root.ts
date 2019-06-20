import { combineReducers } from 'redux';
import footerReducer from './footer.redux';

const rootReducer = combineReducers({
    footer: footerReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;