import moment from 'moment';

// FILTER EXPENSES
// FILTERS OBJECT SPREADED
                                          /// filters object destructuring
const getVisibleExpenses = (expensesList, { text, sortBy, startDate, endDate }) => {

  return expensesList.filter((expense) => {

      const momentDate = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(momentDate, 'day') : true;
      const endDateMatch = endDate? endDate.isSameOrAfter(momentDate, 'day') : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((firstElem, secondElem) => {
      if (sortBy === "date") {
        return firstElem.createdAt < secondElem.createdAt
          ? 1 /*return firstElem*/ : -1 /*return second element*/;
      } else if (sortBy === "amount") {
        return firstElem.amount < secondElem.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
