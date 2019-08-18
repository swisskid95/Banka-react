/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { CreateAccountPage } from '../components/CreateAccountPage';

describe('CreateAccountPage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<CreateAccountPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
