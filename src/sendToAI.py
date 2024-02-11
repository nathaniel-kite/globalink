from jsonWriter import jsonWriter

def main():
    json_data = [
        {
            "name": "Carlos Vargas",
            "countryOfOrigin": "Peru",
            "languages": ["Spanish", "English"],
            "currentRole": "Software Dev at Google",
            "skills": ["agile development", "networking", "java"],
            "industry": "Software",
            "currentLocation": "Atlanta, GA"
        },
        {
            "name": "Henrik Andersen",
            "countryOfOrigin": "Denmark",
            "languages": ["Danish", "English"],
            "currentRole": "Agricultural Consultant at a Farming Cooperative",
            "skills": ["Crop Management", "Agricultural Economics"],
            "industry": "Agriculture",
            "currentLocation": "Denmark"
        },
        {
            "name": "Akira Tanaka",
            "countryOfOrigin": "Japan",
            "languages": ["Japanese", "English"],
            "currentRole": "Creative Director at a Design Agency",
            "skills": ["User Experience (UX) Design", "Graphic Design"],
            "industry": "Design",
            "currentLocation": "Japan"
        },
        {
            "name": "Elena Petrov",
            "countryOfOrigin": "Russia",
            "languages": ["Russian", "English", "French"],
            "currentRole": "Language Instructor at a Language Institute",
            "skills": ["Language Teaching", "Intercultural Communication"],
            "industry": "Education",
            "currentLocation": "Russia"
        }, 
        {
            "name": "Maria Santos",
            "countryOfOrigin": "Brazil",
            "languages": ["Portuguese", "English"],
            "currentRole": "Senior Software Engineer at a Tech Firm",
            "skills": ["Software Development", "Leadership"],
            "industry": "Technology",
            "currentLocation": "Brazil"
        }
    ]
    filename = "./../../cloudflare/hello-ai/src/test.json"  # Example: output.json in the parent directory
    jsonWriter(json_data, filename)
    print(f"JSON objects written to {filename}")

if __name__ == "__main__":
    main()
