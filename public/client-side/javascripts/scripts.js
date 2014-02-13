var Location = Backbone.Model.extend({

});

var LocationCollection = Backbone.Collection.extend({
    initialize: function(){
        this.fetch( );
    },

    url: "/locations",
    model: Location
});

$(function(){
    window.location_collection = new LocationCollection();
});
