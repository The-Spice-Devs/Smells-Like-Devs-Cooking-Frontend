import axios from 'axios'
import useSWR from 'swr'

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
export const apiFaveUrl = process.env.NEXT_PUBLIC_FAVE_RESOURCE_URL;
export const registerURL = process.env.NEXT_PUBLIC_RESOURCE_REGISTER_URL; 
import { useAuth } from '../contexts/auth';

export default function useResource() {

    const { tokens, logout } = useAuth()

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    // const { data,favData, error, mutate } = useSWR([apiUrl,apiFaveUrl, tokens, tokens], fetchResource,fetchResource);
    
    const { data: favData, error: favError } = useSWR([apiFaveUrl], fetchResource);
    
    console.log("DATA: ", data)

    console.log("FAVDATA: ", favData)


    async function fetchResource(url) {

        // if (!tokens) {
        //     return;
        // }

        try {
            const response = await axios.get(url);
            // , config() this goes into the line above within the get method
            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function createResource(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function createFavoriteResource(info) {

        try {
            await axios.post(apiFaveUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }
    

    
    async function createUser(info) {

        try {
            await axios.post(registerURL, info);
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updateResource(resource) {
        // STRETCH
        // Add ability for user to update an existing resource
    }


    // helper function to handle getting Authorization headers EXACTLY right
    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }

    function handleError(error) {
        console.error(error);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resources: data,
        favResources: favData,
        error,
        loading: tokens && !error && !data,
        createResource,
        createFavoriteResource,
        deleteResource,
        updateResource,
        createUser,
    }
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/

