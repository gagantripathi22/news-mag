import { useRouter } from "next/router";
import React from "react";
import Article from "../../components/Article";

// export const getServerSideProps = (context) => {
//   console.log(context.props);
//   return {
//     props: {
//       // article: JSON.parse(JSON.stringify(context.query.article)),
//       article: context.query,
//     },
//   };
// };

const index = () => {
  // console.log(context.article);
  const router = useRouter();
  let query = router.query;
  query = JSON.parse(query.article);
  let queryImage = router.query;
  queryImage = queryImage.image;
  console.log("in url ", query);
  console.log("in url image ", queryImage);
  return (
    <>
      <Article post={query} image={queryImage} />
    </>
  );
};

export default index;
