/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { TransactionHistoryPage } from '../components/TransactionHistoryPage';

describe('TransactionHistoryPage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<TransactionHistoryPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
