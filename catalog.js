function isValidLoan(daysLate) {
  return daysLate >= 0;
}

module.exports = { isValidLoan };
