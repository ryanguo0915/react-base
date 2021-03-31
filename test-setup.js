// test-setup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: [
      "<rootDir>/src"
    ],
    transform: {
      ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest-config/file-mock.js",
      '.(css|less)$': '<rootDir>/jest-config/style-mock.js'
    },
  };