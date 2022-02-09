import './Management.scss';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import CommentManagement from './CommentManagement';
import UserManagement from './UserManagement';
import BoardManagement from './BoardManagement';

function ManagementPage() {
    return (
      <div className="ManagementPage">

            <div className="download">
              <p>
                관리자 메뉴얼 다운로드
              </p>
            </div>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col lg={2}>
                  <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                      <Nav.Link eventKey="first"><i className="far fa-envelope fa-2x"></i> &nbsp;사용자 관리</Nav.Link>
                    </Nav.Item>
                    <Nav.Item id="nav-link">
                      <Nav.Link eventKey="second"><i className="fas fa-home fa-2x"></i> 댓글관리</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="third"><i className="fas fa-file-contract fa-2x"></i>&nbsp;&nbsp;게시글 관리</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth"><i className="fas fa-chart-bar fa-2x"></i> &nbsp;광고 대시보드</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col lg={10}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">

                      <UserManagement />

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                      <CommentManagement />

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

                      <BoardManagement />

                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </div>

            
    );
  }
  
  export default ManagementPage;
  