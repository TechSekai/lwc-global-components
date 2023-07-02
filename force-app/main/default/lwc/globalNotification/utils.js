export function isStatic(value) {
    return typeof value === 'string' && value.toLowerCase() === 'static';
}