export const getSingleFact = async () => {
    try {
        const response = await fetch('https://mewfacts.herokuapp.com/')
        if (!response.ok) {
            throw Error(`Failed to fetch fact.`);
        }
        const responseData = await response.json()
        return {
            data: responseData.data[0],
            error: null
        }    
    }
    catch (error) {
        console.warn(error)
        return {data: null, error: error}
    }
}