from jsonWriter import jsonWriter

def main():
    json_data = [
        {"name": "Alice", "age": 30},
        {"name": "Bob", "age": 25},
        {"name": "Charlie", "age": 35}
    ]
    filename = "./api/jsonDump/output.json"  # Example: output.json in the parent directory
    jsonWriter(json_data, filename)
    print(f"JSON objects written to {filename}")

if __name__ == "__main__":
    main()
