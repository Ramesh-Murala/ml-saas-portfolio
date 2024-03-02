def extract_features(transaction: dict) -> list:
    amount = transaction.get("amount", 0.0)
    user_id = transaction.get("user_id", "")
    user_hash = hash(user_id) % 100
    return [amount, user_hash]
