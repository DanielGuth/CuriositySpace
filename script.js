function Send(){
    console.log('Hello')

    let fatos = [
        'Marte é o lar da montanha mais alta do nosso sistema solar.',
        'Apenas 18 das 40 missões a Marte foram bem sucedidas.',
        'Pedaços de Marte caíram na Terra.',
        'Um ano em Marte são 687 dias terrestres.',
        'A temperatura em Marte varia de -153 a 20 °C.',
        'Um ano em Mercúrio é cerca de 88 dias terrestres.',
        'A temperatura da superfície de Mercúrio varia de -173 a 427°C.',
        'Mercúrio foi descoberto pela primeira vez no século XIV por astrônomos assírios.',
        'Seu peso em Mercúrio seria 38% do seu peso na Terra.',
        'Um dia na superfície de Mercúrio dura 176 dias terrestres.',
        'A temperatura da superfície de Vênus é de cerca de 462 °C.',
        'Vênus leva 225 dias para orbitar o Sol.',
        'Vênus foi descoberta pela primeira vez por astrônomos babilônicos do século XVII.',
        'Vênus é quase tão grande quanto a Terra com um diâmetro de 12.104 km.',
        'A rotação da Terra está gradualmente diminuindo.',
        'Há apenas um satélite natural do planeta Terra, a Lua.',
        'A Terra é o único planeta em nosso sistema solar sem o nome de um deus.',
        'A Terra é o planeta mais denso do sistema solar.',
        'Um ano em Júpiter dura cerca de 4.333 dias terrestres.',
        'A temperatura da superfície de Júpiter é de -108°C.',
        'Júpiter tem 4 anéis.',
        'Júpiter foi descoberto pela primeira vez por astrônomos babilônicos do século VII ou VIII.',
        'Um dia em Júpiter dura 9 horas e 55 minutos.',
        'Saturno foi descoberto pela primeira vez pelos assírios do século VIII.',
        'Saturno leva 10.756 dias para orbitar o Sol.',
        'Saturno pode ser visto a olho nu.',
        'Um dia na terra não são 24 horas mas sim 23 horas e 56 minutos',
        'É mais fácil alcançar Plutão ou escapar do sistema solar da Terra do que ser capaz de pousar no Sol.',
        'Urano gira para o lado, em relação ao plano eclíptico do sistema solar.',
        'Vênus gira para trás.',
        "Acredita-se que o campo magnético de Júpiter seja resultado de hidrogênio metálico girando rapidamente no núcleo, e é ~ 10x mais forte que o da Terra.",
        'O primeiro cálculo preciso da velocidade da luz foi usar as luas de Júpiter',
        'A distância entre a Terra e nossa Lua é maior do que os diâmetros de todos os planetas combinados.',
        'Há um modelo de escala de 1:20 milhões do sistema solar na Suécia.'


    ];

     document.getElementById('output').innerHTML = fatos[Math.floor(Math.random() * fatos.length)];

};