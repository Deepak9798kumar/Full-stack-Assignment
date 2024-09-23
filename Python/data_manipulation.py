import pandas as pd

def filter_top_rows(df, column_name='age', threshold=30):
    filtered_df = df[df[column_name] > threshold]
    return filtered_df.head(5)

df = pd.read_csv('your_dataset.csv')
top_rows = filter_top_rows(df)
print(top_rows)
