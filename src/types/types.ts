interface Location {
    name: string;
    url: string;
}

export interface Character {
    id: number;                    
    name: string;                  
    image: string;                 
    gender: "Male" | "Female" | "Genderless" | "Unknown"; 
    species: string;               
    status: "Alive" | "Dead" | "Unknown"; 
    created?: string;              
    episode?: string[];             
    location?: Location;            
    origin?: Location;              
    type?: string;                  
    url?: string;                   
}