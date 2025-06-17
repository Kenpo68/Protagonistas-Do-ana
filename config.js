var config = {
    style: 'mapbox://styles/kenpo/cmc0qfc8y006b01qyaa6o4295',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoia2VucG8iLCJhIjoiY21hamxhZ2hiMHg5dDJsc2psY3F1Z2Y3bCJ9.HnnAzzXKVFZOgciVyJ1qJQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'PROTAGONISTAS DE DOÑANA',
    subtitle: 'Storymap sobre los Guardianes de Doñana (basado en historia y fotos de Ofelia de Pablo y Javier Zurita)',
    byline: 'By Santiago Villamediana Sánchez.',
    footer: 'Source: "Water wars" by Ofelia de Pablo and Javier Zurita. The Guardian. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Alvaro Robles, Park Ranger',
            image: './assets/Alvaro2.jpg',
            description: 'Álvaro Robles es la cuarta generación de guardabosques de su familia que trabaja en el Parque Nacional de Doñana. Dice que su sueño es que su hija, Alba, se convierta en la quinta generación. Laguna de Santa Olalla.',
            location: {
                center: [-6.47837, 36.97836],
                zoom: 15.15,
                pitch: 54.50,
                bearing: 57.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Juan Camacho, Fisher',
            image: './assets/Juan2.jpg',
            description: 'Camacho y su hijo, que cuentan con un permiso especial, pescan a diario en el Parque Nacional de Doñana. Su pesca sustenta a su familia de tres hijos. Sanlucar de Barrameda.',
            location: {
                center: [-6.33662, 36.80409],
                zoom: 16.42,
                pitch: 55.50,
                bearing: 42.40,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Yasmine El BouyaFrouri, Vet',
            image: './assets/Yasmine.jpg',
            description: 'El Bouyafrouri es madrileña, pero dejó la ciudad para cumplir su sueño de trabajar como veterinaria en conservación. Recuerda con cariño sus primeros años, cuando criaba a mano cachorros de lince abandonados con biberón. Pero también ha vivido momentos muy duros, como el terrible incendio que destruyó más de 6.000 hectáreas del parque en 2017. El Acebuche.',
            location: {
                center: [-6.56622, 37.04641],
                zoom: 16.33,
                pitch: 49.50,
                bearing: 11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Carmen Paniagua, Scientist',
            image: './assets/Carmen.jpg',
            description: 'Carmen Paniagua y su equipo de investigadores de la Estación Biológica de Doñana están recogiendo muestras en la Laguna de Sopetón. A pesar de la abundancia de fauna y flora, Paniagua advierte: «Doñana se está secando». Laguna de Sopetón.',
            location: {
                center: [-6.44962, 36.95880],
                zoom: 15,
                pitch: 49.50,
                bearing: 99.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
