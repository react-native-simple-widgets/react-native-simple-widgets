import * as React from 'react';
import { Image, Dimensions, View, StyleSheet } from "react-native";
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Carousel, { LeftArrow as CarouselLeftArrow, RightArrow as CarouselRightArrow } from 'react-native-simple-elements/components/Carousel';

storiesOf('Carousel', module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        const _imageCarouselRef = React.createRef<Carousel>();

        const { width: viewportWidth } = Dimensions.get('window');
        const sliderWidth = viewportWidth - 32;

        // const title = text("title", "Text");
        return (
            <View
                style={{
                    ...StyleSheet.absoluteFillObject,
                }}
            >
                <CarouselLeftArrow
                    onPress={e => _imageCarouselRef.current?.snapToPrev()}
                />
                <Carousel
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth}
                    data={[{}, {}, {}]}
                    renderItem={({ item, index }) => {
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
                    }}
                    ref={_imageCarouselRef}
                    loop={true}
                />
                <CarouselRightArrow
                    onPress={e => _imageCarouselRef.current?.snapToNext()}
                />
            </View>
        )
    })
