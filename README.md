# Expense Tracker App

The **Expense Tracker App** is a mobile application built with **React Native** that empowers users to efficiently manage their personal finances. With features to **add**, **update**, and **delete expenses**, the app helps users track their daily spending while offering insights into recent and overall expenses.

---

## Features

### 1. Add Expenses

- Log your expenses by specifying:
  - **Amount**: How much was spent.
  - **Date**: When the expense occurred.
  - **Description**: A brief note about the expense.

### 2. Update Expenses

- Edit any previously added expense to reflect changes in:
  - Amount
  - Date
  - Description

### 3. Delete Expenses

- Remove expenses that are no longer needed with a single action.

### 4. View Recent Expenses

- See all expenses from the **last 7 days**, providing insights into your short-term spending habits.

### 5. View All Expenses

- Access a comprehensive list of all logged expenses for a full overview of your financial history.

---

## Technical Details

- **Framework**: React Native (cross-platform compatibility for iOS and Android).
- **State Management**: `useReducer` hook for efficient state updates.
- **Global State**: Context API for managing expense-related actions.
- **Components**:
  - Modular and reusable components ensure scalability.
  - User-friendly interface designed with accessibility in mind.
- **Navigation**: React Navigation for seamless transitions between screens.

---

## Screens

1. **Recent Expenses Screen**

   - Displays expenses from the last 7 days.
   - Provides a quick snapshot of recent spending.

2. **All Expenses Screen**

   - Shows a complete list of all logged expenses.
   - Allows users to review their entire financial history.

3. **Manage Expense Screen**
   - Enables users to:
     - Add new expenses.
     - Edit existing expenses.
     - Delete unwanted entries.

---

## Project View

| <div align="center">All Expenses</div>                                          | <div align="center">Recent Expenses</div>                                          |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| <div align="center"><img src="/screenshots/all-expenses.png" width="85%"></div> | <div align="center"><img src="/screenshots//recent-expense.png" width="85%"></div> |
| <div align="center">Add Expense</div>                                           | <div align="center">Edit Expense</div>                                             |
| <div align="center"><img src="/screenshots/add-expense.png" width="85%"></div>  | <div align="center"><img src="/screenshots/edit-expense.png" width="85%"></div>    |
