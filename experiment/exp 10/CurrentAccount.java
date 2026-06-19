class CurrentAccount extends BankAccount {

    public CurrentAccount(int accountNumber,
                          String accountHolderName,
                          double balance) {

        super(accountNumber, accountHolderName, balance);
    }

    // Implement Abstract Method
    @Override
    void calculateInterest() {

        double interest = balance * 0.02;

        System.out.println("Current Account Interest: " + interest);
    }
}