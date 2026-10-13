import os
from PIL import Image

img = Image.open('public/images/brochure_pages/page_10.png')
w, h = img.size

# Directory for extracted logos
os.makedirs('public/images/assets/client_logos', exist_ok=True)

# Coordinates for each logo (left, upper, right, lower)
# Based on 1165x1650
crops = {
    'logo_aamal.png': (230, 680, 460, 910),
    'logo_seazen.png': (480, 700, 720, 910),
    'logo_mercado360.png': (745, 715, 935, 930),
    'logo_reyada.png': (220, 960, 520, 1100),
    'logo_amwaj.png': (620, 940, 930, 1080),
    'logo_kimshealth.png': (220, 1140, 590, 1250),
    'logo_magtrans.png': (630, 1140, 940, 1245),
    'logo_orion.png': (400, 1280, 760, 1420),
}

for name, box in crops.items():
    cropped = img.crop(box)
    dest = os.path.join('public/images/assets/client_logos', name)
    cropped.save(dest)
    print(f"Saved {name} with size {cropped.size}")

print("All client logos cropped successfully!")
