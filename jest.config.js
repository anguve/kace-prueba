export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleFileExtensions: ['js', 'jsx']
}