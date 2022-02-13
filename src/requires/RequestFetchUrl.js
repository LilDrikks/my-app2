const API_KEY = '279416748d4a93333d67fbc025e236d4'
const API_BASE = 'https://api.themoviedb.org/3'

/*
 originais 
 recomendados trending
 em alta top rated
 ação
 comédia
 terror
 romance
 decumentários
*/


//Na moral esse é o melhor codigo que ja vi em aula em questão de funcionalidade e clareza sobre requisição asyncrona
const basicFetch = async(endPoint) => {
    const req = await fetch(`${API_BASE}${endPoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async() => {
        return [{
                slug: 'originals',
                title: 'Originais netflix',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Filmes em alta',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            },
        ]

    },
    getBanner: async(banner_id, type) => {
        let info = {}

        if (banner_id) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${banner_id}?api_key=${API_KEY}`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${banner_id}?api_key=${API_KEY}`)
            }
            return info
        }

    }
}