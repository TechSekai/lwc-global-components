const proto = {
    add(className) {
        if (typeof className === 'string') {
            this[className] = true;
        }
        else {
            Object.assign(this, className);
        }
        return this;
    },
    toString() {
        return Object.keys(this)
            .filter(key => this[key])
            .join(' ');
    }
}

export function classSet(config) {
    if (typeof config === 'string') {
        const key = config;
        config = {};
        config[key] = true;
    }
    return Object.assign(Object.create(proto), config);
}