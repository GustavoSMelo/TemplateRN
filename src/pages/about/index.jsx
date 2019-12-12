import React from "react";
import { Container, Text } from "./styled";
import { Linking } from "react-native";
class About extends React.Component {
    render = () => (
        <Container>
            <Text
                onPress={() =>
                    Linking.openURL("https://github.com/GustavoSMelo")
                }
            >
                Template made by:
                {"\n"}Gustavo Santos Melo
            </Text>
        </Container>
    );
}

export default About;
