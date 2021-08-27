import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <div>
      <Container>
        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
          leftBtnText="Custom order"
          rightBtnText="Existing invertory"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="https://www.tesla.com/sites/default/files/modelsx-new/social/model-y-social.png"
          leftBtnText="Custom order"
          rightBtnText="Existing invertory"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/197be9d8-7cf6-49b8-a711-e56237fa874a/bvlatuR/std/1200x628/rhd-model-3-social"
          leftBtnText="Custom order"
          rightBtnText="Existing invertory"
        />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/4b516502-71a4-476f-acd4-0e326c785657/bvlatuR/std/2880x1800/MX-Exterior-Hero-Desktop"
          leftBtnText="Custom order"
          rightBtnText="Existing invertory"
        />
        <Section
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImg="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-solar-1517595375.jpg?crop=1xw:0.9569377990430622xh;center,top&resize=480:*"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Solar Roof"
          description="Produce Clean Emergy From Your Roof"
          backgroundImg="https://www.tesla.com/sites/default/files/solarroof/v3/design/solar-roof_design_D.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Accessories"
          description=""
          backgroundImg="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1.jpg"
          leftBtnText="Shop now"
        />
      </Container>
    </div>
  );
}
export default Home;
const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
