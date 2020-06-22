import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from "jest-fetch-mock";
import '@testing-library/jest-dom/extend-expect';

fetchMock.enableMocks();
configure({ adapter: new Adapter() });


