import React from "react";
import {
  Wrapper,
  WrapperContent,
  WrapperContentTitle,
  WrapperContentJoined,
  CashBack,
  Works,
  WorksSteps,
  WorksStep,
  Plans,
  Plan,
  PlanBlock,
  PlanBlockAccess,
  Info,
  Members,
  Footer
} from './assets/style/main'
import './assets/style/main.css'
import HeaderComponent from "./components/Header";
import GoldMoney from './assets/Img/GoldMoney.png'
import Step1 from './assets/Img/Step1.png'
import Step2 from './assets/Img/Step2.png'
import Step3 from './assets/Img/Step3.png'
import GoldBank from './assets/Img/GoldBank.png'
import Logo from './assets/Img/Logo.svg'
import GoldText from './assets/Img/GoldText.png'

function App() {
  return (
    <Wrapper>
      <WrapperContent>
        <HeaderComponent />
        <WrapperContentTitle><span>Douge</span>Make<br/>Bread</WrapperContentTitle>
        <WrapperContentJoined>
          <p>
            Join the 100,000+ people earning daily.
            <br/>
            <span>
              Get the app and get paid.
            </span>
          </p>
          <div>
            <button>
              App store 5 ★
            </button>
            <button>
              Play store 5 ★
            </button>
          </div>
        </WrapperContentJoined>

        <CashBack>
          <img src={GoldMoney} width={350}></img>
          <h1>
            Earn Next Day
            <br/>
            <span>
              Cash Back On Any Card
            </span>
          </h1>
          <img src={GoldMoney} width={350}></img>
        </CashBack>
        <h3>
          No receipts needed. No waiting around.
          <br/>
          No limits on how much you can earn.
        </h3>
        <Works>
          <h1>Here's How<br/>It Works</h1>
          <WorksSteps>
            <WorksStep>
                <main>
                  <h4>Step 01</h4>
                  <h2>Download The App</h2>
                  <p>We work with our oartnes to help you make money.</p>
                </main>
                <div>
                  <img src={Step1} />
                </div>
            </WorksStep>
            <WorksStep>
                <main>
                  <h4>Step 02</h4>
                  <h2>Start Making Money</h2>
                  <p>Link your existing debit card or bank with Bridge and earn on every purchase.</p>
                </main>
                <div>
                  <img src={GoldBank} width={200} />
                  <img src={Step3} />
                  <img src={GoldBank} width={250} />
                </div>
            </WorksStep>
            <WorksStep>
                <main>
                  <h4>Step 03</h4>
                  <h2>Cash Out Instantly</h2>
                  <p>Deposit your earnings right into your bank account.</p>
                </main>
                <div>
                  <img src={Step2} />
                </div>
            </WorksStep>
          </WorksSteps>
        </Works>
        <img src={Logo} width={1100} />
        <img src={GoldText} />
        <h3>
          Link your existing bank card or get a Bridge card. Earn either way.
        </h3>
        <Plans>
          <Plan>
            <PlanBlock>
              <h1>
                Earn
                <br/>
                <span>
                  (Link your existing cards)
                </span>
              </h1>
              <h2>Free</h2>
            </PlanBlock>
            <PlanBlock>
              <p>Earn on Every Card Purchase</p>
              <a style={
                {
                  'width': 'fit-content'
                }
              }>
              2 Coins
              </a>
            </PlanBlock>
            <PlanBlock>
              <p>Earn with Surveys</p>
              <PlanBlockAccess>
              ✔
              </PlanBlockAccess>
            </PlanBlock>
            <PlanBlock>
              <p>Earn on Every Referral</p>
              <PlanBlockAccess>
              ✔
              </PlanBlockAccess>
            </PlanBlock>
            <PlanBlock>
              <p>Chances to Double your Deposit</p>
              <PlanBlockAccess notAccess>
                
              </PlanBlockAccess>
            </PlanBlock>
            <PlanBlock>
              <p>Earn on ATM Withdrawals</p>
              <PlanBlockAccess notAccess>

              </PlanBlockAccess>
            </PlanBlock>
            <PlanBlock>
              <p>Cash Out as Soon as you Earn</p>
              <a style={
                {
                  'width': 'fit-content'
                }
              }>
                400 Coins
              </a>
            </PlanBlock>
            <PlanBlock>
              <a href="">
                Select Earn Plan 🡭
              </a>
            </PlanBlock>
          </Plan>
          <Plan money>
            <PlanBlock>
              <h1>
                Money
                <br/>
                <span>
                  (Get a bridge card)
                </span>
              </h1>
              <h2>$4/mo</h2>
            </PlanBlock>
            <PlanBlock>
              <p>Earn on Every Card Purchase</p>
              <a style={
                {
                  'width': 'fit-content'
                }
              }>
              8 Coins
              </a>
            </PlanBlock>
            <PlanBlock>
              <p>Earn with Surveys</p>
              <PlanBlockAccess>
              ✔
              </PlanBlockAccess>
            </PlanBlock>
            <PlanBlock>
              <p>Earn on Every Referral</p>
              <PlanBlockAccess>
              ✔
              </PlanBlockAccess>
            </PlanBlock>
            <PlanBlock>
              <p>Chances to Double your Deposit</p>
              <PlanBlockAccess>
              ✔
              </PlanBlockAccess>
            </PlanBlock>
            <PlanBlock>
              <p>Earn on ATM Withdrawals</p>
              <PlanBlockAccess>
              ✔
              </PlanBlockAccess>
            </PlanBlock>
            <PlanBlock>
              <p>Cash Out as Soon as you Earn</p>
              <a style={
                {
                  'width': 'fit-content'
                }
              }>
                200 Coins
              </a>
            </PlanBlock>
            <PlanBlock>
              <a href="">
                Select Money Plan 🡭
              </a>
            </PlanBlock>
          </Plan>
        </Plans>
        <h3>
          Members Have Already Earned Over
        </h3>
        <Members>
          24,999,920
          <br/>
          <span>
            Coins
          </span>
        </Members>
        <Info>
            <div>
              <p>Bridge is a financial technology company and is not a bank. Banking services provided by Blue Ridge Bank N.A., Member FDIC. The Bridge Money Visa® Debit Card is issued by Blue Ridge Bank N.A. pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted. Apple, the Apple logo, and iPhone are trademarks of Apple Inc. App Store is a service mark of Apple Inc. Google, Android and Google Play are trademarks of Google Inc.</p>
            </div>
            <div>
              <button>TikTok</button>
              <button>Twitter</button>
              <button>Instagram</button>
              <button>LinkedIn</button>
            </div>
        </Info>
        <img src={Logo} width={1100} />
        <Footer>
          <h3>© 2022 Bridge Money Inc.</h3>
          <div>
            <a href="">Sitemap</a>
            <a href="">Cardholder Agreement</a>
            <a href="">Deposit Agreement</a>
            <a href="">Electronic Disclosure</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
          </div>
        </Footer>
      </WrapperContent>
    </Wrapper>
  );
}

export default App;
