
import { supabase } from "./database";

export const fetchAllModels = () => {
    return supabase.rpc('get_all_models_with_gallary')
        .then(({ data, error }) => {
            if (error) throw error;
            return data;
        })
        .catch(error => console.error("Error fetching all models:", error));
};

export const fetchModel = async (firstName, lastName) => {
    const allModels = await fetchAllModels();
    const uniqueModels = Array.from(new Map(allModels.map(model => [model.model_id, model])).values());
    
    return uniqueModels.filter(model => model.first_name === firstName && model.last_name === lastName)
}

export const fetchModelImages = async (modelId) => {
    return await supabase.rpc('get_model_gallery', { model_id_input: modelId })
        .then(({ data, error }) => {
            console.log('fetch image db: ' + data)
            if (error) throw error;
            return data;
        })
        .catch(error => console.error("Error fetching gallery:", error));
}

export const fetchModelsByCategory = async () => {
    return supabase.rpc('get_random_model_per_gender')
        .then(({ data, error }) => {
            if (error) throw error;
            return data;
        })
        .catch(error => console.error("Error fetching model categories:", error));
}

export const fetchModelsByGender = async (gender = 'all') => {
    const allModels = await fetchAllModels();
    const uniqueModels = Array.from(new Map(allModels.map(model => [model.model_id, model])).values());
  
    if (gender === 'all') return uniqueModels;
    return uniqueModels.filter(model => model.gender.toLowerCase() === gender);
}; 