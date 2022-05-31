const team = {
    _games: [{opponent: 'Timbers', teamPoints: 1, opponentPoints: 0},
        {opponent: 'White Caps', teamPoints: 1, opponentPoints: 2},{opponent: 'Galaxy', teamPoints: 3, opponentPoints: 1}
    ],

    _players: [{firstName: 'William', lastName: 'Williams', age: 35},
        {firstName: 'Sammy', lastName: 'Maudlin', age: 54},
        {firstName: 'Skip', lastName: 'Bittman', age: 45}],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer: function (newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge

        }
        this.players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this.games.push(game);
    }
};

team.addPlayer('Bobby', 'Bittmann', 45);
team.addGame('Fire', 2, 1);
console.log(team.players);
console.log(team.games);

