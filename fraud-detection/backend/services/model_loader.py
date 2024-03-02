class DummyFraudModel:
    def predict_proba(self, features):
        amount = features[0][0]
        if amount > 5000:
            return [[0.1, 0.9]]
        elif amount > 1000:
            return [[0.4, 0.6]]
        return [[0.9, 0.1]]

def get_model():
    return DummyFraudModel()
