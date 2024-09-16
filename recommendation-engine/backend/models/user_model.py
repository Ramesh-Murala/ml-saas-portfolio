from typing import List

class User:
    def __init__(self, user_id: str, interaction_history: List[str]):
        self.user_id = user_id
        self.interaction_history = interaction_history

mock_users_db = {
    "u1": User(user_id="u1", interaction_history=["p1", "p3"]),
    "u2": User(user_id="u2", interaction_history=["p2", "p4"])
}

def get_user_by_id(user_id: str):
    return mock_users_db.get(user_id, User(user_id=user_id, interaction_history=[]))
