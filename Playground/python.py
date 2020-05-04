from time import sleep

def longProcess(sleepTime,processId):
    sleep(sleepTime)
    print("Process# " + processId+" compleated!")

print("Process# 1")

print("Process# 2 start...Downloading huge files")
longProcess(5,"2")

print("Process# 3 start...Downloading huge files")
longProcess(3,"3")

print("Process# 4")