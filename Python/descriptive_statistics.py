import pandas as pd
import numpy as np

df = pd.read_csv('Excel.csv')

mean_age = np.mean(df['age'])
median_age = np.median(df['age'])
std_dev_age = np.std(df['age'])

print(f"Mean Age: {mean_age}")
print(f"Median Age: {median_age}")
print(f"Standard Deviation of Age: {std_dev_age}")
