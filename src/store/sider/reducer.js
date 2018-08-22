const defaultState = {
    collapsed: false,
    crumb: 'Dashboard'
}

export const sider = (state = defaultState, action) => {
    switch (action.type) {
        case 'COLLAPSE':
            return {...state, ...{collapsed: !state.collapsed}}
        case 'CRUMBS':
            return {...state, ...{crumb: action.crumb}}
        default:
            return state;
    }
}