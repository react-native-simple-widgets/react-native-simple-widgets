import * as React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { leftnavComponents } from "widgets/leftnavComponents";
import { Section, Accordion, Item, Icon } from "react-native-simple-elements/components/List";
import { useRouter } from "next/router";

const Container = styled.div<SpaceProps>({
    position: "absolute",
    width: "240px",
    zIndex: 2,
}, space);

const LeftNav = (props) => {

    const router = useRouter();

    const [ expandedId, setExpandedId ] = React.useState("");
    // const [ activeItemId, setActiveItemId ] = React.useState("");

    const handlePress = (accordionIndex) => {
        setExpandedId(expandedId === accordionIndex ? "" : accordionIndex);
    };

    const handleItemPress = (item, itemIndex?) => {
        // setActiveItemId(activeItemId === itemIndex ? "" : itemIndex);
        router.push(item.pathname);
    };

    const renderItem = (item, iIndex, aIndex, sIndex) => {
        const { title } = item;
        const itemIndex = `${sIndex}_${aIndex}_${iIndex}`;

        return (
            <Item title={title} key={itemIndex} onPress={() => handleItemPress(item, itemIndex)}/>
        );
    };

    const renderAccordion = (accordion, aIndex, sIndex) => {

        const { title, icon, items } = accordion;
        const accordionIndex = `${sIndex}_${aIndex}`;

        return (
            <Accordion
                key={accordionIndex}
                title={title}
                left={props =>
                    <Icon {...props} icon={icon} />
                }
                expanded={expandedId === accordionIndex}
                onPress={() => handlePress(accordionIndex)}
            >
                {Array.isArray(items) && items.length > 0 &&
                    items
                        .map((item, iIndex) => renderItem(item, iIndex, aIndex, sIndex))
                }
            </Accordion>
        );
    };

    const renderSection = (section, sIndex) => {
        const { accordions } = section;

        return (
            <Section title="Accordions" key={sIndex}>
                {Array.isArray(accordions) && accordions.length > 0 &&
                    accordions
                        .map((accordion, aIndex) => renderAccordion(accordion, aIndex, sIndex))
                }
            </Section>
        );
    };

    return (
        <Container paddingTop={[ "0", "56px" ]}>
            {Array.isArray(leftnavComponents) && leftnavComponents.length > 0 &&
                leftnavComponents
                    .map((section, sIndex) => renderSection(section, sIndex))
            }
        </Container>
    );
};

LeftNav.propTypes = {

};

export default LeftNav;
