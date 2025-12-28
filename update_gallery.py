import os
import json

# Configuration
GALLERY_DIR = 'gallery'
OUTPUT_FILE = 'gallery_data.js'
VALID_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp', '.gif'}

def update_gallery():
    """Scans the gallery directory and updates gallery_data.js."""
    images = []
    
    if not os.path.exists(GALLERY_DIR):
        print(f"Error: Directory '{GALLERY_DIR}' not found.")
        return

    # Scan directory
    for filename in os.listdir(GALLERY_DIR):
        ext = os.path.splitext(filename)[1].lower()
        if ext in VALID_EXTENSIONS:
            images.append(filename)
    
    # Sort for consistency
    images.sort()
    
    # Write to JS file as a global variable
    js_content = f"const GALLERY_IMAGES = {json.dumps(images, indent=4)};"
    
    with open(OUTPUT_FILE, 'w') as f:
        f.write(js_content)
        
    print(f"Successfully updated {OUTPUT_FILE} with {len(images)} images.")

if __name__ == "__main__":
    update_gallery()
