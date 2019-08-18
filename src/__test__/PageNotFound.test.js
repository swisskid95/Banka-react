/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import PageNotFound from '../components/PageNotFound';

describe('PageNotFound', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PageNotFound />);

    expect(wrapper).toMatchSnapshot();
  });
});
