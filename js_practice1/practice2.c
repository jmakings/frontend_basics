#include <stdio.h>

int main(void) {
    long long int A[128];
    printf("6");

    for (int i=0; i < 16; i++) {
        int a; 
        if (i == 0) {
            a = 0;
        }
        else if (i == 1) {
            a = 2;
        }
        else {
            a = A[i-1] + 2*(i);
        }
        A[i] = a;
    }
    long long int *p = &A[10]; 
    p += 2;
    
    printf("%p", p);
}

