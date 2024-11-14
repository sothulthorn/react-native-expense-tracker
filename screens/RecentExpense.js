import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpenseContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';

const RecentExpense = () => {
  const expenseContext = useContext(ExpenseContext);

  const recentExpenses = expenseContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpense;

const styles = StyleSheet.create({});
