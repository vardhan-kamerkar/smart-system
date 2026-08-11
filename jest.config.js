const nextJest = require("next/jest");
const createJestConfig = nextJest({
    dir:"./",
});
const customJestConfig = {
    testEnvironment:"jsdom",
    setupFilesAfterEnv:["<rootdir>/jest.setup.js"],
};
module.exports = createJestConfig(customJestConfig);