# a = 5
# b = 5
# print(id(a) == id(b))
# print(type(a))
# #numbers don't have diffrent id!
# print()
# a = [5]
# b = [5]
# print(id(a) == id(b))
# print(type(a))
# # because arrays have different memory allocation/ID

# string = '123'
# print(string[::-1])

# N = int(input())
# str_N = (str(N))[::-1]
# R = int(str_N)

# val = N**R
# val %= 1000000007
# print(val)


queue = []
i, n = 1, int(input("How many elements of queue?: "))
while n >= i:
    val = int(input(f"enter value {i}: "))
    queue.append(val)
    i += 1
print(f"OG queue: {queue}")
print(f"after reversing:  {queue[::-1]}")
