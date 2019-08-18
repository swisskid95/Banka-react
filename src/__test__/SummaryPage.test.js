/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { SummaryPage } from '../components/SummaryPage';

describe('SummaryPage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SummaryPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
