const initialize = {
    landingNav: 0
    // 0 => init
    // 1 => in
    // 2 => up
    // 3 => forgot
};

const Landing = (state = initialize, action) => {
    switch (action.type) {
        case 'LANDING_NAV':
            return Object.assign({}, state, {
                landingNav: action.payload
            });
        default:
            return state;
    }
}

export default Landing;