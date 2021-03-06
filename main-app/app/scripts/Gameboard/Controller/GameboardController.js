(function () {
    'use strict';
    angular.module('Tombola.NoughtAndCrosses.gameboard')
    .controller('GameboardController',['Proxy', 'playerToggle', 'gameModel', 'winStates', 'cssToggle', function (Proxy, playerToggle, gameModel, winStates, cssToggle){

        this.gameModel = gameModel;
        this.players = playerToggle;
        this.css = cssToggle;

        this.gameboardTapped = function (gridNumberFromTable) {
            if(gameModel.canMakeMove(gridNumberFromTable)){
                return;
            }
            makeMove(gridNumberFromTable);
        };

        this.createGame = function () {
            Proxy.makeGame(playerToggle.player1, playerToggle.player2)
                .then(function(data){
                    gameModel.startNewGame(data.gameboard, data.outcome, data.winner);
                    winStates.checkStatusWithDelay();
                });
        };

        var makeMove = function (gridIndex) {
            Proxy.makeGameMove(gameModel.currentPlayer, gridIndex)
                .then(function(data){
                    gameModel.makingMove(data.gameboard, data.outcome, data.winner);
                    winStates.checkStatusWithDelay();
                });
        };
    }]);
})();