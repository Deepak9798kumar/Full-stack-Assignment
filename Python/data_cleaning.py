import pandas as pd

df = pd.read_csv('Excel.csv')

cleaned_df = df.dropna()

print(cleaned_df)

cleaned_df.to_csv('cleaned_dataset.csv', index=False)
