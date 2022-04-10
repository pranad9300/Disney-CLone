import styled from "styled-components"

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="viewers-disney" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-pixar.png" alt="viewers-pixar" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-marvel.png" alt="viewers-marvel" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-starwars.png" alt="viewers-starwars" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-national.png" alt="viewers-national" />
      </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
      rgb(0 0 0 / 72%) 0px 16px 10px -10px;
    transform: scale(1.1);
    border-color: rgba(249, 249, 294, 0.8);
  }
`