import axios from 'axios';

export const fetchQuestionsFromApi = async (tag, page, perPage) => {
    console.log(tag)
    const response = await axios.get('https://api.stackexchange.com/2.3/questions', {
        params: {
            order: 'desc',
            sort: 'activity',
            tagged: tag,
            site: 'stackoverflow',
            page,
            pagesize: perPage,
        },
    });
    return response
}