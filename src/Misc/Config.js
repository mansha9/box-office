const API_BASE_URL = 'https://api.tvmaze.com';

// async function always returns a promise thta is why we will add .then in apiGet in Home.js:
export async function apiGet(queryString) {

    const response = await fetch(`${API_BASE_URL}${queryString}`).then(r => 
        r.json()
    );
    return response;
}