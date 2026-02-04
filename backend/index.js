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
const result = getGSTR3BDueDate(2025, 1);
console.log(result);
// updated rules engine
