import {
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const InputComponent = ({ movieTitle, handleInputChange, handleSubmit }) => {
    return (
        <Form data-test="input-render"  onSubmit={handleSubmit}>
            <FormGroup row>
                <Label htmlFor="movieTitle" md={2}>Title of Movie</Label>
                <Col md={10}>
                    <Input type="text" id="movieTitle" name="movieTitle"
                        placeholder="Movie Title"
                        value={movieTitle}
                        onChange={handleInputChange} />
                </Col>
            </FormGroup>
        </Form>
    )
};

export default InputComponent;