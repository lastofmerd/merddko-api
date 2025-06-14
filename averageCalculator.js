function calculateAverage(prices) {
    if (!prices.length) return 0;
    const sum = prices.reduce((acc, price) => acc + price, 0);
    return sum / prices.length;
}

module.exports = calculateAverage;