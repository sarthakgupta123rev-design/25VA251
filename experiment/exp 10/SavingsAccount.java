class SavingsAccount extends BankAccount {

    public SavingsAccount(int accountNumber,
                          String accountHolderName,
                          double balance) {

        super(accountNumber, accountHolderName, balance);
    }

    // Implement Abstract Method
    @Override
    void calculateInterest() {

        double interest = balance * 0.05;

        System.out.println("Savings Account Interest: " + interest);
    }
}