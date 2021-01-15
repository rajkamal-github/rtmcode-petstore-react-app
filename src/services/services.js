
const api_url = 'https://virtserver.swaggerhub.com/rajkamal-github/expenses/1.0.0';

const GetPets = () => {
    return fetch(api_url + "/pet/findByStatus?status=available")
    .then(response => response.json())
    .catch(err => console.log(err));
}

export default {
    GetPets : GetPets
}