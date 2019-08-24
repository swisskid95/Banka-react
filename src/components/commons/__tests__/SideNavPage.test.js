/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { SideNavPanel } from '../SideNavPanel';

const user = {
  email: 'someuser@gmail.com',
  password: 'randompassword',
  firstname: 'some',
  lastname: 'user'
};

describe('SideNavPanel', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SideNavPanel user={user} />);

    expect(wrapper).toMatchSnapshot();
  });
});
