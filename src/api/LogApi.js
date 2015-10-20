var _ = require('lodash');
$ = jQuery = require('jquery');

var LogApi = {
	saveLog: function(players, cards) {
		// pretend an ajax call to web api is made here
		var cardsText = '', cardsDealt = '', winner;
		for (var i = 0, j = 1; i < cards.length; i++, j++) {
			cardsText += cards[i].display + ' ';
		}

		for (i = 0, j = 1; i < players.length; i++, j++) {
			cardsDealt += '[ Player ' + j + ' Cards: ' 
						+ players[i].card1.display + ' | '
						+ players[i].card2.display + ' | '
						+ players[i].card3.display + ' ] ';
			if ( players[i].hasOwnProperty('winner') ) {
				winner = 'Player ' + j;
			}
		}

		var data = {
			cards: cardsText,
			cards_dealt: cardsDealt,
			winner: winner
		};
		
		$.post('/saveLogs', data, function(response) {
		}, 'json');
		
		return players;
	}
};

module.exports = LogApi;