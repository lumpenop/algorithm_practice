a = input()


print(a[0:10])

for i in range(0, len(a), 10):
    print(a[i:i+10])
    print(i)