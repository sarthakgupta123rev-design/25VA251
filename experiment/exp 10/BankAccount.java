abstract class BankAccount {

    // Encapsulation
    private int accountNumber;
    private String accountHolderName;
    protected double balance;

    // Constructor
    public BankAccount(int accountNumber, String accountHolderName, double balance) {

        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Getters
    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    // Deposit Method
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Amount Deposited: " + amount);
    }

    // Display Details
    public void displayDetails() {

        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    // Abstract Method
    abstract void calculateInterest();
}