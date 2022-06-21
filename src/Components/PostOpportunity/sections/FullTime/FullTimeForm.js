import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form ,Card } from 'react-bootstrap';
import styles from '../../../../CSS/CodingCompForm.module.css';
//regex for url validation
var pattern = new RegExp(
  "^(https?:\\/\\/)?" + // protocol
  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
);  
class FullTimeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobId: '',
      jobURL: '',
      title: '',
      company: '',
      image: '',
      jobDescription: '',
      location: '',
      eligibility: '',
      deadline: '',
      FieldEmptyError: "",
      URLError: "",
    };

    this.data = {};
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };
  validate=()=>{
    let FieldEmptyError = "";
    let URLError = "";
    
    if ((!this.state.title) || (!this.state.jobDescription) || (!this.state.jobId) || (!this.state.eligibility) || (!this.state.location)){
      FieldEmptyError = "cannot be blank";
    }
    if (!pattern.test(this.state.jobURL) || !pattern.test(this.state.image)) {
      URLError = "Invalid URL";
    }
    if (FieldEmptyError || URLError) {
      this.setState({ FieldEmptyError, URLError});
      return false;
    }
      return true;
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('From handleSubmit', this.state.jobId);
    axios
      .post(
        'https://opportunitycalendar.herokuapp.com/opportunities/job/create/',
        {
          jobId: this.state.jobId,
          jobURL: this.state.jobURL,
          title: this.state.title,
          company: this.state.company,
          image: this.state.image,
          jobDescription: this.state.jobDescription,
          location: this.state.location,
          eligibility: this.state.eligibility,
          deadline: this.state.deadline,
        }
      )
      .then(
        (res) => {
          const data = res.data;
          console.log(data);
          this.setState({ data });
        },
        (error) => {
          console.log(error);
        }
      );
    this.setState({
      jobId: '',
      jobURL: '',
      title: '',
      company: '',
      image: '',
      jobDescription: '',
      location: '',
      eligibility: '',
      deadline: '',
    });
  };

  render() {
    const {
      jobId,
      jobURL,
      title,
      company,
      image,
      jobDescription,
      location,
      eligibility,
      deadline,
    } = this.state;

    return (
      <div style={{ marginBottom: '80px' }}>
        <Form onSubmit={this.handleSubmit}>
        <Card className={styles.Card}>
  <Card.Header as="h5">
          <Form.Label className={styles.CardTitle}>
            Post a Job Opportunity
          </Form.Label>
          </Card.Header>
          
  <Card.Body>
    

          <Form.Group>
            <Form.Control
            
              className={styles.Input}
              type="text"
              name="company"
              value={company}
              placeholder="Company Name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <div style={{ fontSize: 12, color: "red", marginLeft:'40px' }}>
            {this.state.FieldEmptyError}
          </div>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="image"
              value={image}
              placeholder="Company Logo URL"
              onChange={this.handleChange}
              style={{  marginTop: '30px' }}
            />
          </Form.Group>
          <div style={{ fontSize: 12, color: "red", marginLeft:'40px' }}>
            {this.state.URLError}
          </div>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="title"
              value={title}
              placeholder="Opportunity Title"
              onChange={this.handleChange}
              style={{ marginTop: '30px' }}
            />
          </Form.Group>
          <div style={{ fontSize: 12, color: "red", marginLeft:'40px' }}>
            {this.state.FieldEmptyError}
          </div>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="jobId"
              value={jobId}
              placeholder="Job ID"
              onChange={this.handleChange}
              style={{ marginTop: '30px' }}
            />
          </Form.Group>
          <div style={{ fontSize: 12, color: "red", marginLeft:'40px' }}>
            {this.state.FieldEmptyError}
          </div>

          <Form.Group>
            <Form.Control
              as="textarea"
              rows={4}
              style={{ marginTop: '35px'}}
              name="jobDescription"
              value={jobDescription}
              placeholder="Short Description"
              onChange={this.handleChange}
            />
          </Form.Group>
          <div style={{ fontSize: 12, color: "red", marginLeft:'40px' }}>
            {this.state.FieldEmptyError}
          </div>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="deadline"
              value={deadline}
              placeholder="Last Date to Apply"
              style={{ marginTop: '30px' }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="location"
              value={location}
              placeholder="Location"
              style={{  marginTop: '30px' }}
              onChange={this.handleChange}
            />
          </Form.Group>
          <div style={{ fontSize: 12, color: "red", marginLeft:'40px' }}>
            {this.state.FieldEmptyError}
          </div>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="eligibility"
              value={eligibility}
              placeholder="Eligibility"
              style={{  marginTop: '30px' }}
              onChange={this.handleChange}
            />
          </Form.Group>
          <div style={{ fontSize: 12, color: "red", marginLeft:'40px' }}>
            {this.state.FieldEmptyError}
          </div>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="jobURL"
              value={jobURL}
              placeholder="Website"
              style={{ marginTop: '30px' }}
              onChange={this.handleChange}
            />
          </Form.Group>
          <div style={{ fontSize: 12, color: "red", marginLeft:'40px' }}>
            {this.state.URLError}
          </div>

          <Form.Group>
            <Button className={styles.Button} type="submit">
              Submit
            </Button>
          </Form.Group>
          </Card.Body>
</Card>
         
        </Form>
      </div>
    );
  }
}

export default FullTimeForm;
