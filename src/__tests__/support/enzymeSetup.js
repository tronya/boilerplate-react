import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './globalVariablesMock';

Enzyme.configure({ adapter: new Adapter() });
