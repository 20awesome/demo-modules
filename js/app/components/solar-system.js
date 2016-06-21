define('components/solar-system', [
    'jquery',
    'components/planet'
], function (

    $,
    Planet

) {

    function SolarSystem () {
        this.$el = $('main');





        this.model = {
            planets : [
                {
                    name : 'Mercury',
                    distance : 58,
                    year : 87.97,
                    timesAround : 0

                },
                {
                    name : 'Venus',
                    distance : 108.2,
                    year : 224.7,
                    timesAround : 0
                },
                {
                    name : 'Earth',
                    distance : 149.6,
                    year : 365.3,
                    timesAround : 0
                },
                {
                    name : 'Mars',
                    distance : 227.9,
                    year : 686.76,
                    timesAround : 0
                },
                {
                    name : 'Jupiter',
                    distance : 778,
                    year : 4332.45,
                    timesAround : 0
                },
                {
                    name : 'Saturn',
                    distance : 1427 ,
                    year : 10761,
                    timesAround : 0
                },
                {
                    name : 'Uranus',
                    distance : 2871,
                    year : 30692.5,
                    timesAround : 0
                },
                {
                    name : 'Neptune',
                    distance : 4497,
                    year : 60194.13,
                    timesAround : 0
                }
            ]
        };

        this.init();

    }

    SolarSystem.prototype = {

        init : function () {

            this.$el = $('[data-planets]');

            this.planetTpl = this.$el.find('li').get(0).outerHTML;

            this.$el.empty();

            this.createPlanets();

            this.render();


        },

        createPlanets : function () {

            this.planetsInstances = [];




            this.model.planets.forEach(function (planetData) {

           
                var newPlanet = new Planet(planetData, $(this.planetTpl));

                this.planetsInstances.push(newPlanet);



            }.bind(this));

        },

        render : function () {

            this.planetsInstances.forEach(function (planet) {

                this.$el.append(planet.$el);

            }.bind(this));

        }


    };

    return SolarSystem;
});