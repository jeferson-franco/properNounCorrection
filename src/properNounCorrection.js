function solution(noun) {
    return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test properNounCorrection

// alternative solution
