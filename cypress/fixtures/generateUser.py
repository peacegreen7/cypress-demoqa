import json
import random
import string

def generate_special_characters():
    # Define a string with special characters
    special_chars = "!@#$%^&*()-_=+[]{}|;:',.<>?/"
    return random.choices(special_chars, k=2)

def generate_username():
    return ''.join(random.choices(string.ascii_lowercase, k=8))

def generate_password():
    letters_lowercase = random.choices(string.ascii_lowercase, k=4)
    letters_uppercase = random.choices(string.ascii_uppercase, k=3)
    return ''.join(letters_lowercase + letters_uppercase + random.choices(string.digits, k=2) + generate_special_characters())

def create_user_records(num_records=200):
    users = []
    for _ in range(num_records):
        username = generate_username()
        password = generate_password()
        user = {
            "username": username,
            "password": password
        }
        users.append(user)
    return users

def save_to_json(data, filename='users.json'):
    with open(filename, 'w') as json_file:
        json.dump(data, json_file, indent=4)

# Generate 200 user records
user_records = create_user_records(2)

# Save the records to a JSON file
save_to_json(user_records)

print(f"Generated {len(user_records)} user records and saved to 'users.json'.")