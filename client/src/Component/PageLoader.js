import React from 'react';
import { Spin,Row,Col } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const PageLoader = ({text ,isLoading}) => {
  return isLoading ? (
      <div
          style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
          }}
      >
          <Row>
              <Spin
                  size="large"
                  indicator={
                      <LoadingOutlined
                          style={{
                              fontSize: 24,
                          }}
                          spin
                      />
                  }
              />
          </Row>
          {text ? <Row> {text}</Row> : ""}
      </div>
  ) : null;
};
export default PageLoader;
