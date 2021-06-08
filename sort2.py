
a = [5,10,11,12, 2,7,8,9, 3, 4, 1]


for i in range(0,len(a)-1,1):
    b = a[i]
    j = i
    for j in range(i+1, len(a),1):
        if(b >= a[j]):
            b=a[j]
            idx=j
            a[i], a[idx] = a[idx], a[i]       
    

print(a)