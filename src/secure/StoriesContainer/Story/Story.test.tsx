import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Story from '.';

describe('Test Story component', () => {
  let component: ShallowWrapper;
  const data = {
    by: 'tysone',
    descendants: 7,
    id: 21025262,
    kids: [21026801, 21026466],
    score: 47,
    time: 1568977341,
    title:
      'Secret FBI Subpoenas Scoop Up Personal Data from Scores of Companies',
    type: 'story',
    url: 'https://www.nytimes.com/2019/09/20/us/data-privacy-fbi.html'
  };
  beforeEach(() => {
    component = shallow(<Story data={data} />);
  });
  it('Test click event append expand class', () => {
    expect(component.hasClass('expand')).toEqual(false);
    component.simulate('click');
    expect(component.hasClass('expand')).toEqual(true);
  });
  it('Test  dbclick event remove expand class', () => {
    expect(component.hasClass('expand')).toEqual(false);
    component.simulate('click');
    expect(component.hasClass('expand')).toEqual(true);
    component.simulate('click');
    expect(component.hasClass('expand')).toEqual(false);
  });
});
