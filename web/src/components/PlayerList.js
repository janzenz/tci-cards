"use strict";

var React = require('react');
var LogApi = require('../api/LogApi');

var PlayerList = React.createClass({
	propTypes: {
		players: React.PropTypes.array.isRequired
	},
	_getPlayerWithHighestPicCard: function (players, highestTotalPicCards) {
		var totalPlayersWithHighestTotalPicCards = 0,
			totalPlayersWithSameCards = 0,
			highestTotalScore = 0,
			highestPicCardDrawn = 0,
			playerWithSameCardIndex = 0,
			playerIndex = 0;

		for (var i = 0; i < players.length; i++) {
			if ( players[i].totalPicCards === highestTotalPicCards ) {
				totalPlayersWithHighestTotalPicCards++;
				playerIndex = i; // Pointer to where did the latest player has the highest pic card

				if ( players[i].highestPicCard > highestPicCardDrawn ) {
					highestPicCardDrawn = players[i].highestPicCard;
				}
			}
		}

		// a. then compare the number of pic cards each player has (the most number wins)
		if ( totalPlayersWithHighestTotalPicCards > 1 ) {
			// - If there are players who has the same number of pic cards
			//	- Then compare the highest ranking card with other Players
			for (i = 0; i < players.length; i++) {
				if ( players[i].totalPicCards === highestTotalPicCards && // Make sure compare the ones with the same number of pic cards
						players[i].highestPicCard === highestPicCardDrawn ) {
					totalPlayersWithSameCards++;
					playerWithSameCardIndex = i;

					if ( players[i].totalScore > highestTotalScore ) {
						highestTotalScore = players[i].totalScore;
					}
					
				}
			}

			//	- If there is a tie proceed to the total score of the cards of the players with pic cards
			//		- If there are ties again then print TIE
			if ( totalPlayersWithSameCards > 1 ) {
				for (i = 0; i < players.length; i++) {
					if ( players[i].totalPicCards === highestTotalPicCards && // Make sure compare the ones with the same number of pic cards
							players[i].highestPicCard === highestPicCardDrawn &&
							players[i].totalScore === highestTotalScore ) {
						players[i].winner = true;
					}
				}
			} else if ( totalPlayersWithSameCards === 1 ) {
				players[playerWithSameCardIndex].winner = true;
			}

		// - Otherwise the most number of pic cards win
		//  b. Else, if only 1 player has a pic card then consider that player the winner
		} else if ( totalPlayersWithHighestTotalPicCards === 1 ) {
			players[playerIndex].winner = true;
		}

		return players;
	},
	_getTheHighestScorer: function (players, highestTotalScore) {
		// 	a. Check if there are players who has the same highest score
		//		- Then print TIE (optional)
		//	b. Othwerwise the one who has the highest score is the winner
		for (var i = 0; i < players.length; i++) {
			if ( players[i].totalScore === highestTotalScore ) {
				players[i].winner = true;
			}
		}
		return players;
	},
	_getTheWinner: function (players) {
		if ( !players ) {
			return [];
		}

		var totalPlayerWithPic = 0,
			highestTotalScore = 0,
			highestTotalPicCards = 0,
			highestPicCardDrawn = 0;
		var metaPlayers = players.map( function(player) { 
			var highestPicCard = 0, 
				cardScore, 
				totalScore = 0,
				totalPicCards = 0; // Watches the total pic cards in each player

			// Iterate through cards of the current player
			for ( var i = 1; i <= 3; i++ ) { 
				cardScore = player[ 'card' + i ].score;

				totalScore += cardScore;
				if ( cardScore > 9 ) { // Check if there is a pic card
					totalPicCards++;

					if ( cardScore > highestPicCard ) {
						highestPicCard = cardScore;
					}
				}
			}

			// Keep watch of the highest total score
			if ( totalScore > highestTotalScore) {
				highestTotalScore = totalScore;
			}

			// Watches the highest total pic cards each player has
			if ( totalPicCards > highestTotalPicCards ) {
				highestTotalPicCards = totalPicCards;
			}

			if ( totalPicCards > 0) {
				totalPlayerWithPic++; // Get the total players with pic cards
			}

			player.totalPicCards = totalPicCards;
			player.highestPicCard = highestPicCard;
			player.totalScore = totalScore;
			return player;
		});
		
		// 1. Check if there are more than one player who has pic cards
		if ( totalPlayerWithPic > 0 ) {
			metaPlayers = this._getPlayerWithHighestPicCard(metaPlayers, highestTotalPicCards);
		// 2. If none of the players have pic cards then calculate the total of each players cards.
		} else {
			metaPlayers = this._getTheHighestScorer(metaPlayers, highestTotalScore);
		}

		LogApi.saveLog(metaPlayers, this.props.cards);
		return metaPlayers;
	},
	render: function() {
		var players = this._getTheWinner(this.props.players);
		
		var createPlayerRow = function(player) {
			return (
					<tr key={player.id}>
						<td>Player {player.id}</td>
						<td>{player.card1.display}</td>
						<td>{player.card2.display}</td>
						<td>{player.card3.display}</td>
						<td>{player.winner && 'Winner'}</td>
					</tr>
				);
		};
		return (
				<div>
					<div className="row">
						<table className="table">
							<thead>
								<th>&nbsp;</th>
								<th>Card 1</th>
								<th>Card 2</th>
								<th>Card 3</th>
								<th>&nbsp;</th>
							</thead>
							<tbody>
								{players.map(createPlayerRow, this)}
							</tbody>
						</table>
					</div>
				</div>
			);
	}
});

module.exports = PlayerList;