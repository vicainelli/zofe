import { GetServerSideProps } from 'next'

// const ThumbStyles = css`
//   html {
//     position: relative;
//   }
//   body {
//     height: 100vh;
//     padding: 20px;
//     position: relative;
//     z-index: -2;
//     display: grid;
//     background: radial-gradient(ellipse at top, #63b9be, #75f0a6),
//       radial-gradient(ellipse at bottom, #95f7d0, #69d2d9);

//     & > div,
//     & > div > div {
//       display: grid;
//     }
//   }
//   .main {
//     position: relative;
//     display: grid;
//     grid-auto-rows: 1fr auto;
//     padding: 3rem;
//     border-radius: 10px;
//     box-shadow: 0 0 30px #fff;
//     background-color: var(--page-background);
//   }

//   .categories {
//     list-style: none;
//     font-size: 1.4rem;
//     display: flex;
//     justify-content: flex-start;

//     li + li {
//       margin-left: 2.5rem;
//     }

//     li::before {
//       content: '#';
//       color: #75f0a6;
//     }
//   }

//   .title {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }

//   .lower {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     * {
//       margin: 0;
//       padding: 0;
//       line-height: 1;
//     }

//     .logo {
//       width: 200px;
//       margin-right: 1.5rem;
//       transform: scale(0.75);
//     }
//   }
// `
const getCategories = (keywords: string) => {
  try {
    return JSON.parse(keywords)
  } catch (err) {
    return []
  }
}

const Thumbnail = ({ query }: { query: { title: string, keywords: string} }) => {
  if (!query) return null
  const title = query.title
  const categories = getCategories(query.keywords)

  // const H1 = css`
  //   font-size: 6.5rem;
  //   margin: 0;
  //   line-height: 1.3;
  // `
  return null
  // return (
  //   <>
  //     <div className="main">
  //       <div className="title">
  //         <h1 css={H1}>{title}</h1>
  //       </div>
  //       <div className="lower">
  //         {Array.isArray(categories) && (
  //           <ul className="categories">
  //             {categories.map((category) => (
  //               <li key={category.replace(/\s/, '')}>{category}</li>
  //             ))}
  //           </ul>
  //         )}
  //         <div className="logo">
  //           <Logo />
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      query,
    },
  }
}

export default Thumbnail
