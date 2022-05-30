// Write your code below
let bobsFollowers = ['William', 'Sammy', 'Skip', 'Sid'];
let tinasFollowers = ['Olaf','William', 'Sammy'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

console.log(mutualFollowers);