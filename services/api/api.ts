import {TCard} from "../types/Types";
const config = {
    url: "https://api.bottlehouse.ru/posts",
};

export const getAllCards = async (): Promise<TCard> => {
    return fetch(config.url, {
        method: "GET",
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    });
};
export const getEventsCards = async () : Promise<TCard>=> {
    return fetch(`${config.url}?rubric=events`, {
        method: "GET",
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    })
}
export const getShoppingCards = async (): Promise<TCard> => {
    return fetch(`${config.url}?rubric=shopping`, {
        method: "GET",
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    })
}