import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
import joblib

# Load dataset
data = pd.read_csv("../placement.csv")

# Convert categorical columns
le = LabelEncoder()

data['gender'] = le.fit_transform(data['gender'])
data['workex'] = le.fit_transform(data['workex'])
data['status'] = le.fit_transform(data['status'])

# Select features
X = data[['ssc_p','hsc_p','degree_p','etest_p','mba_p']]

# Target variable
y = data['status']

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,y,test_size=0.2,random_state=42
)

# Train model
model = LogisticRegression()
model.fit(X_train,y_train)

# Save model
joblib.dump(model,"placement_model.pkl")

print("Model trained successfully")