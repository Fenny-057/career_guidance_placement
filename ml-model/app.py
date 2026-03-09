from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

model = joblib.load("placement_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    features = [[
        data["ssc_p"],
        data["hsc_p"],
        data["degree_p"],
        data["etest_p"],
        data["mba_p"]
    ]]

    prediction = model.predict(features)[0]

    result = "Placed" if prediction == 1 else "Not Placed"

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(port=5001)