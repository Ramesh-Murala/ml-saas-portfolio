from utils.feature_engineering import extract_features

class FraudService:
    def __init__(self, model):
        self.model = model

    def evaluate_transaction(self, transaction_data: dict) -> dict:
        features = extract_features(transaction_data)
        probabilities = self.model.predict_proba([features])[0]
        fraud_prob = probabilities[1]
        
        is_fraud = fraud_prob > 0.5
        risk_level = "HIGH" if fraud_prob > 0.8 else "MEDIUM" if fraud_prob > 0.5 else "LOW"

        return {
            "is_fraud": is_fraud,
            "fraud_probability": fraud_prob,
            "risk_level": risk_level,
            "message": "Fraud check completed successfully."
        }
