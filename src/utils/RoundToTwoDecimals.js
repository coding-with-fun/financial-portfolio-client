export const RoundToTwoDecimals = (num, decimalPoints) => {
    return parseFloat(num.toFixed(decimalPoints || 2));
};
