var data = require("../data.json");

exports.addFriend = function(request, response) {
	console.log("name = " + request.query.name + "; description: " +request.query.description);
	data.friends.push ({
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "https://picsum.photos/400/400"
	});
	response.render('index',data);
}