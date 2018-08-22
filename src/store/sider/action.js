export const collapse = () => {
    return {
        type: 'COLLAPSE'
    }
}

export const changeCrumbs = (crumb) => {
    return {
        type: 'CRUMBS',
        crumb
    }
}