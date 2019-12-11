x = 1
while x != 0:
    print("menu pitero: \n1) opcion 1\n2) opcion 2\n3) opcion 3\n0) salir")
    x = int(input("ingrese una opcion:"))
    print(x)
    if x == 1:
        print("1")
    elif x == 2:
        print("2")
    elif x == 3:
        print("3")
    elif x == 0:
        print("saliste")
    else:
        print("otra wea")