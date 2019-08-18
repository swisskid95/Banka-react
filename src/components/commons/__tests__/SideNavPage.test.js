/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import SideNavPanel from '../SideNavPanel';

describe('SideNavPanel', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SideNavPanel />);

    expect(wrapper).toMatchSnapshot();
  });
});
