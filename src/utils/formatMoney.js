const formatMoney = (amount = 0) => {
  const options = {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  };

  // check if it's a clean dollar amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat("de-DE", options);

  return formatter.format(amount / 100);
};

export default formatMoney;
