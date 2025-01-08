import os
import json

def get_folder_paths(directory):
    folder_paths = [os.path.join(directory, folder) for folder in os.listdir(directory) if os.path.isdir(os.path.join(directory, folder))]
    return folder_paths

directory = r'C:\Users\wston\Desktop\personal\Personal_Site\public\project_cards'
folders = get_folder_paths(directory)
for folder in folders:
    summary_path = os.path.join(folder, 'summary.json')
    with open(summary_path) as f:
        if os.path.getsize(summary_path) > 0:
            summary = json.load(f)
        else:
            summary = {}

    if "name" not in summary:
        summary["name"] = "TODO"

    if "summary" not in summary:
        summary["summary"] = "TODO"

    if "skills" not in summary:
        summary["skills"] = "TODO"

    if "images" not in summary:
        img_paths = [os.path.join(folder, img).split("public", 1)[1].replace("\\", "/") for img in os.listdir(folder) if img.endswith('.jpg') or img.endswith('.png') or img.endswith('.webp')]
        img_list = []
        for i, img_path in enumerate(img_paths):
            img_list.append({"src": img_path, "alt": f"Image {i+1}"})
        summary["images"] = img_list
    
    if "video" not in summary:
        summary["video"] = []

    if "paper" not in summary:
        for file_name in os.listdir(folder):
            if file_name.lower().endswith('.pdf'):
                summary["paper"] = os.path.join(folder, file_name).split("public", 1)[1].replace("\\", "/")
    
    with open(summary_path, 'w') as f:
        json.dump(summary, f, indent=4)
        