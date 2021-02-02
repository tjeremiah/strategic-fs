const {db} = require('./server/db')
const {green, red} = require('chalk')

const Creditor = require('./server/db/models/Creditor')

const creditors = [{
    creditorName: "CBNA",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2,
    balance: 1363
    },
    {
    creditorName: "AMEX",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2,
    balance: 2763
   },
   {
    creditorName: "AMEX",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2,
    balance: 429
  },
  {
    creditorName: "AMEX",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2,
    balance: 1363
  },
  {
    creditorName: "DISCOVERBANK",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2,
    balance: 2644
  },
  {
    creditorName: "CAPITAL ONE",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 4,
    balance: 5464
  },
  {
    creditorName: "CAPITAL ONE",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 4,
    balance: 2345
  },
  {
    creditorName: "CAPITAL ONE",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 4,
    balance: 836
  },
  {
    creditorName: "CBNA",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 3.5,
    balance: 687
  },
  {
    creditorName: "CBNA",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 3.5,
    balance: 235
  }
];

const seed = async () => {
    try {
      await db.sync({force: true})
  
      await Promise.all(creditors.map(creditor => {
        return Creditor.create(creditor);
      }));
  
      console.log(green('Seeding success!'))
      db.close()
    }
    catch (err) {
      console.error(red('Something went wrong!'))
      console.error(err)
      db.close()
    }
  }
  
  seed();