import json
import urllib.request
import os

def fetch_and_write_response(url, output_file):
    try:
        # Make a GET request to the local IP address
        response = urllib.request.urlopen(url)

        # Check if the request was successful
        if response.status == 200:
            # Extract JSON data from the response
            data = json.loads(response.read().decode('utf-8'))

            # Get the parent directory of the current directory
            parent_dir = os.path.dirname(os.path.abspath(__file__))
            output_file_path = os.path.join(parent_dir, output_file)

            # Write the JSON data to a file
            with open(output_file_path, 'w') as file:
                json.dump(data, file)
            
            print(f"Data successfully written to {output_file_path}")
        else:
            print(f"Failed to retrieve data from {url}. Status code: {response.status}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Local IP address where the simple line of text is hosted
local_ip_address = "http://127.0.0.1:8787/"
# Output file name
output_file_name = "response_data.json"

# Call the function to fetch data and write it to the file
fetch_and_write_response(local_ip_address, output_file_name)
