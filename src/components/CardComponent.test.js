import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import CardComponent from './CardComponent';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factor function to crate ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */

let samplePayload = [
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18,
                35,
                10749
            ],
            "id": 18400,
            "original_language": "fr",
            "original_title": "Hello Goodbye",
            "overview": "French film icons Gérard Depardieu and Fanny Ardant star in this romantic comedy about a Parisian couple in their fifties who share a comfortable life, a beautiful home, a posh country club and a midlife crisis. Following a dream vacation to Israel where Alain (Depardieu) explores his Jewish roots, Gisèle (Ardant) insists they change their life and move to Tel Aviv. While Gisèle, a Jewish convert, finds her new life inspiring; Alain fights to embrace Hebrew, Jewish tradition and a new circumcision. Will Alain and Gisèle learn whether Shalom represents Hello or Goodbye?",
            "popularity": 1.407,
            "poster_path": "/jQi1Qwxi0HLOc7I1aGCjsLRStyY.jpg",
            "release_date": "2008-11-26",
            "title": "Hello Goodbye",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 11
        }
    ];

const setup = () => shallow(<CardComponent moviesData={samplePayload} />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders card', () => {
    const wrapper = setup();
    const formComponent = findByTestAttr(wrapper, "render-card");
    expect(formComponent.length).toBe(1);
});