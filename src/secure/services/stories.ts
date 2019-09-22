import axios from 'axios';
import StaticVariables from '../../environment';

export const getStoriesIds = () => {
  return axios.get(StaticVariables.APIs.top).then(res => res.data);
};
export const getStoryById = (id: number) => {
  return axios.get(StaticVariables.APIs.story(id)).then(res => res.data);
};
