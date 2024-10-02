import { createContext, useState, ReactNode } from "react";

interface IfilterItems {
    name: string;
    gender: string;
    pageNumber: number;
    status: string;
    species: string;
}

// Context creation
export const FilterContext = createContext<{
    filterItems: IfilterItems;
    setFilterItems: React.Dispatch<React.SetStateAction<IfilterItems>>;
}>({
    filterItems: {
        name: "",
        gender: "",
        species: "",
        pageNumber: 1,
        status: "",
    },
    setFilterItems: () => {},
});

const FilterContextProvider = ({ children }: { children: ReactNode }) => {
    const [filterItems, setFilterItems] = useState<IfilterItems>({
        name: "",
        gender: "",
        species: "",
        pageNumber: 1,
        status: "",
    });

    return (
        <FilterContext.Provider value={{ filterItems, setFilterItems }}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterContextProvider;
