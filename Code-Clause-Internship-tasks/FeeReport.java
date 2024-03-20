import java.util.*;

public class FeeReport {
    private static final Scanner scanner = new Scanner(System.in);
    private static final Map<String, Student> students = new HashMap<>();

    public static void main(String[] args) {
        while (true) {
            displayMenu();
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    addStudent();
                    break;
                case 2:
                    viewAllStudents();
                    break;
                case 3:
                    payFees();
                    break;
                case 4:
                    System.out.println("Exiting Fee Report System");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void displayMenu() {
        System.out.println("\nFee Report System");
        System.out.println("1. Add Student");
        System.out.println("2. View All Students");
        System.out.println("3. Pay Fees");
        System.out.println("4. Exit");
        System.out.print("Enter your choice: ");
    }

    private static void addStudent() {
        System.out.print("Enter Student ID: ");
        String id = scanner.nextLine();

        System.out.print("Enter Student Name: ");
        String name = scanner.nextLine();

        students.put(id, new Student(id, name));
        System.out.println("Student added successfully!");
    }

    private static void viewAllStudents() {
        if (students.isEmpty()) {
            System.out.println("No students found.");
            return;
        }
        System.out.println("\nList of Students:");
        for (Student student : students.values()) {
            System.out.println(student);
        }
    }

    private static void payFees() {
        System.out.print("Enter Student ID: ");
        String id = scanner.nextLine();

        Student student = students.get(id);
        if (student == null) {
            System.out.println("Student not found!");
            return;
        }

        System.out.print("Enter amount to");
    }
}

