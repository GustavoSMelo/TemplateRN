import React from "react";
import { Container, InputStyle, Form, Btn, TextBtn } from "./styled";

class PageRegister extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: ""
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
    }

    handleChangeName = async event => await this.setState({ name: event });

    handleChangeMail = async event => await this.setState({ email: event });

    showParams = () => {
        if (this.state.name === "" || this.state.email === "") {
            alert(
                "Name or email is a field null, pls insert your email or your name to progress! "
            );
        } else {
            this.props.navigation.navigate("PageData", {
                email: this.state.email,
                name: this.state.name
            });
        }
    };

    render = () => (
        <Container>
            <Form>
                <InputStyle
                    placeholder="Insert you nickname here! "
                    onChangeText={event => this.handleChangeName(event)}
                ></InputStyle>

                <InputStyle
                    placeholder="Insert you email here! "
                    onChangeText={event => this.handleChangeMail(event)}
                ></InputStyle>

                <Btn onPress={this.showParams}>
                    <TextBtn>Register</TextBtn>
                </Btn>
            </Form>
        </Container>
    );
}

export default PageRegister;
