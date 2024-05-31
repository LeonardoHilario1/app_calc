const calculadora = require('../calculadora/calculadora');

exports.index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

exports.calcular = (req, res) => {
    const { num1, num2, operacao } = req.body;
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (isNaN(numero1) || isNaN(numero2)) {
        res.json({ error: 'Por favor, insira valores numéricos válidos.' });
    } else {
        const resultado = calculadora.calcular(numero1, numero2, operacao);
        res.json({ resultado });
    }
};
