const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            planets:[],
            people: [],
            vehicles: [],
            favorites:[],
            favoriteDeleted: null
        },
        actions: {
            fetchWorld: async (type='') =>{
                const config = {
                        "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    `https://swapi.dev/api/${type}${type?'/':''}`,
                    config
                );
                const json = await response.json();
                console.log('--json--', json.results);
                console.log('type is',type)
                switch(type){
                    case 'planets':
                        setStore({planets: json.results });
                    break;
                    case 'people':
                        setStore({people: json.results });
                    break;
                    case 'vehicles':
                        setStore({vehicles: json.results });
                    break;
                    default:break;
                }
                
            },
             addFavorites : (arr, name) => {
                console.log('name----',name)
                let newObj = arr.concat([name])
                setStore({favorites: newObj })
            },
            deleteFavorite : (arr, name) => {
                console.log('arr----', arr,'index---', name);
                let newArrayFavorites = arr.filter((element)=>{
                    console.log('ele----',element)
                    console.log('eleName----',element.name)
                    return  element.name !== name})
                setStore({favorites: newArrayFavorites })
                setStore({favoriteDeleted: name})
            }
        }
    };
};

export default getState;
