const bosque_colibri = {
    name: 'bosque_colibri',
    content: [
        {
            text: 'La Princesa por delante iba recogiendo palitos y el Principe por detrás fue juntando paja. Así lograron hacerce un sombrero para cada uno, solamente para sentirse con un estilo más propicio a la aventura que les esperaba en el Bosque Colibrí al cual caminaban.',
            img: './src/images/b1.jpg'
        },
        {
            text: 'Llegaron al bosque y se adentraron en él. Las leyendas del mismo le hacían honor, ese bosque tenía pequeños animales que no conocían, plantas con formas muy peculiares y fragancias que cambiaban al chillar la chicharra. Todo era muy nuevo pero a los valientes conejitos no les daba miedo, la Princesa se adelantaba y el Principe la seguía mientras el canto de las aves pequeñas los envolvía',
            img: './src/images/b2.jpg'
        },
        {
            text: 'Recorrieron varios de los caminitos marcados en el suelo, algunos de tierra pintada y otros de piedra. Se encontraban con unos honguitos iluminados, muy atractivos y de buena fragancia. A su vez se cruzaban con varios carteles que dirigían a la casa del Gran Sabio del Bosque.\nTras seguir caminando un tiempo más comenzaron a pensar respecto a su busqueda que rumbo debían tomar.',
             img: './src/images/b3.jpg'
        }
    ],
    options: [
        {
            text: 'Buscar al Gran Sabio del Bosque',
            answer: '"Ya"',
            next: 'bosque_sabio',
            position: 0
        },
        {
            text: 'Comer honguitos',
            answer: '"¡Sí, probemoslo!"',
            next: 'bosque_hongos',
            position: 0
        },
        {
            text: 'Seguir buscando así',
            answer: '"Es hermoso el tiempo a tu lado"',
            next: 'bosque_exploracion',
            position: 0
        }
    ]
}