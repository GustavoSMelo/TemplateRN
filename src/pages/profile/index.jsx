import React from "react";
import { Container, Text, Img } from "./styled";
import UserIcon from "../../../assets/user.png";

class Profile extends React.Component {
    render = () => (
        <Container>
            <Img source={UserIcon} />
            <Text>Name: {this.props.navigation.state.params.name}</Text>
            <Text>Mail: {this.props.navigation.state.params.email}</Text>
        </Container>
    );
}

export default Profile;
