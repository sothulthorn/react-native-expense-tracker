import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const RecentExpense = () => {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
};

export default RecentExpense;

const styles = StyleSheet.create({});
