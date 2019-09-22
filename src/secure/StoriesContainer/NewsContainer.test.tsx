import * as React from 'react';
import { shallow } from 'enzyme';
import * as api from './../services/stories';

import StoriesContainer, { IStoriesContainerState } from '.';
import { getStoriesIds, getStoryById } from '../services/__mock__/stories';

describe('Stories List component', () => {
  const mockStories = jest.spyOn(api, 'getStoriesIds');
  mockStories.mockReturnValue(getStoriesIds());
  const mockStoryById = jest.spyOn(api, 'getStoryById');
  mockStoryById.mockReturnValue(getStoryById());
  it('fetch stories ids on mount', done => {
    const wrapper = shallow(<StoriesContainer />);
    setTimeout(() => {
      wrapper.update();
      const state: IStoriesContainerState = wrapper.instance()
        .state as IStoriesContainerState;
      expect(state.storiesIds.length).toBe(2);
      expect(state.loading).toBe(false);
      expect(state.storiesList.length).toBe(2)
      done();
    }, 1000);
  });
});
