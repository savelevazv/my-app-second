import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Categories } from './Components/Categories'
import { CenteredLayout } from './Components/CenteredLayout';
import { CenteredLayoutBody } from './Components/CenteredLayoutBody';
import { Header } from './Components/Header/Header';
import { NewProducts } from './Components/NewProducts';
import { Promotions } from './Components/Promotions';
import { Info } from './Components/Info'
import { Offer } from './Components/Offer/Offer'
import { Subscription } from './Components/Offer/Subscription';
import { DownloadTheApp } from './Components/Offer/DownloadTheApp';
import { Popular } from './Components/Popular/Popular';
import { Footer } from './Components/Footer';
import { Arrow } from "./Components/Popular/Arrow"
import { Divider } from './Components/Divider';
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

const Global = createGlobalStyle`
* {
  color: #000000;
  box-sizing: border-box;
  margin: 0;

  font-family: 'Inter';
  font-style: normal;
}
`

function App() {
  return (
    <>
    <Global/>
      <CenteredLayout>
        <Header />
        <CenteredLayoutBody>
          <NewProducts
            mainPlacement={{
              title: 'Timberland.',
              mainDescription: 'Поступление новой коллекции',
              description: 'Успейте приобрести по выгодным условиям',

            }}
            secondaryPlacement={{
              title: 'Puma Exclusive'
            }}
            secondarySecondPlacement={{
              title: 'Nike Exclusive'
            }}
          />
          <Promotions />
          <Categories />
          <Divider />
          <Info />
          <Divider />
          <Offer>
            <Subscription />
            <DownloadTheApp />
          </Offer>
        </CenteredLayoutBody>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Arrow
            direction={'left'}
          />
          <Popular />
          <Arrow
            direction={'right'}
          />
        </div>
      </CenteredLayout>
      <Divider />
      <CenteredLayout>
        <CenteredLayoutBody>
          <Footer
            firstBlock={{
              title: 'Помощь'
            }}
            secondBlock={{
              title: 'Помощь'
            }}
            thirdBlock={{
              title: 'Помощь'
            }}
          />
        </CenteredLayoutBody>
      </CenteredLayout>
    </>
  );
}

export default App;
