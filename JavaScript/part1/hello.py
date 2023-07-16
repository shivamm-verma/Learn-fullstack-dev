a = 5
b = 5
print(id(a) == id(b))
print(type(a))
#numbers don't have diffrent id!
print()
a = [5]
b = [5]
print(id(a) == id(b))
print(type(a))
# because arrays have different memory allocation/ID
