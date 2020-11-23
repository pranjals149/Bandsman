export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    top_artists: null,
    // token: "BQB7kT_q68HNnlXusSa0bCR0Bz-lLfkW95gJ57wUqWMjETgVAZ7n0Vl8E795-3_6bxwndNsxdTtrynDQWMh_Kg1-0CfNumd7oHr4jZnDu99k0ozOYUlgbkJIlLn9A4dP4enGYTHhMNl1Qi8c6iCjZRGP0T4aMd8ar1Whsk-u4ZZ3VGPd"
};

const reducer = (state, action) => {
    switch (action.type) {
        //Action -> type, [payload]
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        
        default:
            return state;
    }
}

export default reducer;
