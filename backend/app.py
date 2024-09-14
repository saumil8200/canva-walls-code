import requests
import json
import os

def get_github_files(repo_owner, repo_name, directory):
    url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents/{directory}"
    response = requests.get(url)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to retrieve contents from {url}")
        return []

def generate_json_structure(repo_owner, repo_name, directories):
    data_structure = {}

    for directory in directories:
        files = get_github_files(repo_owner, repo_name, directory)
        data_structure[directory] = []
        
        for file in files:
            # Only include files with certain extensions (e.g., jpg, png)
            if file['type'] == 'file' and file['name'].lower().endswith(('.png', '.jpg', '.jpeg')):
                # Remove the file extension
                file_name_without_extension = os.path.splitext(file['name'])[0]
                file_info = {
                    'name': file_name_without_extension,  # Use the name without extension
                    'url': file['download_url']  # Use the 'download_url' to get a direct link to the file
                }
                data_structure[directory].append(file_info)
    
    return data_structure

def save_json_to_file(json_data, file_path):
    # Write the JSON data to a file
    with open(file_path, 'w') as json_file:
        json.dump(json_data, json_file, indent=4)
    print(f"JSON data has been saved to {file_path}")

# Configuration
repo_owner = "saumil8200"  # Replace with the GitHub username or organization
repo_name = "canva-walls"  # Replace with the repository name
directories = ['desktop', 'mobile', 'compressed_desktop', 'compressed_mobile']  # Replace with your folders in the repository
output_file_path = "github_images.json"  # Path to save the JSON file

# Generate JSON structure
json_structure = generate_json_structure(repo_owner, repo_name, directories)

# Save JSON to file
save_json_to_file(json_structure, output_file_path)
