const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Sportify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

// -> Subtrair 10% de valor de mercado a todas as companhias
// -> Filtrar somente companhias fundadados depois de 1980
// -> Somar o valor de mercado das restantes 



const companys = companies.map(item => {

    item.marketValue = item.marketValue - (item.marketValue / 10)

    return item

}).filter(item => item.foundedOn > 1980)
  .reduce((acc, item) => acc + item.marketValue, 0);

console.log(companys)




/*
   const listCompanys = companies.reduce((acc, item) => {
   if (item.foundedOn < 1990) {
    return acc + item.marketValue * 1.1;
  }
  return acc;
  }, 0);

  console.log(listCompanys);

/*


/*
const listCompanys = companies.map(item => {
    item.marketValue = item.marketValue + item.marketValue / 10

    return item

}).filter(item => item.foundedOn < 1990)
    .reduce((acc, item) => acc + item.marketValue, 0);


console.log(listCompanys)
*/