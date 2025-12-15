var investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
function calculateInvesment(investmentData) {
    if (investmentData.initialAmount < 0 ||
        investmentData.duration < 0 ||
        investmentData.expectedReturn < 0) {
        return "Expect input validate";
    }
    var results = [];
    var total = investmentData.initialAmount;
    var totalContributions = 0;
    var totalInterestEarned = 0;
    for (var i = 1; i <= investmentData.duration; i++) {
        var year = i;
        var profit = Math.round(total * investmentData.expectedReturn);
        total += profit + investmentData.annualContribution;
        totalContributions += investmentData.annualContribution;
        totalInterestEarned += profit;
        results.push({ year: year, total: total, totalContributions: totalContributions, totalInterestEarned: totalInterestEarned });
    }
    return results;
}
function printResults(result) {
    var _a, _b, _c, _d;
    if (typeof result === "string") {
        console.log(result);
        return;
    }
    for (var i = 0; i < result.length; i++) {
        console.log("Year: " + ((_a = result[i]) === null || _a === void 0 ? void 0 : _a.year));
        console.log("Total: " + ((_b = result[i]) === null || _b === void 0 ? void 0 : _b.total));
        console.log("Total Contributions: " + ((_c = result[i]) === null || _c === void 0 ? void 0 : _c.totalContributions));
        console.log("Total Interest Earned: " + ((_d = result[i]) === null || _d === void 0 ? void 0 : _d.totalInterestEarned));
        console.log("--------------------------------");
    }
}
var results = calculateInvesment(investmentData);
printResults(results);
