define('components/planet', [

    'jquery'

], function (

    $

) {

    function Planet (data, $el) {

        this.model = data;

        this.$el = $el;

        this.tpl = {

            name : this.$el.find('[data-name]'),

            distance : this.$el.find('[data-distance-from-sun]'),

            timesAround : this.$el.find('[data-times-around-sun]')

        };

        this.renderStatic();
    };




    function get_type(thing){
        if(thing===null)return "[object Null]"; // special case
        return Object.prototype.toString.call(thing);
    }



    Planet.prototype = {

        renderStatic : function () {

            this.tpl.name.text(this.model.name);
            this.tpl.distance.text(this.model.distance);
            this.tpl.timesAround.text(this.model.timesAround);



            var objectForUpdate = this;
                year = 0;
                earth_days = 0;
                doc = document;

            show_value();
            renderThreetimesPerSecond();


            // set interval for update Earth time - 3 years per second
            setInterval(function(){
                year += 3;
                earth_days = year * 365.3;
                show_value();
            }, 1000);

            // set interval for update info about past years 3 times per second
            setInterval(function(){
                renderThreetimesPerSecond();
            }, 333.3);


            function show_value(){
                doc.getElementById("year").innerHTML = "You have " + year + " years!";
            };

            function renderThreetimesPerSecond(){
                objectForUpdate.tpl.timesAround.text((earth_days / objectForUpdate.model.year).toFixed(2));
            };


        }

    };

    return Planet;

});