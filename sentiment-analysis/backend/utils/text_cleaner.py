import re

def clean_text(text: str) -> str:
    """Removes special characters and extra spaces from the text."""
    text = re.sub(r'\s+', ' ', text)
    return text.strip()
