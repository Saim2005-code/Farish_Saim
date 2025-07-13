#include<iostream>
using namespace std;
int main(){
    long long a=5000,b,d;
    char key;
    int choice,password=2498;int* p=&password;
do{
        cout<<"1.---START----"<<endl;
        cout<<"2.---QUITE----"<<endl;
        cout<<"Enter your choice:";
        cin>>choice;
        switch(choice){
            case 1:
                char c;
                cout<<"(a)Check Balance"<<endl;
                cout<<"(b)Withdraw Money"<<endl;
                cout<<"(c)Deposit Money"<<endl;
                cout<<"(d)Change Password"<<endl;
                cout<<"Enter your choice:";
                cin>>c;
                switch(c){
                    case 'a':
                        int f;
                        cout<<"Enter the banking password:";
                        cin>>f;
                        if(f==*p){
                            cout<<"Your balance is:"<<"$"<<a<<endl;
                        }
                        else{
                            cout<<"!!!Incorrect Password!!!"<<endl;
                        }
                        break;
                case 'b':
                        cout<<"Enter the withdrawing amount:";
                        cin>>b;
                        cout<<"$"<<b<<" is debited from your account"<<endl;
                        a=a-b;
                        cout<<"Your balance is:"<<"$"<<a<<endl;
                        break;
                case 'c':
                    cout<<"Enter the amount you want to deposit:";
                    cin>>d;
                    a=a+d;
                    cout<<"$"<<d<<" amount is credited to your account"<<endl;
                    cout<<"Your balance is:$"<<a<<endl;
                    break;
                case 'd':
                        int k,n;
                        cout<<"Enter the security pin:";
                        cin>>k;
                        if(k==*p){
                            cout<<"---WELCOME---"<<endl;
                            cout<<"Enter your new pin\nit should be comprised with 3 digits:";
                            cin>>n;
                            *p=n;
                            cout<<"**Your new pin is generated**"<<endl;
                        }
                        else{
                            cout<<"Incorrect Pin";
                        }
                        break;
                default:
                        cout<<"Thank You for Using,Exiting......"<<endl;
                    break;

                }
            break;
        case 2:
                cout<<"Thank You for Using,Exiting......"<<endl;
                break;
        }
        cout<<"Wanna do it again(y/n)";
        cin>>key;
    }while(key!='n');
    cout<<"Exiting....";
    return 0;
}