import * as AppConstants from '../constants/app.js';

const initSate = {
    users: [],
    commits: [],
    usersStatistic: {},
    repo: 'facebook/react',
    isLoaded: true
};

export default function App(state = initSate, action) {
  switch (action.type) {
        case AppConstants.SET_USERS:
            return Object.assign({}, state, {
                users: action.data
            });
        case AppConstants.SET_USERS_STATISTIC:
            return Object.assign({}, state, {
                usersStatistic: action.data
            });
        case AppConstants.SET_COMMITS:
            return Object.assign({}, state, {
                commits: action.data
            });
        case AppConstants.SET_REPO:
            return Object.assign({}, state, {
                repo: action.data
            });
        case AppConstants.TOGGLE_LOADER:
            return Object.assign({}, state, {
                isLoaded: !state.isLoaded
            });
        default:
            return state;
    }
}
