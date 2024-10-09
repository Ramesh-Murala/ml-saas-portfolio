from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def compute_similarity(item_matrix, user_vector):
    if len(item_matrix) == 0:
        return []
    
    similarities = cosine_similarity([user_vector], item_matrix)
    return similarities[0]
