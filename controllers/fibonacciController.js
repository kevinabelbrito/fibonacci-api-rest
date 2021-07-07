// Get number by index
const fibonacci = (num) => {
    let a = 0;
    let b = 1;
    let c = 0;
    if(num === 1){
        return 1;
    }
    for(let i = 0; i < num - 1; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

// Gell all numbers of the serie by a number
const getAllNumberOfSerie = (n) => {
    let series = []
    for (let i = 0; i <= n; i++) {
        series.push(fibonacci(i));
    }
    return series;
}

exports.getFibonacci = (req, res, next) => {
    const itemNumber = parseInt(req.params.index);
    // Validate the number
    if (isNaN(itemNumber)) {
        const error = new Error('The value must be a number');
        error.statusCode = 422;
        throw error;
    }
    else if(itemNumber < 0) {
        const error = new Error('The value must be a greather or equal to 0');
        error.statusCode = 422;
        throw error;
    }
    // Get the number series and send response
    const getNumber = fibonacci(itemNumber);
    res.status(200).json({
        numberSerie: getNumber, 
        numberSent: itemNumber,
        serie: getAllNumberOfSerie(itemNumber)
    });
}