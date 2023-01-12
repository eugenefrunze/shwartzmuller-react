export const CARD = 'card'
export const classComposer = (...args) => {
    return args.reduce((prev, curr) => {
        return [prev, curr].join(' ');
    }, '');
}