console.log = function() {};

const fs = require('fs');
const code = fs.readFileSync('style.css', 'utf8');
const assert = require('chai').assert;


// step 1: CSS regex

const bgColorRegex = /\.answer:hover\s*{[^}]*background-color\s*:\s*#C0D6DF\s*\s*[^}]*}/i;
const colorRegex = /\.answer:active\s*{[^}]*color\s*:\s*#ffffff\s*\s*[^}]*}/i;
const orderRegex = /\.answer:hover[\s\S]*\.answer:active/;

describe('', function () {
    it('', function () {
        let found = bgColorRegex.test(code);
        assert.strictEqual(found, true, 'Did you set the `background-color` property to `#C0D6DF` for `.answer:hover`?');
        found = colorRegex.test(code);
        assert.strictEqual(found, true, 'Did you set the `color` property to `#ffffff` for `.answer:active`?');
        found = orderRegex.test(code);
        assert.strictEqual(found, true, 'Did you set the order the `answer:hover` before `answer:active` in style.css?');
    });
});