import React from 'react';
import './External.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

class FooterComp extends React.Component {
  render() {
    return (
      <div>
        <MDBFooter bgColor='light' style={{ background: 'linear-gradient(to right, #00093c, #2d0b00)', color: '#ffffff' }} className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span style={{ color: '#ffffff' }}>Get connected with us on social networks:</span>
            </div>

            <div className='color'>
              <a href='https://www.facebook.com/' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" className='icon-white'/>
              </a>
              <a href='https://twitter.com/i/flow/login' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" className='icon-white'/>
              </a>
              <a href='https://www.instagram.com/' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" className='icon-white'/>
              </a>
              <a href='https://in.linkedin.com/' className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" className='icon-white'/>
              </a>
            </div>
          </section>

          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffffff' }}>
                    <MDBIcon icon="gem" className="me-3" />
                    Net Technologies
                  </h6>
                  <p style={{ color: '#ffffff' }}>
                    Mastering Tech, Crafting Future: Net Technologies Way.
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffffff' }}>Courses</h6>
                  <p style={{ color: '#ffffff' }}>
                    <a href='#!' className='text-reset'>
                      Python
                    </a>
                  </p>
                  <p style={{ color: '#ffffff' }}>
                    <a href='#!' className='text-reset'>
                      React
                    </a>
                  </p>
                  <p style={{ color: '#ffffff' }}>
                    <a href='#!' className='text-reset'>
                      C#
                    </a>
                  </p>
                  <p style={{ color: '#ffffff' }}>
                    <a href='#!' className='text-reset'>
                      Angular
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffffff' }}>Useful links</h6>
                  <p style={{ color: '#ffffff' }}>
                    <a href='/home' className='text-reset'>
                      Home
                    </a>
                  </p>
                  <p style={{ color: '#ffffff' }}>
                    <a href='#!' className='text-reset'>
                      About us
                    </a>
                  </p>
                  <p style={{ color: '#ffffff' }}>
                    <a href='#!' className='text-reset'>
                      Contact us
                    </a>
                  </p>
                  <p style={{ color: '#ffffff' }}>
                    <a href='#!' className='text-reset'>
                      FAQ
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffffff' }}>Contact</h6>
                  <p style={{ color: '#ffffff' }}>
                    <MDBIcon icon="home" className="me-2" />
                    T.Nagar, Chennai, Tamilnadu
                  </p>
                  <p style={{ color: '#ffffff' }}>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                  </p>
                  <p style={{ color: '#ffffff' }}>
                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' ,color:'#ffffff'}}>
            © 2021 Copyright:    
            <a className='text-reset fw-bold' href='https://http://localhost:3000/' style={{ color: '#ffffff' }}>
              NetTechnologies
            </a>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default FooterComp;
