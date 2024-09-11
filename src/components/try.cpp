#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the size of Array:";
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cout<<"Enter "<<i+1<<" Element of array:";
        cin>>arr[i];
    }

    int hash[13]={0};
    for(int i=0;i<n;i++){
        hash[arr[i]] += 1; 
    }
    cout<<"kitne number ki freqency pata krni hai? :";//(for example tume do number ki freqency pata krni hai 5 or 3 ki)
    int q;
    cin>>q;
    while(q--){
        int number;//yaha pai vo number batna hai jis ki freqency chiye
        cout<<"kis number ki frequency batu? :";
        cin>>number;
        cout<<"The freqency of "<<number <<" is " <<hash[number]<<endl;
    }
}