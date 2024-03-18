const formatCurrencyVND = (amount: string) => {
  const formatter = new Intl.NumberFormat('vi-VN');

  const result = formatter.format(parseInt(amount ?? 0, 10)).toString();
  return `${result}đ`;
};

export { formatCurrencyVND };
