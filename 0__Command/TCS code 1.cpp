#include<iostream>
#include<vector>
using namespace std;

// 1   2  3   4
// 4   5  6   7 
// 9  10  11  12 
// 13 14  15  16

// 1 0 0, 4 5 0, 7 8 9


void printDiagonal(vector<vector<int>> &arr, int n){
    int count = 1;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j > i)   arr[i][j] = 0;
            if(count % n == 0 && count != n*n){
                cout<<arr[i][j]<<", ";
                count++;
            }
            else {
                cout<<arr[i][j]<<" ";
                count++;
            }
        }
    }
}


void printSlant(vector<vector<int>> &arr, int n){
    int count = 1;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(j>i) arr[i][j] = 0;
            if(count % n == 0) {
                cout<<arr[i][j];
                if( i != n-1 || j != n-1 ){
                    cout<<",_";
                    count++; 
                    
                } 
            } else {
                 cout<<arr[i][j]<<"_";
                 count++;
            }
        }
    }
}


int main()
{
    int n, data;
    vector<vector<int>> arr;
    cout<<"Size : ";
    cin>>n;
    for(int i=0;i<n;i++){
        vector<int> row;
        for(int j=0;j<n;j++){
            cin>>data;
            row.emplace_back(data);
        }
        arr.push_back(row);
    }
    cout<<"-----------------"<<endl;
    printSlant(arr, n);

  return 0;
}
