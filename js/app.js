window.Instagram = {
    /**
     * Store application settings
     */
    config: {},

    BASE_URL: 'https://api.instagram.com/v1',

    init: function( opt ) {
        opt = opt || {};

        this.config.access_token = opt.access_token;
    },

    /**
     * Get a list of popular media.
     */
    popular: function( callback ) {
        var endpoint = this.BASE_URL + '/media/popular?access_token=' + this.config.access_token;
        this.getJSON( endpoint, callback );
    },

    /**
     * Get a list of recently tagged media.
     */
    tagsByName: function( name, callback ) {
        var endpoint = this.BASE_URL + '/tags/' + name + '/media/recent?access_token=' + this.config.access_token;
        this.getJSON( endpoint, callback );
    },
    getUserData : function(callback){
    	var endpoint = this.BASE_URL +'/users/self/media/recent/?access_token='+this.config.access_token;
    	this.getJSON(endpoint, callback);
    },
    getUserByName : function(name, callback){
    	var endpoint = this.BASE_URL +'https://api.instagram.com/v1/users/search?q='+name+'&access_token='+this.config.access_token;
    	this.getJSON(endpoint, callback);
    },

    getJSON: function( url, callback ) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'jsonp',
            success: function( response ) {
                if ( typeof callback === 'function' ) callback( response );
            }
        });
    }
};

Instagram.init({
    access_token: '1434727801.6288687.6d39f54532c14723a187b6e024c70137'
});


$( document ).ready(function() {

    Instagram.getUserData(function( response ) {
    	console.log(response);
        var $instagram = $( '#instagram' );
        for ( var i = 0; i < response.data.length; i++ ) {
            imageUrl = response.data[i].images.low_resolution.url;
            $instagram.append( '<img src="' + imageUrl + '" />' );
        }
    });

});

