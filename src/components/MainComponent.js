"use strict";

var React = require('react');
var PlayerList = require('./PlayerList');

var MainComponent = React.createClass({
	getInitialState: function() {
		return {
			// players:
			// [	
				// Demo Values
				// {
				// 	id: 1,
				// 	card1: { display: '7H', score: 7 },
				// 	card2: { display: 'JD', score: 10 },
				// 	card3: { display: 'AH', score: 13 }
				// },
				// {
				// 	id: 2,
				// 	card1: { display: '3C', score: 3 },
				// 	card2: { display: 'AD', score: 13 },
				// 	card3: { display: 'QS', score: 11 }
				// },
				// {
				// 	id: 3,
				// 	card1: { display: 'JC', score: 10 },
				// 	card2: { display: 'QC', score: 12 },
				// 	card3: { display: '4S', score: 4 }
				// },
				// {
				// 	id: 4,
				// 	card1: { display: '2H', score: 2 },
				// 	card2: { display: '3H', score: 3 },
				// 	card3: { display: '9D', score: 9 }
				// }
				
				// No pic cards
				// {
				// 	id: 1,
				// 	card1: { display: '7H', score: 7 },
				// 	card2: { display: '1D', score: 1 },
				// 	card3: { display: '3H', score: 3 }
				// },
				// {
				// 	id: 2,
				// 	card1: { display: '3C', score: 3 },
				// 	card2: { display: '7D', score: 7 },
				// 	card3: { display: '8S', score: 8 }
				// },
				// {
				// 	id: 3,
				// 	card1: { display: '8C', score: 8 },
				// 	card2: { display: '2C', score: 2 },
				// 	card3: { display: '4S', score: 4 }
				// },
				// {
				// 	id: 4,
				// 	card1: { display: '2H', score: 2 },
				// 	card2: { display: '3H', score: 3 },
				// 	card3: { display: '9D', score: 9 }
				// }

				// No pic cards with TIE
				// {
				// 	id: 1,
				// 	card1: { display: '7H', score: 7 },
				// 	card2: { display: '1D', score: 1 },
				// 	card3: { display: '3H', score: 3 }
				// },
				// {
				// 	id: 3,
				// 	card1: { display: '8C', score: 8 },
				// 	card2: { display: '2C', score: 2 },
				// 	card3: { display: '4S', score: 4 }
				// },
				// {
				// 	id: 4,
				// 	card1: { display: '2H', score: 2 },
				// 	card2: { display: '3H', score: 3 },
				// 	card3: { display: '9D', score: 9 }
				// }
				
				// With only 1 pic card
				// {
				// 	id: 1,
				// 	card1: { display: 'JH', score: 10 },
				// 	card2: { display: '1D', score: 1 },
				// 	card3: { display: '3H', score: 3 }
				// },
				// {
				// 	id: 2,
				// 	card1: { display: '8C', score: 8 },
				// 	card2: { display: '2C', score: 2 },
				// 	card3: { display: '4S', score: 4 }
				// },
				// {
				// 	id: 3,
				// 	card1: { display: '8C', score: 8 },
				// 	card2: { display: '2C', score: 2 },
				// 	card3: { display: '4S', score: 4 }
				// },
				// {
				// 	id: 4,
				// 	card1: { display: '2H', score: 2 },
				// 	card2: { display: '3H', score: 3 },
				// 	card3: { display: '9D', score: 9 }
				// }
				
				// Tie
				// {
				// 	id: 5,
				// 	card1: { display: 'JH', score: 10 },
				// 	card2: { display: 'QH', score: 11 },
				// 	card3: { display: 'KH', score: 12 }
				// },
				// {
				// 	id: 6,
				// 	card1: { display: 'JD', score: 10 },
				// 	card2: { display: 'QD', score: 11 },
				// 	card3: { display: 'KD', score: 12 }
				// },
				// {
				// 	id: 7,
				// 	card1: { display: 'JD', score: 10 },
				// 	card2: { display: 'QD', score: 11 },
				// 	card3: { display: 'KD', score: 12 }
				// }


				// Same number of pic cards but 1 has highest pic card
				// {
				// 	id: 7,
				// 	card1: { display: '1H', score: 1 },
				// 	card2: { display: 'QH', score: 11 },
				// 	card3: { display: 'KH', score: 12 }
				// },
				// {
				// 	id: 8,
				// 	card1: { display: 'QH', score: 11 },
				// 	card2: { display: '1H', score: 1 },
				// 	card3: { display: 'KH', score: 12 }
				// },
				// {
				// 	id: 9,
				// 	card1: { display: 'JD', score: 10 },
				// 	card2: { display: '1H', score: 1 },
				// 	card3: { display: 'AC', score: 13 }
				// }
				

				// Sample with no winners
				// {
				// 	id: 1,
				// 	card1: { display: 'AD', score: 13 },
				// 	card2: { display: '8S', score: 8 },
				// 	card3: { display: '8D', score: 8 }
				// },
				// {
				// 	id: 2,
				// 	card1: { display: 'KS', score: 12 },
				// 	card2: { display: '6S', score: 6 },
				// 	card3: { display: 'JS', score: 10 }
				// },
				// {
				// 	id: 3,
				// 	card1: { display: '1D', score: 1 },
				// 	card2: { display: '6C', score: 6 },
				// 	card3: { display: '5D', score: 5 }
				// },
				// {
				// 	id: 4,
				// 	card1: { display: '9C', score: 9 },
				// 	card2: { display: '7C', score: 7 },
				// 	card3: { display: '4D', score: 4 }
				// },
				// {
				// 	id: 5,
				// 	card1: { display: '3H', score: 3 },
				// 	card2: { display: '7S', score: 7 },
				// 	card3: { display: '5S', score: 5 }
				// },
				// {
				// 	id: 6,
				// 	card1: { display: 'JD', score: 10 },
				// 	card2: { display: 'QS', score: 11 },
				// 	card3: { display: '3S', score: 3 }
				// },
				// {
				// 	id: 7,
				// 	card1: { display: 'QC', score: 11 },
				// 	card2: { display: 'JC', score: 10 },
				// 	card3: { display: '4H', score: 4 }
				// },
				// {
				// 	id: 8,
				// 	card1: { display: 'KD', score: 12 },
				// 	card2: { display: 'KH', score: 12 },
				// 	card3: { display: '3C', score: 3 }
				// },
				// {
				// 	id: 9,
				// 	card1: { display: '4C', score: 4 },
				// 	card2: { display: '6D', score: 6 },
				// 	card3: { display: '2S', score: 2 }
				// },
				// {
				// 	id: 10,
				// 	card1: { display: '6H', score: 6 },
				// 	card2: { display: '5H', score: 5 },
				// 	card3: { display: '2D', score: 2 }
				// },
				// {
				// 	id: 11,
				// 	card1: { display: 'KC', score: 12 },
				// 	card2: { display: '1C', score: 1 },
				// 	card3: { display: 'JH', score: 10 }
				// },
				// {
				// 	id: 12,
				// 	card1: { display: 'AH', score: 13 },
				// 	card2: { display: '7H', score: 7 },
				// 	card3: { display: '2C', score: 2 }
				// },
				// {
				// 	id: 13,
				// 	card1: { display: '2H', score: 2 },
				// 	card2: { display: '5C', score: 5 },
				// 	card3: { display: 'QH', score: 11 }
				// },
				// {
				// 	id: 14,
				// 	card1: { display: '9D', score: 9 },
				// 	card2: { display: '9H', score: 9 },
				// 	card3: { display: 'AC', score: 13 }
				// },
				// {
				// 	id: 15,
				// 	card1: { display: '1H', score: 1 },
				// 	card2: { display: '8C', score: 8 },
				// 	card3: { display: '3D', score: 3 }
				// },
				// {
				// 	id: 16,
				// 	card1: { display: 'QD', score: 11 },
				// 	card2: { display: '1S', score: 1 },
				// 	card3: { display: '7D', score: 7 }
				// },
				// {
				// 	id: 17,
				// 	card1: { display: 'AS', score: 13 },
				// 	card2: { display: '9S', score: 9 },
				// 	card3: { display: '8H', score: 8 }
				// },
				// {
				// 	id: 18,
				// 	card1: { display: '4S', score: 4 },
				// 	card2: { display: '', score: 0 },
				// 	card3: { display: '', score: 0 }
				// },
				// {
				// 	id: 19,
				// 	card1: { display: '', score: 0 },
				// 	card2: { display: '', score: 0 },
				// 	card3: { display: '', score: 0 }
				// },
				// {
				// 	id: 20,
				// 	card1: { display: '', score: 0 },
				// 	card2: { display: '', score: 0 },
				// 	card3: { display: '', score: 0 }
				// }
			// ]	
		};
	},
	_genereateCards: function() {
		var that = this;
		var cards = new Array(52)
			.join().split(',')
			.map( function(item, index) {
				var count = ++index;
				var score = that._genereateCardIndex(count);
				var display = that._genereateCardDisplayValue(score);
				var obj, cardDisplay;
				if ( count > 39 ) {
					cardDisplay = display + 'H'; // Hearts
				} else if ( count > 26 ) {
					cardDisplay = display + 'D'; // Diamond
				} else if ( count > 13 ) {
					cardDisplay = display + 'S'; // Spade
				} else {
					cardDisplay = display + 'C'; // Club
				}

				obj = {
						display: cardDisplay,
						score: score
					};

				return obj;
			});
		return cards;
	},
	_genereateCardIndex: function(number) {
		var result = (number % 13) + 1;
		return result;
	},
	_genereateCardDisplayValue: function(score) {
		if ( score === 13 ) {
			return 'A';
		} else if ( score === 12 ) {
			return 'K';
		} else if ( score === 11 ) {
			return 'Q';
		} else if ( score === 10 ) {
			return 'J';
		} else {
			return score;
		}
	},
	_shuffleCards: function() {
		// Fisher-Yates algorithm
		var cards = this._genereateCards();
		var length = cards.length - 1; // Total cards
		var swap; // Index that will be swapped.
		var temp; // Holds the value that i referenced
		for (var i = length; i > 0; i--) { 
			swap = Math.floor(Math.random() * i);
			temp = cards[i];
			cards[i] = cards[swap];
			cards[swap] = temp;
		}
		return cards;
	},
	onSubmit: function(event) {
		event.preventDefault();
		var total = event.target.playersNo.value;

		if ( !total || parseInt(total) < 1 ) {
			return;
		}

		var cards = this._shuffleCards();
		var copyCards = cards.slice(0);
		var players = [];
		var index, step, instance;

		for (index = 1; index <= total; index++) {
			// generate the total number of players
			
			instance = {
				id: index
			};

			for (step = 1; step <= 3; step++) {
				// draws cards 3 times
				instance['card' + step] = copyCards.length ? copyCards.shift() : { display: '', score: 0 };
			} 
			players.push(instance);
		}

		this.setState({ players: players, cards: cards });
	},
	render: function() {
		return (
				<div>
					<div className="container">
						<div className="row">
							<div className="col-xs-12" style={{marginTop: '50px'}}>
								<form className="form-inline" onSubmit={this.onSubmit}>
									<div className="form-group">
										<input type="text" 
											className="form-control" 
											id="playersNo"
											placeholder="No. of players"
											value={this.state.total}
											min="0"
											max="18"
											/>
									</div>
									<button type="submit" 
											className="btn btn-default">Play</button>
								</form>
							</div>
						</div>
						<PlayerList players={this.state.players} cards={this.state.cards} />
					</div>
				</div>
			);
	}
});

module.exports = MainComponent;