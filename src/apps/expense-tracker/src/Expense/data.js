export const incomes = [
  {
    id: "c30d1465-735e-42c6-8248-e5bab4d5b54c",
    name: "Salary",
    value: "salary",
  },
  {
    id: "bf2ee9cf-5d9c-4a79-a26e-07640dca3800",
    name: "Outsourcing",
    value: "outsourcing",
  },
  {
    id: "a9f2d138-e2e8-4aaa-9c41-804ef304761e",
    name: "Bond",
    value: "bond",
  },
  {
    id: "a70913c4-09a0-4f95-8284-7668ff173912",
    name: "Dividend",
    value: "dividend",
  },
];

export const expenses = [
  {
    id: "296aa5b9-b3f7-4947-acd2-c797b5982e81",
    name: "Education",
    value: "education",
  },
  {
    id: "73bcbcd7-d8cd-48ad-8daf-b4843c797656",
    name: "Food",
    value: "food",
  },
  {
    id: "19e40b62-a60a-4446-a437-82b2c7084165",
    name: "Health",
    value: "health",
  },
  {
    id: "4cb5b069-a44f-456c-b5e5-ba59904cf6d0",
    name: "Bill",
    value: "bill",
  },
  {
    id: "3acfe1dc-c492-46c7-b934-526aaf285946",
    name: "Insurance",
    value: "insurance",
  },
  {
    id: "d416d83a-e73a-4349-b540-70d98719be5f",
    name: "Tax",
    value: "Tax",
  },
  {
    id: "4765fd47-915f-4f16-b17e-f2657344bd15",
    name: "Transport",
    value: "transport",
  },
  {
    id: "7f63b452-248a-4c32-9a3b-7d4195d5785c",
    name: "Telephone",
    value: "telephone",
  },
];

export const categories = [
  { type: "expense", options: expenses },
  { type: "income", options: incomes },
];

export const defaultTransactions = [
  {
    type: "income",
    category: [
      { id: 123, category: "salary", date: "15 January 2024", amount: "10000" },
    ],
  },
  {
    type: "expense",
    category: [
      {
        id: 124,
        category: "education",
        date: "15 January 2024",
        amount: "1000",
      },
    ],
  },
];
