const bancoPreguntas = [
  // MERCADO Y CONTEXTO
  { q: "¿Cuál es el concepto o nombre de la campaña para esta innovación?", a: "Para ti", bad: ["Piel radiante", "Mi primer skincare", "Milagro UV"] },
  { q: "¿Qué porcentaje de mujeres busca alcanzar la piel deseada hoy en día?", a: "9 de cada 10", bad: ["5 de cada 10", "3 de cada 10", "Todas las mujeres"] },
  { q: "¿Cuál es el reto principal de cobertura en los puntos de venta?", a: "Pasar de 1 de cada 9 a 5 de cada 9", bad: ["Estar en todos los supermercados", "Vender solo online", "Eliminar a la competencia"] },
  { q: "¿Cuál es la meta de crecimiento del negocio de Pond's en esta campaña?", a: "Triplicar el negocio", bad: ["Duplicar el negocio", "Mantenerlo igual", "Crecer un 10%"] },
  { q: "¿Qué marcas de la competencia deben guiar la exhibición de Pond's?", a: "Garnier o Babaria", bad: ["Nivea o L'Oréal", "Cerave o Cetaphil", "Neutrogena o Eucerin"] },
  { q: "¿Cuántos productos nuevos lanza Pond's en este portafolio?", a: "12 productos nuevos", bad: ["4 productos nuevos", "8 productos nuevos", "16 productos nuevos"] },
  { q: "¿Cuántos productos conforman el portafolio total de Pond's tras este lanzamiento?", a: "16 productos", bad: ["12 productos", "20 productos", "10 productos"] },
  { q: "¿Cuál es una ventaja competitiva frente a países vecinos como Argentina?", a: "No tienen contrabando desde Argentina", bad: ["Son fabricados en Bolivia", "Son más baratos allá", "Son libres de impuestos"] },
  { q: "¿Qué canales deben tener un 100% de cobertura obligatoria?", a: "Mercados zonales y mayoristas", bad: ["Farmacias", "Supermercados", "Tiendas de barrio"] },
  { q: "¿En qué ciudades habrá impulsadoras en el canal tradicional?", a: "La Paz, Cochabamba y Santa Cruz", bad: ["Solo en Santa Cruz", "Tarija, Sucre y Potosí", "En todo el país"] },
  { q: "¿Qué frase resume la importancia de la ejecución en el punto de venta?", a: "Si no nos ven, no existimos", bad: ["El cliente siempre tiene la razón", "Lo bueno cuesta caro", "La belleza duele"] },
  { q: "¿Qué indica la capacitación sobre el nivel de precios vs la competencia (Garnier)?", a: "Están por debajo (más accesibles)", bad: ["Son el doble de caros", "Exactamente iguales", "Es la marca más cara del mercado"] },
  { q: "¿Qué instituto respalda el desarrollo de estos productos?", a: "Pond's Skin Institute", bad: ["Instituto Dermatológico", "Laboratorios Unilever", "Clínica de la Piel"] },
  { q: "¿Qué canales contarán con menciones publicitarias tradicionales?", a: "Televisión nacional (Red Uno, Unitel)", bad: ["Solo radio local", "Periódicos", "Revistas de belleza"] },
  { q: "¿Qué tipo de creadores de contenido (influencers) apoyarán la marca?", a: "Macro y micro influencers", bad: ["Actores de Hollywood", "Modelos internacionales", "Solo youtubers gamers"] },

  // CIENCIA Y ANATOMÍA
  { q: "¿Cuántas capas principales tiene la piel?", a: "Tres (Epidermis, Dermis e Hipodermis)", bad: ["Dos (Epidermis y Dermis)", "Cinco capas", "Diez capas"] },
  { q: "¿Cuál es la capa más externa de la piel?", a: "Epidermis", bad: ["Dermis", "Hipodermis", "Subdermis"] },
  { q: "¿Cuántas subcapas tiene la Epidermis?", a: "5 subcapas", bad: ["2 subcapas", "10 subcapas", "3 subcapas"] },
  { q: "¿Qué son los radicales libres?", a: "Moléculas sin pareja que roban células sanas", bad: ["Células súper hidratantes", "Vitaminas puras", "Bacterias buenas de la piel"] },
  { q: "¿Cómo actúan los ingredientes antioxidantes en la piel?", a: "Como policías que protegen del daño de los radicales libres", bad: ["Como esponjas que absorben grasa", "Como exfoliantes químicos", "Aclarando el tono artificialmente"] },

  // RUTINA IDEAL (5 PASOS)
  { q: "¿Cuántos pasos fundamentales tiene la rutina ideal de Pond's?", a: "5 pasos", bad: ["3 pasos", "4 pasos", "6 pasos"] },
  { q: "¿Cuál es el primer paso de la rutina facial?", a: "Desmaquillar", bad: ["Limpiar", "Tratar", "Hidratar"] },
  { q: "¿Cuál es el segundo paso de la rutina facial?", a: "Limpiar", bad: ["Exfoliar", "Desmaquillar", "Proteger"] },
  { q: "¿Cuál es el tercer paso de la rutina facial?", a: "Tratar (Sérum)", bad: ["Hidratar", "Desmaquillar", "Proteger"] },
  { q: "¿Cuál es el cuarto paso de la rutina facial?", a: "Hidratar", bad: ["Proteger", "Limpiar", "Tratar"] },
  { q: "¿Cuál es el quinto y último paso innegociable de la rutina?", a: "Proteger (Protección solar)", bad: ["Hidratar", "Desmaquillar", "El tónico"] },
  { q: "¿Qué pasa si se hace todo el tratamiento pero no se aplica protector solar?", a: "Todo el esfuerzo se va al tacho (se pierde)", bad: ["La piel brilla el doble", "No sucede nada malo", "El sérum actúa como protector"] },

  // FRUITY HYDRA FRESH (SANDÍA)
  { q: "¿Cuál es el público objetivo de la variedad Fruity Hydra Fresh (Sandía)?", a: "15 a 24 años", bad: ["20 a 40 años", "30 a 50 años", "Más de 50 años"] },
  { q: "¿Cuál es el beneficio principal de la línea de Sandía?", a: "Piel naturalmente tonificada y luminosa", bad: ["Reducir manchas oscuras extremas", "Prevenir arrugas profundas", "Control severo de acné"] },
  { q: "¿Para qué tipo de piel es apta la línea de Sandía?", a: "Para todo tipo de piel", bad: ["Solo piel seca", "Solo piel muy grasa", "Piel madura"] },
  { q: "¿Cuántos productos conforman la variedad Fruity Hydra Fresh?", a: "3 productos", bad: ["4 productos", "2 productos", "5 productos"] },
  { q: "¿Qué productos conforman la rutina de Sandía?", a: "Agua micelar, Gel limpiador y Gel hidratante", bad: ["Sérum, Crema y Protector", "Jabón, Exfoliante y Tónico", "Agua micelar y Sérum"] },
  { q: "¿Cuál es el contenido neto del Gel Hidratante de Sandía?", a: "100g", bad: ["110g", "50g", "200g"] },
  { q: "¿Qué característica tiene la fórmula del Gel Hidratante de Sandía?", a: "Fórmula ligera de rápida absorción sin sensación grasosa", bad: ["Es una crema muy espesa", "Deja un residuo blanco", "Contiene aceites pesados"] },
  { q: "¿Cuál es la función principal de las micelas en las Aguas Micelares?", a: "Actúan como imanes que atrapan suciedad y maquillaje", bad: ["Eliminan manchas oscuras en un día", "Protegen del sol al instante", "Derriten la piel muerta"] },
  { q: "¿El agua micelar requiere enjuague?", a: "No requiere enjuague", bad: ["Sí, con agua y jabón", "Sí, con agua tibia obligatoria", "Solo si tienes piel mixta"] },
  { q: "¿Qué característica ecológica tienen las botellas de Pond's?", a: "Son de plástico 100% reciclado", bad: ["Son de vidrio soplado", "No usan plástico reciclado", "Usa plástico 50% reciclado"] },

  // VS MANCHAS (VITAMINA C)
  { q: "¿Cuál es el público objetivo de la variedad Vs Manchas?", a: "20 a 40 años", bad: ["15 a 24 años", "Más de 50 años", "Público infantil"] },
  { q: "¿Qué activo es el componente principal de la variedad Vs Manchas?", a: "Vitamina C (Ácido Ascórbico)", bad: ["Ácido Hialurónico", "Niacinamida pura", "Colágeno animal"] },
  { q: "¿Qué beneficios ofrece la Vitamina C?", a: "Es antioxidante, iluminadora y estimulante de colágeno", bad: ["Solo quita el acné", "Es un bloqueador solar físico", "Funciona como base de maquillaje"] },
  { q: "¿Cuántos productos tiene la variedad Vs Manchas?", a: "4 productos", bad: ["3 productos", "2 productos", "5 productos"] },
  { q: "¿Qué ingrediente de origen natural acompaña a la Vitamina C en el agua micelar?", a: "Extracto de limón", bad: ["Extracto de sandía", "Aloe vera", "Rosas"] },
  { q: "¿Qué porcentaje de maquillaje remueve el Agua Micelar Vs Manchas?", a: "Elimina el 99% del maquillaje", bad: ["Elimina el 50%", "Remueve solo sombras de ojos", "El 100% de la piel muerta"] },
  { q: "¿Por qué el Gel Limpiador Vs Manchas es catalogado '2 en 1'?", a: "Porque limpia e hidrata a la vez", bad: ["Porque es champú y jabón", "Porque limpia y es protector solar", "Porque remueve arrugas"] },
  { q: "¿Cuál es el tamaño del Gel Limpiador Vs Manchas?", a: "200ml", bad: ["300ml", "100ml", "50ml"] },
  { q: "¿Cuántas capas penetra el Sérum Vs Manchas?", a: "Penetra 10 capas de la piel", bad: ["Penetra 5 capas", "Penetra 2 capas", "Solo actúa superficialmente"] },
  { q: "¿Cuántas veces más potente es el Sérum Vs Manchas que la vitamina C normal?", a: "60 veces más potente", bad: ["10 veces más potente", "100 veces más potente", "El doble de potente"] },
  { q: "¿De qué tamaño es la presentación del Sérum Vs Manchas?", a: "30ml", bad: ["50ml", "10ml", "100ml"] },
  { q: "¿Cuántas capas penetra el Gel Hidratante Vs Manchas?", a: "Penetra 5 capas de la piel (Toda la epidermis)", bad: ["Penetra 10 capas", "No penetra", "Solo 2 subcapas"] },
  { q: "¿Para qué sirve la nanotecnología en el Sérum Vs Manchas?", a: "Permite que el producto traspase la piel más fácil", bad: ["Le da color artificial", "Hace que tenga mejor aroma", "Evita que el frasco se rompa"] },

  // HYDRA ACTIVE (ÁCIDO HIALURÓNICO)
  { q: "¿Cuál es el público objetivo de la variedad Hydra Active?", a: "20 a 40 años", bad: ["15 a 24 años", "Bebés", "Mayores de 60 años exclusivamente"] },
  { q: "¿Qué beneficio principal promete la variedad Hydra Active?", a: "Hidratación superior, elasticidad y firmeza", bad: ["Reducir el acné severo", "Aclarar manchas negras", "Exfoliación química"] },
  { q: "¿Qué vitaminas complementan al Ácido Hialurónico en esta variedad?", a: "Vitamina E y Vitamina B3", bad: ["Vitamina C y Vitamina A", "Vitamina K", "Vitamina D"] },
  { q: "¿Qué hace la Vitamina B3 (Niacinamida) en la variedad Hydra Active?", a: "Efecto antioxidante, antiinflamatorio y controla el sebo", bad: ["Irrita la piel temporalmente", "Genera un efecto bronceador", "Bloquea los rayos UV"] },
  { q: "¿Qué función tiene la Vitamina E (Tocoferol) en esta línea?", a: "Es un antioxidante poderoso que ayuda a prevenir arrugas", bad: ["Controla el sudor", "Exfolia las manchas solares", "Limpia maquillaje a prueba de agua"] },
  { q: "¿Cuántos productos conforman la línea Hydra Active?", a: "2 productos (Sérum y Gel Hidratante)", bad: ["4 productos", "3 productos", "Solo 1 crema"] },
  { q: "¿Cuántas horas de hidratación continua promete el Gel Hydra Active?", a: "24 horas de hidratación", bad: ["48 horas", "12 horas", "8 horas"] },
  { q: "¿Cuál es el contenido neto del Gel Hidratante Hydra Active?", a: "110g", bad: ["100g", "200g", "50g"] },
  { q: "¿Por qué necesitamos usar Ácido Hialurónico en crema si el cuerpo lo produce?", a: "Porque lo vamos perdiendo por contaminación y edad", bad: ["El cuerpo no lo produce nunca", "Solo lo producen los hombres", "Porque el cuerpo lo rechaza al crecer"] },

  // UV MIRACLE (PROTECCIÓN SOLAR)
  { q: "¿Qué significa FPS 50 en los protectores Pond's?", a: "Permite exponerte al sol 50 veces más tiempo sin quemarte", bad: ["Bloquea el 50% de los rayos", "Dura 50 horas en la cara", "Tiene 50 extractos naturales"] },
  { q: "¿Qué porcentaje de protección otorgan los protectores FPS 50 contra los Rayos UVB?", a: "98%", bad: ["100%", "50%", "75%"] },
  { q: "¿Cuáles son los rayos que penetran más profundo y pueden causar cáncer?", a: "Los rayos Ultravioleta A (UVA)", bad: ["Los rayos UVB", "Luz visible", "Rayos Infrarrojos"] },
  { q: "¿Qué significa que el protector sea de 'Amplio Espectro'?", a: "Que protege contra rayos UVA y UVB", bad: ["Que sirve para todo el cuerpo", "Que es resistente al agua salada", "Que sirve para toda la familia"] },
  { q: "¿Además del sol, contra qué protegen los nuevos protectores solares Pond's?", a: "Protección contra los rayos de luz azul (pantallas)", bad: ["Contra la lluvia", "Contra el viento frío", "Contra el maquillaje en polvo"] },
  { q: "¿Cuál es el activo exclusivo patentado en la línea UV Miracle?", a: "Niasorcinol", bad: ["Ácido hialurónico puro", "Vitamina C concentrada", "Triple Péptido"] },
  { q: "¿De qué está compuesto el Niasorcinol?", a: "Niacinamida + E-Resorcinol", bad: ["Vitamina C + Vitamina E", "Ácido Salicílico + Zinc", "Glutatión + Sandía"] },
  { q: "¿Qué hace el E-Resorcinol en la fórmula?", a: "Aumenta 10 veces la eficacia de la Niacinamida", bad: ["Aporta aroma cítrico", "Hace la crema resistente al agua", "Exfolia la piel muerta"] },
  { q: "¿Cuál es el beneficio del Niasorcinol al exponerse al sol?", a: "Previene y disminuye manchas solares e hiperpigmentación", bad: ["Hace que la piel no sude", "Broncea la piel más rápido", "Cambia el tono a más oscuro"] },
  { q: "¿Cuántas variedades de protector solar lanzó Pond's?", a: "3 variedades", bad: ["2 variedades", "4 variedades", "1 sola"] },
  { q: "¿Qué variedad de protector solar controla la oleosidad (brillo)?", a: "UV Miracle Oil Control", bad: ["UV Miracle Bright", "UV Repair Serum", "Fruity Hydra Fresh"] },
  { q: "¿Qué activo especial contiene el Oil Control para combatir el brillo?", a: "Ácido Salicílico y Zinc", bad: ["Extracto de limón", "Glutatión", "Ácido Hialurónico"] },
  { q: "¿Cuál es el beneficio de la variedad UV Miracle Bright?", a: "Deja la piel luminosa, protegida y con menos manchas", bad: ["Deja la piel mate sin brillo", "Es una base de maquillaje", "Elimina el acné en 24 horas"] },
  { q: "¿Qué activo contiene la variedad Bright?", a: "Glutatión", bad: ["Ácido Salicílico", "Colágeno", "Vitamina A"] },
  { q: "¿Qué es el Glutatión presente en el protector Bright?", a: "Un potente tripéptido antioxidante", bad: ["Un bloqueador físico", "Un hidratante en aceite", "Un perfume natural"] },
  { q: "¿Qué característica de textura tienen los protectores solares Pond's?", a: "Sin sensación grasosa, sin residuos blancos (efecto mimo)", bad: ["Son espesos y pastosos", "Dejan la piel blanca un rato", "Son en aerosol"] },
  { q: "¿Qué variedad tiene textura de gotas ultra ligeras?", a: "UV Repair Serum", bad: ["Oil Control", "Bright", "Gel de sandía"] },
  { q: "¿Qué activos clave tiene el UV Repair Serum?", a: "Niasorcinol, Vitamina C y Niacinamida Poliol", bad: ["Glutatión puro", "Ácido Salicílico", "Vitamina E y B3"] },
  { q: "¿Qué cantidad neta tienen los protectores en tubo (Bright y Oil Control)?", a: "40g", bad: ["50g", "100ml", "30ml"] },
  { q: "¿Tienen alcohol los protectores UV Miracle en tubo?", a: "0% alcohol", bad: ["Sí, 5%", "Contienen alcohol médico", "Solo el Oil Control"] },
  { q: "¿Por qué recomiendan reaplicar el protector solar a pesar de tener FPS 50?", a: "Porque se pierde por el sudor, el agua y al tocarse la cara", bad: ["Para que cambie de color", "Porque caduca en 2 horas", "Para gastarlo más rápido"] },

  // EJECUCIÓN (PUNTO DE VENTA Y VENTAS)
  { q: "¿Cuál es la primera regla en la ejecución del Punto de Venta?", a: "Tener el rango completo de la rutina", bad: ["Solo tener los más baratos", "Esconder marcas rivales", "Poner un cartel gigante"] },
  { q: "¿En el planograma ideal, en qué fila va la línea Vs Manchas (Vitamina C)?", a: "En la 1ª primera fila (superior)", bad: ["En la 2da fila", "En la 3ra fila (abajo)", "En las cajas de cobro"] },
  { q: "¿En qué fila va la línea Hydra Active (Ácido Hialurónico)?", a: "En la 2ª segunda fila (al medio)", bad: ["En la 1ra fila", "En el suelo", "En vitrinas cerradas"] },
  { q: "¿En qué fila va la línea Fruity Hydra Fresh (Sandía)?", a: "En la 3ª tercera fila (inferior)", bad: ["Arriba de todo", "Junto al champú", "En gancheras"] },
  { q: "¿Dónde deben ubicarse los protectores solares UV Miracle en el mueble?", a: "De forma transversal, al final de cada rutina", bad: ["Aislados en otro pasillo", "Antes de desmaquillar", "Ocultos en la parte trasera"] },
  { q: "¿Qué se debe evitar hacer al exhibir los productos en la misma repisa?", a: "No mezclar variedades (mantener bloques de color)", bad: ["Mantenerlos todos separados", "Ordenarlos por tamaño", "Agruparlos por tipo de envase"] },
  { q: "¿Cuál es el orden de izquierda a derecha en el anaquel?", a: "Por orden de pasos (Limpiar, tratar, hidratar, proteger)", bad: ["Del más pequeño al más grande", "Por precio (barato a caro)", "Orden alfabético"] },
  { q: "¿Qué productos clásicos de Pond's forman parte de la familia base?", a: "Clarant B3 y Bio-hidratante", bad: ["Miracle C", "Sandía Premium", "Vitamina C clásica"] },
  { q: "¿Qué recomienda la capacitadora al armar pedidos para clientes pequeños?", a: "Armar un pedido mixto pero que incluya toda la rutina para ese tipo de cliente", bad: ["Venderle solo jabones", "No venderle hasta que compre por mayor", "Solo darle muestras gratis"] },
  { q: "¿Qué rol juega la capacitación según los audios?", a: "El que sabe vende, el que no sabe no vende", bad: ["No influye en el éxito", "Solo confunde a los vendedores", "Solo sirve para la gerencia"] },
  { q: "¿De qué porcentaje es la meta de cobertura en micromercados y farmacias grandes?", a: "100%", bad: ["50%", "20%", "80%"] },
  { q: "¿Cuál es el objetivo principal del material POP (exhibidores/glorificadores)?", a: "Destacar los beneficios de la innovación visualmente", bad: ["Regalar producto", "Decorar las esquinas", "Evitar que la gente toque los frascos"] },
  { q: "¿Los hombres también son público objetivo de la línea Pond's (Protectores)?", a: "Sí, deben cuidarse del sol y usar protector", bad: ["No, solo las mujeres compran", "Solo si tienen acné", "Solo para niños varones"] },
  { q: "¿Por qué mencionan a Argentina en la presentación?", a: "Para recalcar que estos productos no tienen competencia de contrabando", bad: ["Porque se fabrican allá", "Porque allá es la campaña principal", "Para evitar exportar"] },
  { q: "¿Dónde se realiza el evento de lanzamiento con influencers mencionado?", a: "En una mansión en el Urubó", bad: ["En un estadio en La Paz", "En un hotel en Cochabamba", "En las oficinas de Unilever"] },
  { q: "¿Por qué se llama Agua Micelar?", a: "Porque contiene micelas", bad: ["Porque está hecha de hielo", "Porque la marca es Micela", "Porque viene en spray"] },
  { q: "¿Cuántos Skus conforman la rutina Vs Manchas en total?", a: "4 SKUS", bad: ["2 SKUS", "3 SKUS", "5 SKUS"] },
  { q: "¿Cuántos Skus de protección solar hay en total?", a: "3 SKUS", bad: ["1 SKU", "2 SKUS", "4 SKUS"] },
  { q: "¿Qué canal debe tener una priorización inteligente al ofrecer toda la gama?", a: "Mayoristas (podrían priorizar geles sobre sérums)", bad: ["Supermercados", "Puntos Beauty", "Farmacias"] }
];

