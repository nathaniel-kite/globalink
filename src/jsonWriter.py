import os
import json

def jsonWriter(data, filename):
    """
    Write an array of JSON objects to a JSON file located in the parent directory.

    Args:
    - data: Array of JSON objects to be written to the file.
    - filename: Name of the JSON file to write to (relative to the parent directory).
    """
    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
    file_path = os.path.join(parent_dir, filename)
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)

# Example usage:
if __name__ == "__main__":
    json_data = [
        {"name": "Alice", "age": 30},
        {"name": "Bob", "age": 25},
        {"name": "Charlie", "age": 35}
    ]
    filename = "../output.json"  # Example: output.json in the parent directory
    jsonWriter(json_data, filename)
    print(f"JSON objects written to {filename}")
