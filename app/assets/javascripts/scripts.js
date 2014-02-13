var select_nodes = [];
var heart_nodes = [];

// MODEL
var Location = Backbone.Model.extend({

});

// VIEW
var LocationView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },

    tagName: "option",
    render: function(){
        this.$el.html(this.model.get('address'));
        return this;
    }
});

// VIEW
var LocationSelectView = Backbone.View.extend({
    initialize: function(){
        this.collection = new LocationCollection();
        this.views = [];
    },

    render: function(){
        var self = this;
        _.each(this.views, function(view){
            view.remove();
        });

        _.each(this.collection.models, function(location){

            var location_view = new LocationView({
                model: location
            });
            _.each(self.$el, function(dom_node){
                $( dom_node ).append(location_view.$el);
                self.views.push(location_view);
            });

        });
    }

});

// HEART BUTTON VIEW

var HeartButtonView = Backbone.View.extend({
    initialize: function(){
        var self = this;
        console.log(this)
        this.$el.on('click', function(){
       var favorite = self.$el.parent().find("input").val()
        })
    },

   
})

// COLLECTION
var LocationCollection = Backbone.Collection.extend({

    initialize: function(){
        var self = this;
        this.fetch();
        this.bind("all", function(e){
            window.location_select_view_1.render();
            window.location_select_view_2.render();
            self.create();
        });
    },
    url: "/locations",
    model: Location
});



/////////////////
$(function(){
    _.each($("select"), function(dom_node) {
        select_nodes.push(dom_node);
    });

      _.each($(".add-favorite"), function(dom_node) {
        heart_nodes.push(dom_node);
    });

    window.location_select_view_1 = new LocationSelectView( { el: select_nodes[0]} );
    window.location_select_view_2 = new LocationSelectView( { el: select_nodes[1]} );
    window.heart_button_view_1 = new HeartButtonView( { el: heart_nodes[0]} );
    window.heart_button_view_2 = new HeartButtonView( { el: heart_nodes[1]} );
});


















