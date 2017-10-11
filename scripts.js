// 1. Give the user the ability to send a stock symbol.
// 2. Get the symbol
// 3. make an AJAX request to Yahoo
// 4. Get the response from Yahoo and update teh DOM

$(document).ready(()=>{
	$('.yahoo-finance-form').submit((event)=>{
		// Stop the browser from sending the page on... we will handle it.
		event.preventDefault()
		// console.log("User submitted the form!")
		var stockSymbol = $('#ticker').val();
		// console.log(stockSymbol);
		var url = 'http://query.yahooapis.com/v1/public/yql?q=env%20%27store://datatables.org/alltableswithkeys%27;select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22'+stockSymbol+'%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json';
		// getJSON takes:
		// 1. Where
		// 2. What to do (function)
		$.getJSON(url,(theDataJSFound)=>{
			console.log(theDataJSFound);
		});
	})
});



