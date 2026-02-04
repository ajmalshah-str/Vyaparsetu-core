// VyaparSetu Backend - V1
// Purpose: Calculate GST GSTR-3B due date

function getGSTR3BDueDate(year, month) {
  // month: 1 = January, 12 = December
  // GSTR-3B is usually due on 20th of next month

  let dueYear = year;
  let dueMonth = month + 1;

  if (dueMonth === 13) {
    dueMonth = 1;
    dueYear += 1;
  }

  return {
    compliance: "GST GSTR-3B",
    dueDate: `${dueYear}-${String(dueMonth).padStart(2, "0")}-20`
  };
}

// TEST (temporary)
const compliances = getMonthlyCompliances(2025, 1);
console.log(compliances);
// updated rules engine
// ---------- RISK ENGINE ----------

function getRiskLevel(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);

  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 7) {
    return "LOW";
  } else if (diffDays >= 1) {
    return "MEDIUM";
  } else {
    return "HIGH";
  }
}
// ---------- COMPLIANCE AGGREGATOR ----------

function getMonthlyCompliances(year, month) {
  const gstr3b = getGSTR3BDueDate(year, month);

  return [
    {
      ...gstr3b,
      risk: getRiskLevel(gstr3b.dueDate),
      penalty: "₹50 per day after due date"
    }
  ];
}
