public class Fibonnaci{
    public static int topDown(int n){
        if(n<=1){
            return n;
        }
        return topDown(n-2)+topDown(n-1);
    }
     public static int Memorization(int n){
        int a[]=new int[n+1];
        if(n<=1){
            return n;
        }
        if(a[n]!=-1){
            return a[n]=Memorization(n-2)+Memorization(n-1);
        }
        return a[n];
       
    }
    public static int Tabulation(int n){
        int a[]=new int[n+1];
        a[0] =1;
        a[1]=1;
        
        for(int i=2;i<n+1;i++){
            a[i]=a[i-2]+a[i-1];
        }
        return a[n-1];
       
    }
    public static int spaceOpt(int n){
        int prev1 =0;
        int prev =1;
        if(n<=1){
            return n;
        }
        for(int i=2;i<=n;i++){
            int curr = prev+prev1;
            prev1 =prev;
            prev = curr;
        }
        return prev;

    }

    public static void main(String[] args){
        System.out.println(spaceOpt(9));

    }
}