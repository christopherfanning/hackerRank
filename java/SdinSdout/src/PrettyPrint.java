import java.util.Scanner;

public class PrettyPrint {

    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        System.out.println("================================");
        for(int i=0;i<3;i++){
            String s1=sc.next();
            int x=sc.nextInt();
            //Complete this line
            System.out.println("%-15s %-3s");
        }
        System.out.println("================================");

    }


}
