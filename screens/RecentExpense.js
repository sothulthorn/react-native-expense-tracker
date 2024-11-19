import { StyleSheet } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const RecentExpense = () => {
  const expenseContext = useContext(ExpenseContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expenseContext.setExpenses(expenses);
    };

    getExpenses();
  }, []);

  const recentExpenses = expenseContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpense;

const styles = StyleSheet.create({});
