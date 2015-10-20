"use strict";

var Dispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ActionTypes');
// var AuthorApi = require('../api/authorApi');

var InitActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				// authors: AuthorApi.getAllAuthors() // Should use promises here will not work wil real AJAX calls
				players: 	
				[
					{
						id: 1, 
						card1: { display: 'CD1', score: 10 }, 
						card2: { display: 'CD3', score: 10 }, 
						card3: { display: 'CD2', score: 10 }
					},	
					{
						id: 2, 
						card1: { display: 'CD1', score: 5 }, 
						card2: { display: 'CD2', score: 15 }, 
						card3: { display: 'CD3', score: 20 }
					},	
					{
						id: 3, 
						card1: { display: 'CD1', score: 10 }, 
						card2: { display: 'CD2', score: 10 }, 
						card3: { display: 'CD3', score: 10 }
					}
				]
			}
		});
	}
};

module.exports = InitActions;