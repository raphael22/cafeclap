const isDebug = true;
export class Logger {
    constructor() {

    }

    get datePrefix() {
        const date = new Date();
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }

    get prefix() {
        return `${this.datePrefix}`;
    }

    get log() {
        if (!isDebug) {
            return () => { };
        }
        return console.log.bind(window.console, this.prefix);
    }

    get warn() {
        if (!isDebug) {
            return () => { };
        }
        return console.warn.bind(window.console, this.prefix);
    }

    get error() {
        if (!isDebug) {
            return () => { };
        }
        return console.error.bind(window.console, this.prefix);
    }
}
export const debug = new Logger();
