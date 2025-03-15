# Patterns 
 # ascending
k=int(input("enter the number uptill you want pattern:"))+1
j=input("Enter the symbol for pattern:")
for i in range(1,k):
    print(j*i)

# decending
l=int(input("Enter the no uptill you want the pattern: "))
m=input("Enter the symbol for pattern:")
for n in range(l,0,-1):
    print(m*n)

#pyramid
n =int(input("enter the number uptill you want pattern:"))+1
o=input("Enter the symbol for pattern:")
for i in range(1, n+1):
    print(" " * (n - i) + o * (2 * i - 1))

#dimond
p = int(input("Enter the no uptill you want the pattern: "))
q=input("Enter the symbol for pattern:")
for i in range(1, p+1):
    print(" " * (p - i) + q * (2 * i - 1))
for i in range(p-1, 0, -1):
    print(" " * (p - i) + q * (2 * i - 1))
