from schemas.item_schema import ItemBase

mock_items = [
    ItemBase(id="p1", name="Wireless Headphones", category="Electronics", price=199.99),
    ItemBase(id="p2", name="Smart Watch", category="Electronics", price=299.99),
    ItemBase(id="p3", name="Running Shoes", category="Sports", price=120.00),
    ItemBase(id="p4", name="Yoga Mat", category="Sports", price=30.00),
    ItemBase(id="p5", name="Coffee Maker", category="Home", price=89.99),
    ItemBase(id="p6", name="Desk Lamp", category="Home", price=45.00),
]

def load_items():
    return mock_items

def get_item_by_id(item_id: str):
    for item in mock_items:
        if item.id == item_id:
            return item
    return None
