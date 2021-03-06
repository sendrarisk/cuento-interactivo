const bosque_hongos = {
    name: 'bosque_hongos',
    content: [
        {
            text: 'Tras comerlos comenzaron a sentirse más livianos hasta empezar a volar. Juntos volaban, chillaban y reían, veían raro. Se divertían mucho',
            img: './src/images/bh1.jpg'
        },
        {
            text: 'La experiencia se volvió más intensa cuando comenzaron a ver colores, escuchar voces graciosas y formas vivientes',
            img: './src/images/bh2.jpg'
        },
        {
            text: 'Luego de un momento, quedaron dormidos en el mismo lugar donde estaban alucinando pero pocos minutos más tardes se despertaron con mucha energía.\n - ¿Qué hacemos ahora Princesa Cascabel?',
            img: './src/images/bh3.jpg'
        }
    ],
    options: [
        {
            text: 'Mejor preguntemos al sabio',
            answer: '"Excelente Princesa"',
            next: 'bosque_sabio',
            position: 0
        },
        {
            text: 'Exploremos más',
            answer: '"Así será"',
            next: 'bosque_exploracion',
            position: 0
        },
        {
            text: 'Vamos a buscar al Monte Platano',
            answer: 'Se levantaron y emprendieron el viaje el monte',
            next: 'monte_platano',
            position: 0
        }
    ]
}