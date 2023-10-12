package java;
import java.util.Scanner;

public class Pangram {
	    public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter a sentence: ");
	        String input = scanner.nextLine();
	        scanner.close();

	        boolean isPangram = checkPangram(input);

	        if (isPangram) {
	            System.out.println("The input is a pangram.");
	        } else {
	            System.out.println("The input is not a pangram.");
	        }
	    }

	    public static boolean checkPangram(String input) {
	        input = input.toLowerCase();

	        for (char c = 'a'; c <= 'z'; c++) {
	            if (input.indexOf(c) == -1) {
	                return false;
	            }
	        }

	        return true;
	    }
}