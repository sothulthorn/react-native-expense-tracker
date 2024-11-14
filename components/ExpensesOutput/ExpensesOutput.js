import { StyleSheet, Text, View, FlatList } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trouser',
    amount: 89.99,
    date: new Date('2024-01-08'),
  },
  {
    id: 'e3',
    description: 'Fruit',
    amount: 100.99,
    date: new Date('2024-10-09'),
  },
  {
    id: 'e4',
    description: 'A Book',
    amount: 40.99,
    date: new Date('2024-09-19'),
  },
  {
    id: 'e5',
    description: 'Another Book',
    amount: 12.99,
    date: new Date('2024-08-19'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
