def sort_one_zero_list(a):
    x = 0
    y = len(a) - 1

    while (x != y):
        if a[x] == 0:
            x += 1
        else:
            # a[x] is definitely 1
            if a[y] == 1:
                y -= 1
            else:
                # a[y] is definitely 0
                temp = a[x]
                a[x] = a[y]
                a[y] = temp
                x += 1
    return a


print (sort_one_zero_list([1,0,0,0,1,1,0,1]))