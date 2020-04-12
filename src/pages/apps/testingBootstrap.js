import React, { useState } from "react"
import { Button, Toast, Col, Row } from "react-bootstrap"

function Example() {
  const [show, setShow] = useState(false)

  return (
    <Row>
      <Col xs={6}>
        <Toast show={show} delay={3500} autohide onClose={() => setShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">Invalid Row Value</strong>
          </Toast.Header>
          <Toast.Body>
            <b>Rows</b> must be a value between 1 and 10,000 (inclusive)!
          </Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>
          Toggle Toast <strong>with</strong> Animation
        </Button>
      </Col>
    </Row>
  )
}

export default Example
