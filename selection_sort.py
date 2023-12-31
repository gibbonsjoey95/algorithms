def findSmallest(arr):
  smallest = arr[0]
  smallest_index = 0
  for i in range (1, len(arr)):
    if arr[i] < smallest:
      smallest = arr[i]
      smallest_index = i
  return smallest_index

def selectionSort(arr):
  new_array = []
  for i in range (len(arr)):
    smallest = findSmallest(arr)
    new_array.append(arr.pop(smallest))
  return new_array

print(findSmallest([5,3,6,2,10]))
print(selectionSort([5,3,6,2,10]))