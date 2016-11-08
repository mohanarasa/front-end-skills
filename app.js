//requesting instgram API

window.PhotoSearch = {
	/**
	*store applocation credentials
	*/
	config: {},
	BASE_URL: 'https://api.instagram.com/v1'
	init: function (opt) {
		opt=opt || {};
		this.config.client_id = opt.client_id;
	},
https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=ACCESS_TOKEN
	popular: function (){
			var endpoint = this.BASE_URL + '/media/popular?client_id=' + name + '/media/recent?client_id=' + this.config.client_id;
		this.getJSON (endpoint, callback);


	},

	/**
	*Get a list of recently tagged media.
	*/

	tagsByName: function(name, callback){
		var endpoint= this.BASE_URL + '/tags/' + name + '/media/recent?client_id=' + this.config.client_id;
		this.getJSON (endpoint, callback);
	},


	getJSON: function (url, callback ){
		$.ajax({
			type: 'GET',
			url: url,
			dataType:'jsonp'
			success: function (response){
				if (typeof callback === 'function') callback(response);

			}
		});
	}
};

	search
};

Instagram.init({
	client_id: " 6288687a538a48d296ba9928dff80eb8"

});


token access 1434727801.6288687.6d39f54532c14723a187b6e024c70137