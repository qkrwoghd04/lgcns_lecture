import os
dan = os.environ.get('DAN')
if dan is None:
    sdan = 2
    edan = 10
else:
    sdan = int(dan)
    edan = int(dan) + 1
for d in range(sdan, edan):
    print(f"{d}단")
    print("=" * 10)
    for i in range(1, 10):
        print(f"{d} x {i} = {int(d)*i:>2}")
    print()
