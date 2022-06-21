import React from 'react';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Logo from '../../Assets/GCI.png';
import styles from '../../CSS/Footer.module.css';
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';

function Footer() {
  return (
    <Jumbotron className={styles.Jumbotron}>
      <Container className={styles.ContainerFooter}>
        <Row className={styles.Top1}>
          {/* <Col className={styles.ImgColumn}>
            <Image className={styles.Logo} src={Logo} alt="Logo" />
          </Col> */}
          <Col className={styles.Column1}>
            <h5> Links </h5>
            <div className={styles.Rectangle} style={{ width: '45px' }}></div>
            <p> Terms and Condition </p>
            <p> Privacy Policy </p>
          </Col>
          {/* <hr className={styles.line2} />
          <Col className={styles.Column2}>
            <h5> Products </h5>
            <div
              className={`${styles.Rectangle} ${styles.Rectangle3}`}
              style={{ width: '80px' }}
            ></div>
            <p> CodeMaps </p>
            <p> Opportuntiy Calendar </p>
          </Col> */}
          <hr className={styles.line2} />
          <Col className={styles.Column3}>
            <h5> Contact Us </h5>
            <div className={styles.Rectangle} style={{ width: '100px' }}></div>
            <Row>
              <Col md={10}>
                <p>
                  {' '}
                  <FaPhoneAlt /> (+91) - XXXX-XXXXX{' '}
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                <p>
                  {' '}
                  <GrMail /> uConnect@gmail.com{' '}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row className = {styles.Top2}>
                <Col>
                    <Image 
                        className = {styles.Logo}
                        src = {Logo}
                        alt = "Logo"
                    />
                </Col>
            </Row> */}
        <Row className={styles.Top2}>
          <Col>
            <h5> Links </h5>
            <div className={styles.Rectangle} style={{ width: '45px' }}></div>
            <p> Terms and Condition </p>
            <p> Privacy Policy </p>
          </Col>
          {/* <hr className = {styles.line2}/> */}
          <Col style={{ textAlign: 'end' }}>
            <h5> Products </h5>
            <div className={styles.Rectangle2} style={{ width: '80px' }}></div>
            <p> CodeMaps </p>
            <p> Opportuntiy Calendar </p>
          </Col>
        </Row>
        {/* <hr className = {styles.line1}/> */}
        <Row className={styles.Top2}>
          <Col className={styles.Top3}>
            <h5> Contact Us </h5>
            <div className={styles.RectangleContainer}>
              <div
                className={styles.Rectangle3}
                style={{ width: '100px' }}
              ></div>
            </div>
            <Row className={styles.ContactRow}>
              <Col>
                <p>
                  {' '}
                  <FaPhoneAlt /> (+91) - XXXXX-XXXXX{' '}
                </p>
              </Col>
              <Col>
                <p>
                  {' '}
                  <GrMail /> uConnect@gmail.com{' '}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className={styles.line1} />
        <Row className={styles.Bottom1}>
          <Col>
            <p>
              {' '}
              <BiCopyright /> 2020 uConnect | All rights reserved.
            </p>
          </Col>
          <Col className={styles.SocialLinks}>
            <a
              data-testid="linkedin"
              href="https://www.linkedin.com/company/acropolis-group-of-institutions/"
              className={styles.Shift}
            >
              {' '}
              <FaLinkedinIn />{' '}
            </a>
            <a
              data-testid="instagram"
              href="https://www.instagram.com/"
              className={styles.Shift}
            >
              {' '}
              <FaInstagram />{' '}
            </a>
            <a
              data-testid="twitter"
              href="https://twitter.com/"
              className={styles.Shift}
            >
              {' '}
              <FaTwitter />{' '}
            </a>
          </Col>
        </Row>
        <Row className={styles.Bottom2}>
          <Col>
            <p data-testid="copyright" className={styles.Para}>
              {' '}
              <BiCopyright /> 2020 uConnect | All rights reserved.
            </p>
          </Col>
        </Row>
        <Row className={styles.Bottom2}>
          <Col className={styles.SocialLinks}>
            <a
              href="https://www.linkedin.com/company/acropolis-group-of-institutions/"
              className={styles.Shift}
            >
              {' '}
              <FaLinkedinIn />{' '}
            </a>
            <a
              href="https://www.instagram.com/"
              className={styles.Shift}
            >
              {' '}
              <FaInstagram />{' '}
            </a>
            <a href="https://twitter.com/" className={styles.Shift}>
              {' '}
              <FaTwitter />{' '}
            </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
