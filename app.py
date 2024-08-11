from flask import Flask, render_template, request
import pandas as pd
import numpy as np

app = Flask(__name__)

@app.route('/')
def home():
    soil = request.args.get('soil-type')
    season = request.args.get('planting-season')
    ans = mymethod(soil,season)
    return render_template('second-farmer-input.html',val = ans)

# @app.route('/get')
# def call():
    
    
def mymethod(soil,season):
    data1 = pd.read_csv("C:/Users/HP/Desktop/hackathon/hackathon/py/Book1.csv", header=None)

    a=[]

    for i in range(data1.shape[0]):
        if data1[0][i]==soil:
            for j in range(data1.shape[1]):
                if data1[j][i]=='1':
                    a.append(data1[j][0])
            break

    data=pd.read_csv("C:/Users/HP/Desktop/hackathon/hackathon/py/Book2.csv",header=None)

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
      
    if result:
        max_crop = np.max(result)
        max_arg = np.argmax(result)
        min_crop = np.min(result)
        min_arg = np.argmin(result)

        final = "In your region, "+common[max_arg]+" production is the most, so you should grow "+common[min_arg]+" for maximum profit"
    else:
        final = "No suitable crops found based on the given soil type and season."
        
        
    return final


if __name__ == '__main__':
    app.run(debug=True)


