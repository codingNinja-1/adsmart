import { useState } from 'react';
import { SliderWrapper, SliderContainer, SlidingElement } from "../styles/campaign";
import { Campaign1, Campaign2, Budget } from '../components/campaign';
const Homepage = () => {
    const [scrollSize, setScrollSize] = useState(0);
    const limit = 4;
    const NextSlide = () => {
        console.log(scrollSize);
        if (scrollSize !== limit) setScrollSize(scrollSize + 1);
    };
    const PrevSlide = () => {
        if (scrollSize > 0) setScrollSize(scrollSize - 1);
    };
    const props = {
        NextSlide,
        PrevSlide
    };
    return (
        <SliderWrapper>
            <SliderContainer style={{ transform: `translateX(calc(-${scrollSize * 100}%))` }}>

                <SlidingElement>
                    <Campaign1 {...props} />
                </SlidingElement>
                <SlidingElement>
                    <Campaign2 {...props} />
                </SlidingElement>
                <SlidingElement>
                    <Budget {...props} />
                </SlidingElement>

            </SliderContainer>
        </SliderWrapper>

    );
};

export default Homepage;