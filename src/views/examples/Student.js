/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input, FormText
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class Student extends React.Component {

  state = {
    isStudentModalOpen: false
  };

  toggleStudentModal = () => {
    this.setState({ isStudentModalOpen: !this.state.isStudentModalOpen })
  }

  render() {
    const closeBtn = <button className="close" onClick={this.toggleStudentModal}>&times;</button>;
    
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <div className="clearfix" style={{ padding: '.5rem' }}>
                    <h3 style={{ marginLeft: "0" }} className="mb-0 float-left">Student List</h3>
                    <button className="btn btn-primary float-right" onClick={this.toggleStudentModal}>Add Student</button>
                  </div>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Full Name</th>
                      <th scope="col">Student ID</th>
                      <th scope="col">Status</th>
                      <th scope="col">Subjects</th>
                      <th scope="col">Attendance</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/team-1-800x800.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Jahidul Islam
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>202011223340</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                            Inactive
                        </Badge>
                      </td>
                      <td>Computer Science</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <Progress
                              max="100"
                              value="60"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/team-2-800x800.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Shariful Islam
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>202011223341</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-success" />
                          Active
                        </Badge>
                      </td>
                      <td>Electrical and Electronic Engineering</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">100%</span>
                          <div>
                            <Progress
                              max="100"
                              value="100"
                              barClassName="bg-success"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/sketch.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Anik Islam
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>202011223342</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          Blocked
                        </Badge>
                      </td>
                      <td>Business Administration</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">72%</span>
                          <div>
                            <Progress
                              max="100"
                              value="72"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/team-3-800x800.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Radin Islam
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>202011223343</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-info" />
                              Regular
                        </Badge>
                      </td>
                      <td>Mathematics</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">90%</span>
                          <div>
                            <Progress
                              max="100"
                              value="90"
                              barClassName="bg-info"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/team-4-800x800.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Atiqul Islam
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>202011223344</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          Active
                        </Badge>
                      </td>
                      <td>Pharmacy</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">100%</span>
                          <div>
                            <Progress
                              max="100"
                              value="100"
                              barClassName="bg-success"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
              {/* modal */}
              <div>
                <Modal isOpen={this.state.isStudentModalOpen} toggle={this.toggleStudentModal}>
                  <ModalHeader toggle={this.toggleStudentModal} close={closeBtn}>New Student</ModalHeader>
                  <ModalBody>


                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail">Full name</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Student Id</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">Status</Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Regular</option>
                          <option>Blocked</option>
                          <option>Inactive</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">Department</Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Computer Science and Engineering</option>
                          <option>Blocked</option>
                          <option>Inactive</option>
                        </Input>
                      </FormGroup>
                    </Form>


                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleStudentModal}>Add Student</Button>{' '}
                    <Button color="secondary" onClick={this.toggleStudentModal}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
              {/* end modal */}
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Student;
