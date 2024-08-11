import pandas as pd

data1=pd.read_csv("Book1.csv",header=None)
soil="Alluvial Soils"

a=[]

for i in range(data1.shape[0]):
    if data1[0][i]==soil:
        for j in range(data1.shape[1]):
            if data1[j][i]=='1':
                a.append(data1[j][0])
        break

data=pd.read_csv("Book2.csv",header=None)

season="Rabi Season"

b=[]

for i in range(data.shape[0]):
    if data[0][i]==season:
        for j in range(data.shape[1]):
            if data[j][i]=='1':
                b.append(data[j][0])
        break

common = []
for i in range(len(a)):
    for j in range(len(b)):
        if a[i] == b[j]:
            common.append(a[i])
            break

result = []

sheet_3 = "1r_Y7V8Wi4WKF6SeLTq-oBAjr8MeRCl8L23HdB_wlQP0"
data3 = pd.read_csv(f"https://docs.google.com/spreadsheets/d/{sheet_3}/export?format=csv", header='infer')

column_sum = data3.sum(axis=0).tolist()
temp = ["Cotton","wheat","jowar","corn","pulses","linseed","Millets","sugarcane","groundnut","rise","oilseeds","maize","tea","coffee","cocunut","sugar","beet","rubber"]

for i in common:
  for j in range(data3.shape[0]): # Assuming you meant to use 'data3' instead of 'list'
    if i == temp[j]: # Assuming you want to compare with the first column of 'data3'
      result.append(column_sum[j]) # Assuming 'column_sums' is defined as in previous responses
      break 


print(result)
