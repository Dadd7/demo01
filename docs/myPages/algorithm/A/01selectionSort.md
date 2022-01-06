---
title: 选择排序
date: 2022-01-06
categories:
- 笔记
  tags:
- algorithm
  publish: true
  sidebar: auto
---
## 选择排序

```java
public static void selectionSort(int[] arr) {
    if (arr == null || arr.length < 2) {
        return;
    }    
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        swap(arr, i, minIndex);
    }  
}


public static void swap(int[] arr, int i, int j) {    
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
```

时间复杂度`O(N^2)`，额外空间复杂度`O(1)`

