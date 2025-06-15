# This is the Ideal requiremnet of the crops 
crop_requirements = { # Dictionary for crops requirement info
    'wheat': {'N': 80, 'P': 30, 'K': 40},
    'rice': {'N': 100, 'P': 40, 'K': 40},
    'corn': {'N': 120, 'P': 60, 'K': 60},
    'cotton': {'N': 90, 'P': 50, 'K': 50},
}

# Content of Fertilizers 
fertilizers = { # Dictionary of Fertilizers Info
    'Urea': {'N': 46, 'P': 0, 'K': 0},
    'DAP': {'N': 18, 'P': 46, 'K': 0},
    'MOP': {'N': 0, 'P': 0, 'K': 60},
    'NPK': {'N': 20, 'P': 20, 'K': 20},
}

def recommend_fertilizer(crop, soil_content): # Function that takes crop,soil as parameters
    # Get the nutrient requirement for the selected crop
    required_nutrients = crop_requirements.get(crop.lower()) # crop.lower()used for converting crop name into lowercase
                                                             # .get()used for getting the crop name 

    if not required_nutrients: # checks whether the crop is available in the dictionary or not 
        return "Crop not found in the database."

    # Calculate the deficit in nutrients
    deficit = {
        'N': required_nutrients['N'] - soil_content['N'],
        'P': required_nutrients['P'] - soil_content['P'],
        'K': required_nutrients['K'] - soil_content['K'],
    }

    # Suggest a fertilizer based on the highest deficit
    max_deficit_nutrient = max(deficit, key=deficit.get)
    
    recommended_fertilizer = None

    for fertilizer, content in fertilizers.items():
        if content[max_deficit_nutrient] > 0:
            recommended_fertilizer = fertilizer
            break

    return f"Recommended Fertilizer: {recommended_fertilizer}, based on {max_deficit_nutrient} deficit."

# Example Usage:
soil_content = {'N': 100, 'P': 60, 'K': 5}
crop = 'RICE'

recommendation = recommend_fertilizer(crop, soil_content)
print(recommendation)