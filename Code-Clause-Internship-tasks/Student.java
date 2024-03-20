public class Student {
    private String id;
    private String name;
    private double feePaid;

    public Student(String id, String name) {
        this.id = id;
        this.name = name;
        this.feePaid = 0;
    }

    public void payFee(double amount) {
        this.feePaid += amount;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getFeePaid() {
        return feePaid;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Name: " + name + ", Fees Paid: rs" + feePaid;
    }

    public static void main(String[] args) {
        // Creating a new student
        Student student = new Student("B2155R14406001", "Maneesh Dinkar");

        // Displaying initial student details
        System.out.println("Initial Student Details: ");
        System.out.println(student);

        // Paying some fees
        student.payFee(300);
        System.out.println("\nAfter Paying rs 300 Fees: ");
        System.out.println(student);

        // Paying additional fees
        student.payFee(200);
        System.out.println("\nAfter Paying Additional  rs 200 Fees: ");
        System.out.println(student);
    }
}
