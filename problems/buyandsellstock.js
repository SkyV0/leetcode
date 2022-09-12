/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    //1 <= prices.length <= 3 * 104
    //0 <= prices[i] <= 104
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;       
};