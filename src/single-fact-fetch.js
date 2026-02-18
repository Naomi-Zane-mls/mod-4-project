export const getSingleFact = async () => {
    try {
        const response = await fetch('https://meowfacts.herokuapp.com/')
        if (!response.ok) {
            throw Error(`Failed to fetch fact.`);
        }
        const responseData = await response.json()
        const fact = responseData.data[0]
        return {
            data: fact,
            error: null
        }    
    }
    catch (error) {
        console.warn(error)
        return {data: null, error: error}
    }
}