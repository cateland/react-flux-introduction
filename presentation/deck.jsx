import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import Button from "./Button"

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  reactLogo: require("./react-logo.png"),
  angularLogo: require("./angular-logo.png"),
  santeclairBackground: require("./santeclair-background.png"),
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide", "spin"]} transitionDuration={800}>
        <Slide transition={["slide"]} bgColor="secondary">
          <Layout>
            <Fill>
              <Image src={images.reactLogo.replace('/', '')} margin="0px auto"  height="300px"/>
            </Fill>
            <Fill>
              <Heading size={1} margin="40px auto" fit caps textColor="primary">
                React
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide", "spin"]} bgImage={images.santeclairBackground.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit caps margin="-20px 0px">
              Axel Cateland
            </Heading>
            <Heading size={1} fit caps textColor="primary">
              Front-end developper
            </Heading>
            <Appear>
              <Heading size={1} fit caps textColor="santeclair">
                Santéclair
              </Heading>
            </Appear>
              <Appear>
              <Text textColor="tertiary">Non je ne m&apos;occupe pas du site web</Text>
              </Appear>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="tertiary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading fit caps textColor="secondary">
            Qu&apos;est ce que React ?
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"/>
            <Text textColor="secondary">(5 minutes)</Text>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="tertiary">
          <Heading textColor="secondary" fit>React n&apos;est pas angular !</Heading>
          <Layout>
            <Fill>
              <Image src={images.reactLogo.replace('/', '')} margin="0px auto"  height="200px"/>
            </Fill>
            <Fill>
              <Heading margin="35px" textColor="secondary">&ne;</Heading>
            </Fill>
            <Fill>
              <Image src={images.angularLogo.replace('/', '')} margin="25px auto"  height="150px"/>
            </Fill>
          </Layout>
          <List>
            <ListItem><Appear fid="1">n&apos;est pas un framework</Appear></ListItem>
            <ListItem><Appear fid="2">ne fera pas de requêtes ajax</Appear></ListItem>
            <ListItem><Appear fid="3">est une librairie pour manager des composants</Appear></ListItem>
            <ListItem textColor="primary"><Appear fid="4">compatible IE8</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="secondary">
          <Heading textColor="primary" caps fit>Anatomie d&apos;un composant React</Heading>
          <Layout>
            <Fill>
            <CodePane
            lang="javascript"
            source={require("raw!./button.example")}
            margin="20px auto"/>
            </Fill>
            <Fill>
              <Button primary style={{marginTop: '1.5em'}}>Button !</Button>
            </Fill>
          </Layout>
          <Text textColor="tertiary">(15 minutes)</Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="secondary">
          <Heading fit textColor="primary">Une api simple et efficace</Heading>
          <List textColor="tertiary">
            <ListItem><Appear fid="1">Render method</Appear></ListItem>
            <ListItem><Appear fid="2">Props</Appear></ListItem>
            <ListItem><Appear fid="3">State</Appear></ListItem>
            <ListItem><Appear fid="4">Cycle de vie</Appear></ListItem>
          </List>
        </Slide>


        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Application ?
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Les bonnes pratiques
          </Heading>
          <Text textColor="tertiary">(10 minutes)</Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <List textColor="tertiary">
            <ListItem><Appear fid="1">Stateless components</Appear></ListItem>
            <ListItem><Appear fid="2">Higher order component</Appear></ListItem>
            <ListItem><Appear fid="3">Unidirectional dataflow</Appear></ListItem>
            <ListItem><Appear fid="4">Tests</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="vertSanteclair">
          <Heading caps size={1} textColor="tertiary">
            React +
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Flux
          </Heading>
          <Text textColor="tertiary">(10 minutes)</Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="vertSanteclair">
          <List textColor="tertiary">
            <ListItem><Appear fid="1">Unidirectional dataflow</Appear></ListItem>
            <ListItem><Appear fid="2">Component</Appear></ListItem>
            <ListItem><Appear fid="3">Action Creator</Appear></ListItem>
            <ListItem><Appear fid="4">Dispatcher</Appear></ListItem>
            <ListItem><Appear fid="5">Store</Appear></ListItem>
            <ListItem><Appear fid="6">Component</Appear></ListItem>
            <ListItem><Appear fid="7">Pas un framework</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="santeclair">
          <Heading caps fit size={1} textColor="tertiary">
            Aller + loin
          </Heading>
          <Heading caps size={1} textColor="secondary">
            SVG, Canvas, Robotique...
          </Heading>
          <Heading fit caps>Universal Javascript</Heading>
          <Text textColor="tertiary">(5 minutes)</Text>
        </Slide>
      </Deck>
    );
  }
}
