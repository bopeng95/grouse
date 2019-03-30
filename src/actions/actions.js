import types from './actionTypes';
import keywords from './keywords';

export default {
    addTextAndTags: (text) => ({
        type: types.ADD_TEXT_AND_TAGS,
        payload: getTagsFromText(text)
    }),
    getTextAndTags: () => {
        fetch('/api')
        .then(res => res.json())
        .then(data => {
            return {
                type: types.GET_TEXT_AND_TAGS,
                payload: data
            }
        });
    },
}

function getTagsFromText(text) {
    const data = { text: text, date: Date.now() };
    //retrieve tags from text logic here
    data.tags = retrieveTags(text.toLowerCase());
    return data;
}

function retrieveTags(txt) {
    const tags = [];
    for(const key in keywords) {
        if(txt.indexOf(key) !== -1) tags.push(key);
    } return tags;
}