/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import EntrySideBar from '../EntrySideBar';

describe('EntrySideBar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <EntrySideBar
        welcomeText="HELLO, Friend"
        mainText="Not yet a member, click on the button below to Join in the benefits."
        buttonText="sign-up"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
