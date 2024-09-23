import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('your_dataset.csv')

age_distribution = df['age'].value_counts().sort_index()

plt.figure(figsize=(10, 6))
age_distribution.plot(kind='bar', color='skyblue')

plt.title('User Age Distribution')
plt.xlabel('Age')
plt.ylabel('Number of Users')

plt.show()
