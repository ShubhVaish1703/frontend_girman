import data from "./data"

export const fetchData = async ({
    searchValue
}) => {
    if (!searchValue) {
        return data; // Return all users if no searchValue is provided
    }

    // Normalize search value for case insensitive comparison
    const normalizedSearchValue = searchValue.toLowerCase();

    // Filter users based on first_name, last_name, or city
    const filteredUsers = data.filter((user) => {
        const { first_name, last_name, city } = user;
        return (
            first_name.toLowerCase().includes(normalizedSearchValue) ||
            last_name.toLowerCase().includes(normalizedSearchValue) ||
            city.toLowerCase().includes(normalizedSearchValue)
        );
    });

    return filteredUsers;
}