type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type CalculationResult = {
  year: number;
  total: number;
  totalContributions: number;
  totalInterestEarned: number;
};

const investmentData: InvestmentData = {
  initialAmount: 5000,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 10,
};

function calculateInvesment(
  investmentData: InvestmentData
): CalculationResult[] | string {
  if (
    investmentData.initialAmount < 0 ||
    investmentData.duration < 0 ||
    investmentData.expectedReturn < 0
  ) {
    return "Expect input validate";
  }
  let results = [];
  let total = investmentData.initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  for (let i = 1; i <= investmentData.duration; i++) {
    let year = i;
    let profit = Math.round(total * investmentData.expectedReturn);
    total += profit + investmentData.annualContribution;
    totalContributions += investmentData.annualContribution;
    totalInterestEarned += profit;
    results.push({ year, total, totalContributions, totalInterestEarned });
  }
  return results;
}

function printResults(result: CalculationResult[] | string) {
  if (typeof result === "string") {
    console.log(result);
    return;
  }

  for (let i = 0; i < result.length; i++) {
    console.log(`Year: ` + result[i]?.year);
    console.log(`Total: ` + result[i]?.total);
    console.log(`Total Contributions: ` + result[i]?.totalContributions);
    console.log(`Total Interest Earned: ` + result[i]?.totalInterestEarned);
    console.log("--------------------------------");
  }
}

const results = calculateInvesment(investmentData);

printResults(results);
