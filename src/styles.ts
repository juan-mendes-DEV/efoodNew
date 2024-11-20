import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF8F2',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84'
}
export const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
        color: #e66767;

        body{
            background-color: ${cores.branca};
            color: ${cores.branca};
        }
    }
    .container{
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
    .containerTwo{
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      margin-top: 70px;

      @media (max-width: 999px) {
       display: flex;
       justify-content: center;
  }
      @media (max-width: 740px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
    .buttonHome{
      width: 82px;
    }
`
// export const Container = styled.div`

// `