let gameQuestions = [];
let currentIdx = 0;
let score = 0;
let timer;
let timeLeft = 10;

const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const optionsGrid = document.getElementById('options-grid');
const progressFill = document.getElementById('progress-bar');
const nextBtn = document.getElementById('next-btn');
const timerDisplay = document.getElementById('timer-sec');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderScreen(screen) {
    [homeScreen, quizScreen, resultScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

function startTimer() {
    timeLeft = 10;
    timerDisplay.innerText = timeLeft;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    const qData = gameQuestions[currentIdx];
    Array.from(optionsGrid.children).forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === qData.a) btn.classList.add('correct');
    });

    setTimeout(() => {
        if (currentIdx < 19) {
            currentIdx++;
            showQuestion();
        } else {
            endGame();
        }
    }, 2000);
}

function startNewGame() {
    score = 0;
    currentIdx = 0;
    gameQuestions = shuffle([...bancoPreguntas]).slice(0, 20);
    renderScreen(quizScreen);
    showQuestion();
}

function resetCurrentGame() {
    score = 0;
    currentIdx = 0;
    renderScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    resetQuestionState();
    const qData = gameQuestions[currentIdx];
    document.getElementById('progress-text').innerText = `Pregunta ${currentIdx + 1} de 20`;
    document.getElementById('score-text').innerText = `Puntos: ${score}`;
    progressFill.style.width = `${(currentIdx / 20) * 100}%`;
    document.getElementById('question-label').innerText = qData.q;

    const allOptions = shuffle([...qData.bad, qData.a]);
    allOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('btn-option');
        btn.onclick = () => checkAnswer(btn, qData.a);
        optionsGrid.appendChild(btn);
    });
    startTimer();
}

function checkAnswer(selectedBtn, correctText) {
    clearInterval(timer);
    const isCorrect = selectedBtn.innerText === correctText;
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        Array.from(optionsGrid.children).forEach(btn => {
            if (btn.innerText === correctText) btn.classList.add('correct');
        });
    }
    Array.from(optionsGrid.children).forEach(btn => btn.disabled = true);
    if (currentIdx < 19) {
        nextBtn.classList.remove('hidden');
    } else {
        setTimeout(endGame, 1000);
    }
}

function endGame() {
    clearInterval(timer);
    renderScreen(resultScreen);
    document.getElementById('final-score-msg').innerText = `Lograste ${score} de 20 puntos posibles.`;
    if(score >= 15) confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

function resetQuestionState() {
    nextBtn.classList.add('hidden');
    optionsGrid.innerHTML = '';
}

document.getElementById('start-btn').onclick = startNewGame;
document.getElementById('new-game-btn').onclick = startNewGame;
document.getElementById('reset-btn').onclick = resetCurrentGame;
nextBtn.onclick = () => { currentIdx++; showQuestion(); };