import React from 'react'
import Content from './Content/Content.component'
import Menu from './Menu/Menu.component'

class Home extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Menu />
        <Content />
      </div>
    );
  }
}

export default Home;


  {/* 
        <Menu/>
        <Content>
          <Items>
            <CreateItem/>
            <ItemsList>
              <Item>
                Наполненние Итема 
                <Name/>
                <CommentsCounter/>
                <Button/>
              </Item>
            </ItemsList>
          </Items>
          <Comments>
            <CreateComment>
              Наполнение комментария
              <Avatar/>
              <TextArea/>
            </CreateComment>
            <CommentsList>
              <CommentItem>
                <Avatar/>
                <Text/>
              </CommentItem>
            </CommentsList>

          </Comments>
        </Content>
        */}