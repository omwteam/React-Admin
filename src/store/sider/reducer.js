const defaultState = {
    collapsed: false
}

export const sider = (state = defaultState, action) => {
    switch (action.type) {
        case 'COLLAPSE':
            return {...state, ...{collapsed: !state.collapsed}}
        default:
            return state;
    }
}