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

	popular: function (){

	},

	tagsByName: function(name){
		this.BASE_URL + '//tags/nofilter/media/recent?access_token=ACCESS_TOKEN'
	}

	search
};

Instagram.init({
	client_id: " 6288687a538a48d296ba9928dff80eb8"

});


token access 1434727801.6288687.6d39f54532c14723a187b6e024c70137