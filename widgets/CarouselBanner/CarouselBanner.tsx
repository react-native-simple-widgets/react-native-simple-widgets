import * as React from "react";
import Carousel, { LeftArrow, RightArrow } from "react-native-simple-elements/components/Carousel";
import Image from "react-native-simple-elements/components/Image/Image";
import RatioBox from "../RatioBox";

const defaultRenderItem = (props) => {

    const { index } = props;

    return (
        <Image
            key={index}
            source={{ uri: "https://via.placeholder.com/350x150" }}
            style={{
                width: 250,
                height: 150,
            }}
        />
    );
};

type Props = {
    containerRatio?: string,
    sliderWidth: number,
    itemWidth?: number,
    data: Record<string, any>[],
    renderItem?: (data) => React.ReactElement,
}

const defaultProps = {
    containerRatio: "16x9",
    data: [],
};

const CarouselBanner = (props: Props) => {

    const {
        containerRatio,
        sliderWidth,
        itemWidth,
        data,
    } = props;

    const _imageCarouselRef = React.createRef<Carousel>();
    const [ isShowCarousel, setIsShowCarousel ] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsShowCarousel(true);
        }, 150);
    }, []);

    const renderItem = props.renderItem ?? defaultRenderItem;

    return (
        <RatioBox
            ratio={containerRatio}
        >
            {isShowCarousel &&
                <>
                    <LeftArrow
                        onPress={e => _imageCarouselRef.current?.snapToPrev()}
                    />
                    <Carousel
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth ?? sliderWidth}
                        data={data}
                        renderItem={({ item, index }) => renderItem({ item, index })}
                        ref={_imageCarouselRef}
                        loop={true}
                    />
                    <RightArrow
                        onPress={e => _imageCarouselRef.current?.snapToNext()}
                    />
                </>
            }
        </RatioBox>
    );
};

CarouselBanner.defaultProps = defaultProps;

export default CarouselBanner;
