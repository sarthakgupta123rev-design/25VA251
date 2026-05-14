public class Main {

    public static void main(String[] args) {

        // Savings Account Object
        SavingsAccount s1 =
                new SavingsAccount(101,
                                   "Sarthak Gupta",
                                   50000);

        System.out.println("----- Savings Account -----");

        s1.displayDetails();

        s1.deposit(5000);

        s1.calculateInterest();


        // Current Account Object
        CurrentAccount c1 =
                new CurrentAccount(102,
                                   "Rahul Sharma",
                                   80000);

        System.out.println("\n----- Current Account -----");

        c1.displayDetails();

        c1.deposit(10000);

        c1.calculateInterest();
    }
}