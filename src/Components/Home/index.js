import React from 'react';
import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn }  from './style.js'

const Home = () => {
    return (
          <HomeSection>
            <div class="container">
              <HomeInformation>
                  <HomeTitle>Naeem Khaled</HomeTitle>
                  <HomeInfo>Creative Director</HomeInfo>
                  <HomeDesc>
                      Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                  </HomeDesc>
                  <HomeBtn>Let's Begin</HomeBtn>
              </HomeInformation>
            </div>
        </HomeSection>
  )  
}


export default Home;
