const path = require('path');

export default {
    resolve: {
        alias: {
            src: path.resolve('src/'),
        },
    },
    css: {
        devSourcemap: true,
    },
}
