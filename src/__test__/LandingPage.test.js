/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import LandingPage from '../components/LandingPage';

it('should render correctly', () => {
  const wrapper = shallow(<LandingPage />);

  expect(wrapper).toMatchSnapshot();
});
