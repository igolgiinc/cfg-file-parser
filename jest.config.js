// See: https://tinyurl.com/y3qz3gyy
module.exports = {
    projects: [
        'src/',
    ],

    testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testTimeout: 500,
    // moduleDirectories: ['node_modules', '.'],
}


